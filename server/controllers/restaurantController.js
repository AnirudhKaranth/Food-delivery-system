import Restaurant from "../Models/Restaurant.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import Food from "../Models/Food.js"
import Review from "../Models/Review.js"


const createJWT = (user) => {
    return jwt.sign({ userId: user.id, name: user.name, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
}

export const registerRestaurant = async (req, res, next) => {
    const { name, email, password, description, location, Category, photo, phone } = req.body
console.log(photo)
    if (!name || !email || !password || !description || !location || !Category || !phone) {
        return res.status(400).json({ msg: "Please provide all values" })
    }

    const RestaurantExists = await Restaurant.findOne({ where: { email: email } });
    if (RestaurantExists) {
        return res.status(400).json({ msg: "Restaurant with this email already exists" })
    }

    try {
        const restaurant = await Restaurant.create({  name, email, password,phone, location, description, photo, category:Category });

        const token = createJWT(restaurant);
        restaurant.dataValues.password = null

        res.status(201).json({ restaurant, token });

    } catch (error) {
        console.log(error)
        next(error)
    }

}

export const loginRestaurant = async (req, res, next) => {
    const { email, password }= req.body;

    // Check whether the user has provided all the values and if all values are not provided, throw an error
    if (!email || !password) {
        return res.status(400).json({ msg: "Please provide all values" })
    }

    try {
        const restaurant = await Restaurant.findOne({ where: { email: email } });
        if (!restaurant) {
            return res.status(400).json({ msg: "This email is not registered" })
        }

        const isPasswordCorrect = await bcrypt.compare(password, restaurant.dataValues.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ msg: "Incorrect password" })
        } else {
            const token = createJWT(restaurant);
            restaurant.dataValues.password = null

            res.status(200).json({
                restaurant,
                token
            });
        }

    } catch (error) {
        next(error)
    }




}


export const getALLRestaurants = async (req, res, next) => {
    try {

        const restaurants = await Restaurant.findAll();
        res.status(200).json({ restaurants })
    } catch (error) {
        next(error)
    }
}

export const getRestaurantDetails = async (req, res, next) => {

    const { Rid } = req.params;
    
    try {

        const restaurant = await Restaurant.findOne({ where: { id:Rid } })
        const foodItems = await Food.findAll({where:{Rid:Rid}})
        const reviews = await Review.findAll({where:{Rid:Rid, Fid:null}})


        if (!restaurant) {
            return res.status(400).json({ msg: `Restaurant with id: ${Rid} does not exist` })
        }

        restaurant.dataValues.password = null;

        res.status(200).json({
            restaurant,
            foodItems,
            reviews
        })
    } catch (error) {
        next(error)
    }

}

export const getRestaurantById = async(req, res, next)=>{
    try {
        const {userId} = req.user

        const restaurant = await Restaurant.findOne({ where: { id:userId } })

        if (!restaurant) {
            return res.status(400).json({ msg: `Restaurant with id: ${userId} does not exist` })
        }

        restaurant.dataValues.password = null;

        res.status(200).json({
            restaurant
        })


    } catch (error) {
        next(error)
    }
}

//update restaurant details

export const updateRestaurant = async(req, res, next)=>{
    const { Rid } = req.params;
}


import User from "../Models/User.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const createJWT = (user) => {
    return jwt.sign({ userId: user.id, userName: user.name , role:user.role}, process.env.JWT_SECRET , { expiresIn: process.env.JWT_LIFETIME })
}
export const signUp = async (req, res, next) => {
    try {
        // Extract required details from the body of the Request
        const { name, email, password } = req.body;

        // Check whether the user has provided all the values and if all values are not provided, throw an error
        if (!name || !email || !password) {
            return res.status(400).json({ msg: "Please provide all values" })
        }

        // Check whether the user already exists, and if the email is already registered, throw an error
        const userExists = await User.findOne({ where: { email: email } });
        if (userExists) {
            return res.status(400).json({ msg: "User already exists" })
        }



        // Then store the user in the database
        const user = await User.create({ name, email, password });

        // Create a unique token for each user (required for frontend authorization)
        console.log(user)
        const token = createJWT(user);
        user.dataValues.password = null

        // Send the required data (password is not required) to the frontend
        res.status(201).json({
            user,
            token
        });

    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        // Extract required details from the body of the Request
        const { email, password } = req.body;

        // Check whether the user has provided all the values and if all values are not provided, throw an error
        if (!email || !password) {
            return res.status(400).json({ msg: "Please provide all values" })
        }

        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(400).json({ msg: "User does not exists" })
        }
        console.log(" 1 hello")
        console.log(password)

        const isPasswordCorrect= await bcrypt.compare(password, user.dataValues.password);

        if(!isPasswordCorrect){
            return next(createCustomError("Incorrect password", 400));
        }else{
            const token = createJWT(user);
            user.dataValues.password=null;
          
            res.status(201).json({
                user,
                token
            });
        }



    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    const { password } = req.params;

    const { userId } = req.user 
    

    try {
        const requiredUser = await User.findOne({ where: { id: userId } })
        if (requiredUser) {
            const isPasswordCorrect = await bcrypt.compare(password, requiredUser.dataValues.password);
    
            if (!isPasswordCorrect) {
                return res.status(400).json({ msg: "Incorrect password" })
            }
            await requiredUser.destroy();

        } else {
            return res.status(400).json({ msg: "user does not exit" })
        }

        res.status(200).json({
            msg: "deleted successfully",

        })
    } catch (error) {
        next(error)
    }
}
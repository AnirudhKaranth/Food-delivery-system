import Review from "../Models/Review.js";
import User from "../Models/User.js";

export const addReview = async (req, res, next) => {
    const { userId, userName } = req.user 
    let { description, rating, foodId } = req.body
    rating= Number(rating)
    console.log(userName)
    try {

        const user = User.findOne({where:{id:userId}})
        if(!user){
        return res.status(400).json({msg:"Unathourized user"})
        }


        const review = await Review.create({
           description,
            rating,
            Uid: userId,
            Fid: foodId,
            userName
        })

        res.status(201).json({
            review
        })
    } catch (error) {
        next(error)
    }
}

export const getReviewsbyFoodId = async(req, res, next)=>{
    const {foodId} = req.params
    try {
        const reviews = await Review.findAll({where:{Fid: foodId}})
        res.status(200).json({
            reviews
        })
    } catch (error) {
        next(error)
    }
}

export const deleteReview = async (req, res, next) => {
    const { id } = req.params;
    try {

        const review = await Review.findOne({ where: { id } })
        if (review) {
            await review.destroy();
            return res.status(200).json({ msg: "review deleted successfully." })
        } else {
            return res.status(400).json({ msg: "review not found" })
        }
    } catch (error) {
        next(error)
    }
}


export const getAllFoodReview = async (req, res, next) => {

}
import express from  'express'
import userAuth from '../middleware/authMiddleware.js'
import { addFood, getAllFoodByCreaterId, getFoodDetails } from '../controllers/foodController.js'


const router = express.Router()

router.route("/addfood").post(userAuth, addFood)
router.route("/getAllFoodById/:restaurantId").get( getAllFoodByCreaterId)
router.route("/getFoodDetail/:foodId").get( getFoodDetails)

export default router
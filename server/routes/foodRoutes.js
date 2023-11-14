import express from  'express'
import userAuth from '../middleware/authMiddleware.js'
import { addFood, getAllFoodByCreaterId } from '../controllers/foodController.js'


const router = express.Router()

router.route("/addfood").post(userAuth, addFood)
router.route("/getAllFoodById/:restaurantId").get( getAllFoodByCreaterId)

export default router
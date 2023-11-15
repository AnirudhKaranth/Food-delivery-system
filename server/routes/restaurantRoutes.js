import express from  'express'
import { getALLRestaurants, getRestaurantById, getRestaurantDetails, loginRestaurant, registerRestaurant } from '../controllers/restaurantController.js'

const router = express.Router()

router.route("/signup").post(registerRestaurant)
router.route("/login").post(loginRestaurant)
router.route("/getAllRestaurants").get(getALLRestaurants)
router.route("/getRestaurantDetails/:Rid").get(getRestaurantDetails)
router.route("/getOwner").get(getRestaurantById)

export default router
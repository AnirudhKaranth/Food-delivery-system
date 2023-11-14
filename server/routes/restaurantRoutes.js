import express from  'express'
import { getALLRestaurants, getRestaurantDetails, loginRestaurant, registerRestaurant } from '../controllers/restaurantController'

const router = express.Router()

router.route("/signup").post(registerRestaurant)
router.route("/login").post(loginRestaurant)
router.route("/getAllRestaurants").get(getALLRestaurants)
router.route("/getDetails/:Rid").get(getRestaurantDetails)

export default router
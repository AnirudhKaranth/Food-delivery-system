import express from  'express'
import userAuth from '../middleware/authMiddleware.js'
import { addFood } from '../controllers/foodController.js'


const router = express.Router()

router.route("/addfood").post(userAuth, addFood)

export default router
import express from  'express'
import userAuth from '../middleware/authMiddleware.js'
import { addReview, deleteReview } from '../controllers/reviewController.js'


const router = express.Router()

router.route("/addreview").post(userAuth,addReview )
router.route("/deletereview").delete(userAuth,deleteReview )

export default router
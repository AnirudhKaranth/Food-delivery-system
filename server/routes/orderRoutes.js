import express from  'express'
import userAuth from '../middleware/authMiddleware.js'
import { addToCart, createOrder, getCartByUser, removeFromCart, updateOrderStatus } from '../controllers/orderController.js'


const router = express.Router()

router.route("/order").post(userAuth,createOrder )
router.route("/getAllOrdersbyOwner/:Rid").get(userAuth )
router.route("/getAllOrdersbyCustomer/:Rid").get(userAuth )
router.route("/updateorderstatus").delete(userAuth,updateOrderStatus )

router.route("/addtocart").post(userAuth,addToCart)
router.route("/getcartbyid/:userId").get(getCartByUser)
router.route("/removefromcart/:id").delete(userAuth,removeFromCart)

export default router
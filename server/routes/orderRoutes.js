import express from  'express'
import userAuth from '../middleware/authMiddleware.js'
import { addToCart, createOrder, getCartByUser, getMyOrders, getRestaurantOrders, removeFromCart, updateOrderStatus } from '../controllers/orderController.js'


const router = express.Router()

router.route("/createorder").post(userAuth,createOrder )
router.route("/getmyorders/:userId").get(getMyOrders )
router.route("/getResOrders/:Rid").get(getRestaurantOrders )
router.route("/updateorderstatus/:OrderId").patch(userAuth,updateOrderStatus )

router.route("/addtocart").post(userAuth,addToCart)
router.route("/getcartbyid/:userId").get(getCartByUser)
router.route("/removefromcart/:id").delete(userAuth,removeFromCart)

export default router
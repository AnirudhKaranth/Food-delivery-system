import express from  'express'
import { signUp, login, deleteUser } from '../controllers/userController'
import userAuth from '../middleware/authMiddleware'

const router = express.Router()

router.route("/signup").post(signUp)
router.route("/login").post(login)
router.route("/deleteuser/:password").delete(userAuth, deleteUser)

export default router
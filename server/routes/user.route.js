import express from 'express'
import { loginUser, registerUser, userCredits } from '../controllers/user.controller.js'
import { userAuth } from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/login', loginUser)
userRouter.post('/register', registerUser)
userRouter.post('/credits', userAuth, userCredits)

export default userRouter
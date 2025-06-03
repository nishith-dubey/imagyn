import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import userRouter from './routes/user.route.js'
import imageRouter from './routes/image.route.js'

const PORT = process.env.PORT || 3000

const app = express()

await connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req, res) => {
  res.send('heyy')
})

app.listen(3000, () => {
  console.log('first')
})
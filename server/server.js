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
app.use(cors({
  origin: ['http://localhost:5173', 'https://imagyn.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // If using cookies/auth headers
}));

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/', (req, res) => {
  res.send('heyy')
})

app.listen(3000, () => {
  console.log('first')
})
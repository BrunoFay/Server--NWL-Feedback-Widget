import express from 'express'
import feedbackRoute from './routes'
import cors from 'cors'
import { handleErrors } from './middlewares/handleErrors'

const app = express()
const PORT = process.env.PORT || 3333
/*  */
app.use(cors({
  origin: process.env.FRONT_URL,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"]
}))
app.use(express.json())
app.use(feedbackRoute)

app.use(handleErrors)
app.listen(PORT, () => console.log('server online'))
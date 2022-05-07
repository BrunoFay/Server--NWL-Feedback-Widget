import express from 'express'
import feedbackRoute from './routes'
import cors from 'cors'
import { handleErrors } from './middlewares/handleErrors'

const app = express()
const PORT = process.env.PORT || 3333


app.use(cors(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://nlw-feedback-widget-tau.vercel.app/"); 
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use(express.json())
app.use(feedbackRoute)

app.use(handleErrors)
app.listen(PORT, () => console.log('server online'))
import { Router } from "express";
import { FeedbackModel } from "../model";
import { FeedbackService } from "../service";

const feedbackRoute = Router()
feedbackRoute.get('/', (req, res) => {
  return res.status(200).json({ message: 'server online' })
})
feedbackRoute.post('/feedbacks', async (req, res, next) => {
  try {
    const model = new FeedbackModel()
    const service = new FeedbackService(model)
    const newFeedback = await service.createFeedback(req.body)
    await service.sendEmail(req.body)
    return res.status(201).json(newFeedback)

  } catch (error) {
    next(error)
  }
})
export default feedbackRoute
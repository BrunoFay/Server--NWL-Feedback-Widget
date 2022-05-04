import { Router } from "express";
import { FeedbackModel } from "../model";
import { FeedbackService } from "../service";

const feedbackRoute = Router()
feedbackRoute.post('/feedbacks', async (req, res) => {
  const model = new FeedbackModel()
  const service = new FeedbackService(model)
  const newFeedback = await service.createFeedback(req.body)
  await service.sendEmail(req.body)

  return res.status(201).json(newFeedback)
})
export default feedbackRoute
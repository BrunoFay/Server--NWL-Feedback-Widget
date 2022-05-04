import { RequestHandler } from "express";
import { FeedbackCreatFunc } from "../interface";

export class FeedbackController {
  createFeedback: RequestHandler = async (req, res, next) => {
    try {
      return
    } catch (error) {
      next(error)
    }

  }
}
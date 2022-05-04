import { Feedback, FeedbackCreatFunc, NewFeedback } from "../interface";
import { prisma } from "./database/prisma";

export class FeedbackModel implements FeedbackCreatFunc {

  async createFeedback({ type, comment, screenshot }: NewFeedback) {
    return await prisma.feedback.create({ data: { type, comment, screenshot } }) as Feedback
  }
}
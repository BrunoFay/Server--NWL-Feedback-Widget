import { FeedbackCreatFunc, FeedbackSendEmailfunc, FeedbackToEmail, NewFeedback } from "../interface";
import nodemailer from 'nodemailer'

export class FeedbackService implements FeedbackCreatFunc, FeedbackSendEmailfunc {
  private transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e977a04d7f41f9",
      pass: "30b4a97f3dc69d"
    }
  });
  constructor(private model: FeedbackCreatFunc) { }
   private validateFeedbackData({ type, comment, screenshot }: FeedbackToEmail) {
    if (!type) throw new Error('type not be empty')
    if (!comment) throw new Error('comment not be empty')
    if (screenshot && !screenshot?.startsWith('data:image/png;64')) {
      throw new Error('invalid screenshot  format')
    }
  }
  async createFeedback(data: NewFeedback) {
    this.validateFeedbackData(data)
    return await this.model.createFeedback(data)
  }
  async sendEmail({ type, comment }: FeedbackToEmail) {
    this.validateFeedbackData({ type, comment })

    await this.transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Bruno Alves Fay <brunofay1@hotmail.com>',
      subject: "Novo Feedback",
      html: [
        `<div style="font-family:sans-serif; font-size: 16px; color:#111;">`,
        `<p>Tipo do Feedback: ${type}</p>`,
        `<p>Comentario: ${comment}</p>`,
        `</div>`
      ].join('\n')
    })
  }
}


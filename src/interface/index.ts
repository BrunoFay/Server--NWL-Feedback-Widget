export interface NewFeedback {
  type: string,
  comment: string,
  screenshot?: string
}
export interface FeedbackToEmail {
  type: string,
  comment: string,
  screenshot?: string
}
export interface Feedback extends NewFeedback {
  id: string
}
export interface FeedbackCreatFunc {
  createFeedback: (data: NewFeedback) => Promise<Feedback | void>
}
export interface FeedbackSendEmailfunc {
  sendEmail: (data: FeedbackToEmail) => Promise<void>
}
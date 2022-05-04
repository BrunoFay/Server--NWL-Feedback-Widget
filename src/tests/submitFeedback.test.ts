import { FeedbackService } from "../service"

describe('Submite Feedback', () => {
  const creatFeedbackSpy = jest.fn()
  describe('success case', () => {
    it('should be able to create a feedback', async () => {
      const feedbackService = new FeedbackService({ createFeedback:  async () => { }  })
      await expect(feedbackService.createFeedback({
        type: 'bug',
        comment: 'exemple'
      })).resolves.not.toThrow()
    })
    it(' createFeedback should be called ', async () => {
      const feedbackService = new FeedbackService({ createFeedback: creatFeedbackSpy })
      await feedbackService.createFeedback({
        type: 'bug',
        comment: 'exemple'
      })
      expect(creatFeedbackSpy).toHaveBeenCalled()
    })
    it('should be able to submit a feedback', async () => {
      const feedbackService = new FeedbackService({ createFeedback: async () => { } })
      await expect(feedbackService.sendEmail({
        type: 'bug',
        comment: 'exemple'
      })).resolves.not.toThrow()
    })

  })
  describe('fail case', () => {
    it('should raise an error if type was empty in createFeedback', async () => {
      const feedbackService = new FeedbackService({ createFeedback: async () => { } })
      await expect(feedbackService.createFeedback({
        type: '',
        comment: 'exemple'
      })).rejects.toThrow()
    })
    it('should raise an error if comment was empty in createFeedback', async () => {
      const feedbackService = new FeedbackService({ createFeedback: async () => { } })
      await expect(feedbackService.createFeedback({
        type: 'bug',
        comment: ''
      })).rejects.toThrow()
    })
    it('should raise an error if screenshot was invalid format in createFeedback', async () => {
      const feedbackService = new FeedbackService({ createFeedback: async () => { } })
      await expect(feedbackService.createFeedback({
        type: 'bug',
        comment: 'exemple',
        screenshot: 'image.jpg'
      })).rejects.toThrow()
    })
    it('should raise an error if type was empty in sendEmail', async () => {
      const feedbackService = new FeedbackService({ createFeedback: async () => { } })
      await expect(feedbackService.sendEmail({
        type: '',
        comment: 'exemple'
      })).rejects.toThrow()
    })
    it('should raise an error if comment was empty in sendEmail', async () => {
      const feedbackService = new FeedbackService({ createFeedback: async () => { } })
      await expect(feedbackService.sendEmail({
        type: 'bug',
        comment: ''
      })).rejects.toThrow()
    })
  })
})
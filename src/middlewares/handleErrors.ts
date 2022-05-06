import { ErrorRequestHandler } from 'express'
export const handleErrors: ErrorRequestHandler = (err, req, res, next) => {
  if (err) {
    return res.status(500).json({ message: `${err}` })
  }
}
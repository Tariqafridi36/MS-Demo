const Joi = require('joi')
const schemas = require('./searchRequestSchema')
const middleware = () => {
  return (req, res, next) => {
    const { error } = schemas.searchRequest.validate(req.body)
    const valid = error == null

    if (valid) {
      next()
    } else {
      const { details } = error
      const message = details.map((i) => i.message).join(',')

      console.log('error:', message)
      res.status(422).send({ error: message })
    }
  }
}
module.exports = middleware

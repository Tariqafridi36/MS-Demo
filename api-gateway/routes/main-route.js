const mainRouter = require('express').Router()
const request = require('request-promise-native')

mainRouter.post('/search-clinic', async (req, res, next) => {
  try {
    let data = await request('http://localhost:8001/clinic1/do-search', {
      method: 'post',
      body: req.body,
      headers: {
        'content-type': 'application/json',
      },

      json: true,
    })

    let data2 = await request('http://localhost:8002/clinic2/do-search', {
      method: 'post',
      body: req.body,
      headers: {
        'content-type': 'application/json',
      },

      json: true,
    })

    const result = [...data.data, ...data2.data]

    res.send(result)
  } catch (error) {
    res.json({ error: error.response.body.error })
  }
})

module.exports = mainRouter

const axios = require('axios').create()

const targetUrls =
  'http://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json'

exports.seachPersistence = async () => {
  let responseResult = []

  try {
    const response = await axios({
      url: targetUrls,
      method: 'get',
      data: null,
    })

    responseResult = response.data
  } catch (err) {
    console.log(err.message)
  }

  return responseResult
}

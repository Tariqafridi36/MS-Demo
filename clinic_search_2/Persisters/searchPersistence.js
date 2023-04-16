const axios = require('axios').create()

const targetUrls =
  'https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json'

exports.seachPersistence = async () => {
  let responseResult = []

  try {
    const response = await axios({
      url: targetUrls,
      method: 'get',
      data: null,
    })

    response.data.map((obj) => {
      responseResult.push({
        name: obj.clinicName,
        stateName: obj.stateCode,
        availability: obj.opening,
      })
    })
  } catch (err) {
    console.log(err.message)
  }

  return responseResult
}

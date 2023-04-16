const express = require('express')
const cors = require('cors')
const mainRouter = require('./routes/main-route')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', mainRouter)

const PORT = 8000

app.listen(PORT, () => {
  console.log(`API gateway service is listening on port ${PORT}`)
})

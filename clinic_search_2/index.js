const express = require('express')
const cors = require('cors')
const searchRouter = require('./Routers/searchRouter')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/clinic2', searchRouter)

const port = process.env.PORT || 8002
app.listen(port, () => {
  console.log(`service is running on port ${port}`)
})

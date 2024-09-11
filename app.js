const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const port = process.env.PORT | 3001

let registros = {}

app.use(cors())

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/registro', (req, res) => {
  const data = req.body
  registros = {...data}
  res.status(200).json({msg: 'OK', data: registros})
  console.log(registros)
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})
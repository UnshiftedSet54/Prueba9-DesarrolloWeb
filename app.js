const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT | 3001

let registros = []

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/registro', (req, res) => {
  const data = req.body
  registros = [...registros, data]
  res.status(200).json({msg: 'OK', data})
  console.log(registros)
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})
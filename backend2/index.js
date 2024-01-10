const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(4000, () => {
  // console.log("Server is running on port 4000");
})


app.get('/', (req, res) => {
  res.json("haii")
})

app.get('/test', (req, res) => {
  res.json({ name: "kajs", age: 645 })
})
app.post('/test', (req, res) => {
  const { name, fields } = req.query
  res.json({ name, fields })
})
app.post('/test2', (req, res) => {
  const { name, age } = req.body
  res.json({ name, age })
})

app.get('/test3', (req, res) => {
  const { name, age,village } = req.query
  res.json({ name, age, village })
})
app.post('/test4', (req, res) => {
  const { name, age,village,adress } = req.query
  res.json({ name, age, village, adress })
})
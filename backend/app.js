const express = require('express')
const fileupload = require('express-fileupload')
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  }),
)
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const connection = mysql.createConnection({
  host: 'mysql_server',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

connection.connect()

app.post('/process', async (req, res) => {
  try {
    const name = req.body.name
    const image = req.body.image
    const price = req.body.price
    const recipientAddress = req.body.recipientAddress
    const description = req.body.description

    if (!name || !description || !price || !image || !recipientAddress) {
      return res.status(400).json({
        message:
          'name, description, recipientAddress, image, and price must not be empty',
      })
    }

    connection.query(
      `
      INSERT INTO mints (name, description, image, price)
      VALUES (?, ?, ?, ?);
      `,
      [name, description, image, price],
      function (error, results, fields) {
        if (error) throw error
        console.log(results)
      },
    )

    return res
      .status(201)
      .json({ message: 'Minted successfully', name, description, price, image })
  } catch (error) {
    console.log(error)
    return res.status
  }
})

app.get('/mints', async (req, res) => {
  connection.query('SELECT * FROM mints', (err, mints) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    return res.status(200).json({ data: mints })
  })
})

app.get('/', async (req, res) => {
  return res.status(200).json({ message: 'Hello World' })
})

app.listen(9000, async () => {
  console.log('Listen on the port 9000...')
})

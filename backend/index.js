const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const sqlite3 = require('sqlite3')
const { booksSQLite } = require("./books")
const db = new sqlite3.Database('./mydb.db')




const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(4000, () => {
  // console.log("Server is running on port 4000");
})

app.get('/', (req, res) => {
  return res.json(['apple', 'bat', 'cat'])
})

app.get('/test', (req, res) => {
  return res.json({ name: "basha", age: 645 })
})

app.post('/test', (req, res) => {
  const { name, fields } = req.query
  return res.json({ name, fields })
})

app.post('/test2', (req, res) => {
  const { name, age } = req.body
  return res.json({ name, age })
})

app.get('/test2', (req, res) => {
  const { fname, lname } = req.query
  return res.json({ fname, lname })
})

app.post('/test3', (req, res) => {
  const { address, phone } = req.body
  return res.json({ address, phone })
})

// Get all students
app.get('/student', (req, res) => {
  const sql = "SELECT * FROM student"
  db.all(sql, (error, result) => {
    return res.json(result)
  })
})

app.post('/student', (req, res) => {
  const { name, phone } = req.body
  const sql = "INSERT INTO student (name,phone)values(?,?)"

  db.run(sql, [name, phone], (error) => {
    if (error) {
      return res.json(error.message)
    }
    return res.json(`${name}added successfully.`)
  })

})


app.get('/Teacher', (req, res) => {
  const sql = "SELECT * FROM Teacher"
  db.all(sql, (error, result) => {
    if (error) return res.json(error.message)
    return res.json(result)
  })
})

app.get('/Teacher/:id', (req, res) => {
  const id = req.params.id
  const sql = "SELECT * FROM Teacher WHERE id =?"
  db.all(sql, [id], (error, result) => {
    if (error) return res.json(error.message)
    if (result.length === 0) return res.json("No data found")
    return res.json(result[0])
  })
})


app.post('/Teacher', (req, res) => {
  const { name, salary, city, address, phone } = req.body;
  const currentDate = new Date().toLocaleDateString('en-GB'); // Format: Y-m-d
  const sql = "INSERT INTO Teacher (name, salary, currentDate, city, address, phone) values (?, ?, ?, ?, ?, ?)";

  db.run(sql, [name, salary, currentDate, city, address, phone], (error) => {
    if (error) {
      return res.json(error.message);
    }
    return res.json(`${name} added successfully.`);
  });
});

db.run(`CREATE TABLE IF NOT EXISTS Teacher (
  [id] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  [name] TEXT,
  [salary] TEXT,
  [currentDate] TEXT,
  [city] TEXT,
  [address] TEXT,
  [phone] TEXT
)
`);

app.delete('/Teacher/:id', (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM Teacher WHERE id =?";

  db.run(sql, [id], (error) => {
    if (error) {
      return res.json(error.message);
    }
    return res.json(`Teacher with ID ${id} deleted successfully.`);
  });
});
booksSQLite(app, db)



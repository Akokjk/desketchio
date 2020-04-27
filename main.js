const express = require("express")
const app = express()
const port = 300

//configuration
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => res.sendfile("index.html"))
app.get('/about', (req, res) => res.sendfile("about.html"))

app.get('/sketch/:sketchID', (req, res) => {
    res.sendFile(__dirname + "/"+ req.params.sketchID + ".html", function (err) {
    if (err) {
      res.send("Comic does not exist.")
    }
  })
})
app.listen(port)

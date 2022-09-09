const express = require('express')
const app = express()
const estados = require("./estados.json")
const cors = require('cors');
app.use(cors());


app.get('/', function (req, res) {
    res.send(estados)

})

app.listen(8000)
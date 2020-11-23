const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World from Product Data!!')
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

let saltLake = {}

app.get('/yards', (req, res) => res.send(saltLake))



app.post('/yards', (req, res) => {
    console.log(req.body)
    saltLake = req.body
    res.send(saltLake) 
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
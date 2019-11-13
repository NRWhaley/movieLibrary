
const movies = require('./movieList.js')
const fse = require('fs-extra')
const bodyParser = require('body-parser')

const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const jsonParse = bodyParser.json()
const urlencodedParse = bodyParser.urlencoded({extended: false})

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
});



app.get('/list', (req, res) =>
{
  fse.readFile('./message.txt', 'utf8', (err, data) => {

    res.send(data)
  })


});


app.post('/updateList', urlencodedParse, (req, res) => {

  let newList = req.body
  console.log(req.body)

  res.send('Movies updated')

})
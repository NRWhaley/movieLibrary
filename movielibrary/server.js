
const movies = require('./movieList.js')
const fse = require('fs-extra')

const express = require('express');
const app = express();

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
});



app.get('/list', (req, res) =>
{
  fse.readFile('./movieList.js', 'utf8', (err, data) => {
    let parsedList = JSON.parse(data)
    res.send(parsedList)
  })


});

const movies = require('./movieList.js')

const express = require('express');
const app = express();

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
});



app.get('/list', (req, res) =>
{
  res.send({express: movies})
});
import express from 'express';

const app = express();
const port = 4000;
const names = ['app', 'aditya']

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/names', (req, res) => {
  res.json({names});
});

app.get('/ejs', (req, res) => {
  res.render("index");
});
app.listen(port, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server listening at http://localhost:${port}`);
  
});

import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server listening at http://localhost:${port}`);
  
});

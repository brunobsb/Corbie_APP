import express from 'express';
import hello from './utils/helloWorld';


const app = express();

app.get('/', (req, res) => {
  const helloWorld = hello();

  res.json(helloWorld);
});

app.listen(3000, () => console.log('App running on PORT 3000'));

import express from 'express';
import router from './routes';

const app = express();

app.use('/api', router);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

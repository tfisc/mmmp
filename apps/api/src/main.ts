import express from 'express';
import cors from 'cors';
import shiftsRouter from './app/routes/shifts.route';
import authRouter from './app/routes/auth.route'

const app = express();
const URL_PREFIX = '/api/v1';
app.use(cors());
app.use(express.json());
app.use(`${URL_PREFIX}/shifts`, shiftsRouter);
app.use(`${URL_PREFIX}/auth`, authRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

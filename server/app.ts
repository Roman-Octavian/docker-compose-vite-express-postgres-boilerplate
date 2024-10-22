import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import calculationsRouter from './routers/calculationsRouter';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', calculationsRouter);

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, () => {
  const address = server.address();
  const port = typeof address === 'string' ? address : address?.port;
  console.log(`\nExpress is running on: \x1b[36mhttp://localhost:${port}\x1b[0m\n`);
});

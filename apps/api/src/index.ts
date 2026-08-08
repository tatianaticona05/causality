import express from 'express';
import { createHealthStatus } from '@causality/shared';

const app = express();
const parsedPort = Number(process.env.PORT);
const port = Number.isInteger(parsedPort) && parsedPort > 0 ? parsedPort : 4000;

app.get('/health', (_req, res) => {
  res.json(createHealthStatus('api'));
});

app.listen(port, () => {
  console.log(`api listening on http://localhost:${port}`);
});

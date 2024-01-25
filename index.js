const http = require('http');
require('dotenv').config();

const app = require('./app/index');

const port = process.env.PORT ?? 3000;
const server = http.createServer(app);

server.listen(port, () => {
  if (process.env.NODE_ENV === 'dev') console.log(`Listening on http://localhost:${port}`);
});

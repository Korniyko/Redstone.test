import * as path from 'path';
import routes from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';



const express = require('express');

const app = express();
app.use(cors());
let devMiddleware;
if (process.env.NODE_ENV === 'local') {
  devMiddleware = require('./middleware/devMiddleware').default;
  app.use(devMiddleware);
}
app.use(bodyParser.json({ limit: '50mb' }))
app.use(express.static(path.resolve(__dirname, '..', '..', 'dist', 'frontend')));
app.use('/api', routes)

app.get(['/', '/*'], (req, res) => {
  const indexFilePath = path.resolve(__dirname, '..', '..', 'dist', 'frontend', 'index.html');
  if (devMiddleware) {
    res.header('Content-Type', 'text/html; charset=UTF-8');

    res.end(devMiddleware[0].context.outputFileSystem.readFileSync(indexFilePath));
  } else {
    res.sendFile(indexFilePath);
  }
});


app.listen(6500, () => {
  console.log('server-start')
});






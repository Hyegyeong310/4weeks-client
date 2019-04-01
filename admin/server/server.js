// server.js
const express = require('express');
const next = require('next');
/*
const devProxy = {
  '/api': {
    pathRewrite: { '^/api': '/' },
    changeOrigin: true
  }
};

const port = parseInt(process.env.PORT, 10) || 9090;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({
  dir: '.',
  dev
});

const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();

    if (dev && devProxy) {
      const proxyMiddleware = require('http-proxy-middleware');
      Object.keys(devProxy).forEach(function(context) {
        server.use(proxyMiddleware(context, devProxy[context]));
      });
    }
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch(err => {
    console.log('Error occurred, unable to start the server');
    console.log(err);
  });
  */

const start = async () => {
  try {
    const app = express();

    const nextApp = next({
      dev: process.env.NODE_ENV !== 'production'
    });
    const handle = nextApp.getRequestHandler();

    await nextApp.prepare();

    app.get('*', (req, res) => handle(req, res));

    await app.listen(9090, err => {
      let env = process.env.PORT || 9090;
      if (err) throw err;
      console.log(`> Ready on Server Port: ${env}`);
    });
  } catch (e) {
    console.error(e.stack);
    process.exit(1);
  }
};

start();

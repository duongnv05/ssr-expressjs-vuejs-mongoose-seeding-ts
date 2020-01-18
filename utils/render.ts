import path from 'path';

import { createBundleRenderer } from 'vue-server-renderer';

const template = require('fs').readFileSync(path.join(__dirname, '../template/index.html'), 'utf-8');

const serverBundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest,
  inject: false
});

export default (req, res, data = {}) => {
  const context = typeof req.context != 'undefined' ? req.context : {}
  context.url = req.url;

  renderer.renderToString(context, (err, html) => {
    if(err) {
      if(+err.message === 404) {
        res.status(404).end('Page not found');
      } else {
        console.log(err);
        res.status(500).end('Internal Server Error');
      }
    }

    res.end(html);
  })
}
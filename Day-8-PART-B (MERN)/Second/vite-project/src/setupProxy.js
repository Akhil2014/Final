const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com',
      changeOrigin: true,
    })
  );
};

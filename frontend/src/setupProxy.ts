import { createProxyMiddleware } from 'http-proxy-middleware';
module.exports = function(app: any) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://backend:5001',
      changeOrigin: true,
    })
  );
};
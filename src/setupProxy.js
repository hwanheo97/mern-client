const {createProxyMiddleware } = require('http-proxy-middleware');
//proxy로 대체 가능 <= { createProxyMiddleware }
module.exports = function(app) {
   
  app.use(
    '/api',
    createProxyMiddleware({
     //proxy로 대체 가능 <= { createProxyMiddleware }
    target: 'https://mern-communication.herokuapp.com',  
   // target: 'http://localhost:5000',  
      changeOrigin: true,
      
    })
  );
  
};

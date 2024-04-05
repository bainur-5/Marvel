const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Проксирование запросов к API Marvel
app.use('/v1/public', createProxyMiddleware({
    target: 'http://gateway.marvel.com',
    changeOrigin: true,
}));

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

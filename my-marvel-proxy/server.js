const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Настройка прокси для обработки запросов к Marvel API
app.use('/marvel-api', createProxyMiddleware({
  target: 'http://gateway.marvel.com',
  changeOrigin: true,
  pathRewrite: {
    '^/marvel-api': '/v1/public' // Удаляет /marvel-api из URL и использует остальную часть в запросе к Marvel API
  }
}));

// Запуск сервера на порте 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Прокси-сервер запущен на порту ${PORT}`);
});

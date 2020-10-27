const express = require('express');
const path = require('path');
const pages = require('./pages');

// Iniciar express
const server = express();
// Utilizar body da req
server.use(express.urlencoded({ extended: true }));
// Servir os arquivos estáticos
server.use(express.static('public'));

// Configurar template engine (para modificar HTML dinamicamente via servidor)
// 'views' é uma propriedade do método set do express
// e nome padrão p/ o diretório de arquivos HTML quando se usam tamplate engines
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

// Criar rotas
server.get('/', pages.index);
server.get('/orphanage', pages.orphanage);
server.get('/orphanages', pages.orphanages);
server.get('/create-orphanage', pages.createOrphanage);
server.post('/save-orphanage', pages.saveOrphanage);
// acesso via insomnia
server.delete('/remove-orphanage', pages.removeOrphanage);
server.get('/get-orphanages', pages.getOrphanages);

const port = process.env.PORT || 5500;

server.listen(port, '0.0.0.0');

const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//rotas
routes.get('/products', ProductController.index);
//criando a rota com id o :id significa q ele irá receber um parâmetro do tipo id
routes.get('/products/:id', ProductController.show);
routes.post('/products',ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);
   
//módulo para paginação
//npm install mongoose paginate

//instalando o cors : npm install cors

//expotando o arquivo de módulo 
module.exports = routes; 
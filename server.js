const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB (banco de dados mongodb)
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//require no arquivo de model 1 por 1
//require('./src/models/Product');

//biblioteca para importar vários arquivos de model:
//npm install require-dir
//require em todos os models com require-dir
requireDir('./src/models');

//usar o arquivo de rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**
 * Tipos de parametros:
 * 
 * Query: Parametros nomeados enviados na rota após o simbolo de ? Servem para filtros / paginação
 * Route Params: Parametros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.listen(3333);
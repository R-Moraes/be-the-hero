/**Instacia o express */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

/**Converte o json em um objeto do javascript */
app.use(express.json());

/**
 * Rota / Recurso
 */

 /**
  * Método HTTP
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de Parametros
   * 
   * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, Paginação)
   * Router Params: Parametros utilizados para identificar recursos
   * Request Body:Corpo da requisição, utilizado para criar ou alterar recursos 
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc.
    */

    /** Comunicação com O Banco de Dados
     * Driver: 
     */
app.use(routes); 


app.listen(3333);
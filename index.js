const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const graphqlResolver = require('./graphql/resolver')
const graphqlSchema = require('./graphql/schema')
const dotenv = require('dotenv').config()


const app = express();
const port = process.env.PORT || 3000; 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(`mongodb+srv://${process.env.NOSQL_USER}:${process.env.NOSQL_PWD}@${process.env.NOSQL_HOST}/${process.env.NOSQL_TABLE}`,{ useNewUrlParser: true })
  .then(result => {
    app.listen(port);
    console.log('Your first node api is running on port: ' + port);
  })
  .catch(err => console.log(err));
  
  app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}));
 

module.exports = app;
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'Documentation for the Express API using Swagger',
    },
  },
  apis: ['./app.js'], // Specify the path to your Express routes file
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
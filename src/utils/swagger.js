const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUiExpress = require('swagger-ui-express');

const options = {
    definition : {
        openapi : "3.0.1",
        info: {
            title: "FoodCrud JS",
            version: "1.0.0"
        },
        servers: [
            {
                url: '/api/v1'
            },
        ],
    },
    
    apis: ["src/utils/specification.yaml"]
} 

const swaggerSpec = swaggerJsDoc(options);


module.exports = (path, app) => app.use(path, swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));
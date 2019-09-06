import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger.json';

const swaggerRoute = Router();

const options = {
    explorer: true
};

swaggerRoute.use('/', swaggerUi.serve);
swaggerRoute.get('/', swaggerUi.setup(swaggerDoc, options));

export default swaggerRoute;

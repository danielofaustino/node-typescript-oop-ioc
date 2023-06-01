
import express, { Router } from 'express';
import starWarsRoutes from './starwars';

const routes: Router = express.Router();

routes.use('/starwars', starWarsRoutes);

export default routes;
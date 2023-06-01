import express, { Router } from 'express';
import { StarWarsController } from '../controllers/StarWarsController';
import { StarWarsService } from '../services/StarwarsService';

const starWarsRoutes: Router = express.Router();
const starWarsService = new StarWarsService();
const starWarsController = new StarWarsController(starWarsService);


starWarsRoutes.get('/starships', starWarsController.getStarships.bind(starWarsController));

export default starWarsRoutes;
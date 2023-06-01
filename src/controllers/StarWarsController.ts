import { Request, Response } from 'express';
import { StarWarsService } from '../services/StarwarsService';


export class StarWarsController {
  private starWarsService: StarWarsService;

  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
  }

  async getStarships(req: Request, res: Response) {
    try {
      const starships = await this.starWarsService.getStarships();
      res.json(starships);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
import axios, { AxiosResponse } from 'axios';
import { get } from 'request';

import { STARWARS_BASE_URL } from '../config';

export class StarWarsService {
  async getStarships(): Promise<AxiosResponse<any>> {
    const response = await axios.get(`${STARWARS_BASE_URL}`);
    return response.data;
  }
}



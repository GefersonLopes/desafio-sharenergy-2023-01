import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CatsService {
  async findOne(id: number) {
    return await axios
      .get(`https://http.cat/${id}`)
      .then((response) => {
        console.log(response.data);
        console.log(JSON.stringify(response));
        return response.data;
      })
      .catch((error) => console.log(error));
  }
}

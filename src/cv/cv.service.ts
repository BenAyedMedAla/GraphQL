import { Injectable } from '@nestjs/common';
import { Cv } from './entities/cv.entity';
import { cvs } from 'src/fake-data/db';

@Injectable()
export class CvService {
    findAll():Cv[]{
        return cvs;
      }
      findById(id: string): Cv | undefined {
        return cvs.find(cv => cv.id === id);
      }


}

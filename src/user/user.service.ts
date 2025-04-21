import { Injectable } from '@nestjs/common';
import { users } from 'src/fake-data/db';
import { User } from './entities/user.entity';
import { Role } from 'src/enums/user-role.enum';

@Injectable()
export class UserService {
    findOneById(id: string) {
        return users.find(u => u.id === id);
      }
}
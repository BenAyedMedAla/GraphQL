import { Module } from '@nestjs/common';
import { CvResolver } from './cv.resolver';
import { CvService } from './cv.service';
import { UserService } from 'src/user/user.service';
import { SkillService } from 'src/skill/skill.service';

@Module({
  providers: [CvResolver, CvService, UserService, SkillService]
})
export class CvModule {}

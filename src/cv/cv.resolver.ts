import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Cv } from './entities/cv.entity';
import { CvService } from './cv.service';
import { UserService } from 'src/user/user.service';
import { SkillService } from 'src/skill/skill.service';
import { User } from 'src/user/entities/user.entity';
import { Skill } from 'src/skill/entities/skill.entity';

@Resolver(() => Cv)
export class CvResolver {
    constructor(private readonly cvService: CvService,
        private readonly userService: UserService,
        private readonly skillService: SkillService,) {}
    
    @Query(() => [Cv], { name: 'getAllCvs' })
    getAllCvs(): Cv[] {
        return this.cvService.findAll();
      }
      @Query(() => Cv, { name: 'getCvById', nullable: true })
      getCvById(@Args('id') id: string): Cv | undefined {
        return this.cvService.findById(id);
      }
     
//       @ResolveField(() => User)
//   user(@Parent() cv: Cv){
//     // on utilise cv.userId de tes fake-data
//     return this.userService.findOneById((cv as any).userId);
//   }

  @ResolveField(() => [Skill])
  skills(@Parent() cv: Cv): Skill[] {
    return this.skillService.findByCvId((cv as any).id);
  }
    
}

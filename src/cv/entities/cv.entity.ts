import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Skill } from 'src/skill/entities/skill.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Cv {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => Int)
  age: number;

  @Field()
  job: string;
  
  @Field(() => User)
  user: User;

  @Field(() => [Skill])
  skills: Skill[];
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/enums/user-role.enum';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Role)
  role: Role;
}

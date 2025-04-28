import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCvInput {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field()
  job: string;

  @Field()
  userId: string;

  @Field(() => [String])
  skillIds: string[];
}

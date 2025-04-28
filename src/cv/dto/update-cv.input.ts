import { CreateCvInput } from './create-cv.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCvInput extends PartialType(CreateCvInput) {
  @Field()
  id: string;
}

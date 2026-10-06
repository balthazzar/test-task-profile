import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Profile } from './profile.model.js';

@ObjectType()
export class ProfilePage {
  @Field(() => [Profile])
  items: Profile[];

  @Field(() => Int)
  page: number;

  @Field(() => Int)
  limit: number;

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  totalPages: number;
}
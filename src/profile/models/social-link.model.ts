import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SocialLink {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  displayName: string;

  @Field()
  url: string;

  @Field()
  iconUrl: string;
}
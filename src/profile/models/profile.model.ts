import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Skill } from './skill.model.js';
import { Experience } from './experience.model.js';
import { Project } from './project.model.js';
import { SocialLink } from './social-link.model.js';

@ObjectType()
export class Profile {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [SocialLink])
  socialLinks: SocialLink[];

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experience: Experience[];

  @Field(() => [Project])
  projects: Project[];
}
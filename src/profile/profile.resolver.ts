import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';
import { Profile } from './models/profile.model.js';
import { ProfilePage } from './models/profile-page.model.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfilePage)
  async profiles(
    @Args('page', {
      type: () => Int,
      defaultValue: 1,
    })
    page: number,

    @Args('limit', {
      type: () => Int,
      defaultValue: 10,
    })
    limit: number,
  ) {
    if (page < 1) {
      throw new Error('Page must be greater than 0');
    }

    if (limit < 1 || limit > 100) {
      throw new Error('Limit must be between 1 and 100');
    }

    return this.profileService.getProfiles(page, limit);
  }

  @Query(() => Profile)
  async profile(
    @Args('id', {
      type: () => Int,
      nullable: true,
    })
    id?: number,
  ) {
    return this.profileService.getProfile(id);
  }
}
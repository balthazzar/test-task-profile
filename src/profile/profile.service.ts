import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly profileInclude = {
    socialLinks: {
      orderBy: {
        id: 'asc' as const,
      },
    },
    skills: {
      orderBy: {
        name: 'asc' as const,
      },
    },
    experience: {
      orderBy: {
        startDate: 'desc' as const,
      },
    },
    projects: {
      orderBy: {
        name: 'asc' as const,
      },
    },
  };

  async getProfiles(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.profile.findMany({
        skip,
        take: limit,
        include: this.profileInclude,
        orderBy: {
          id: 'asc',
        },
      }),
      this.prisma.profile.count(),
    ]);

    return {
      items,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getProfile(id?: number) {
    const profile =
      !id ? await this.prisma.profile.findFirst({
            include: this.profileInclude,
            orderBy: {
              id: 'asc',
            },
          })
        : await this.prisma.profile.findUnique({
            where: { id },
            include: this.profileInclude,
          });

    if (!profile) {
      throw new NotFoundException(
        id === undefined
          ? 'Profile not found'
          : `Profile with id ${id} not found`,
      );
    }

    return profile;
  }
}
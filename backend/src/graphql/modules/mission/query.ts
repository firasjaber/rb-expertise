import { extendType, nonNull, intArg, nullable, stringArg, booleanArg } from 'nexus';
import { UserInputError } from 'apollo-server';

export const MissionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('missions', {
      description: 'Get All Missions',
      type: 'Mission',
      args: {
        searchQuery: nullable(stringArg()),
        active: nullable(booleanArg()),
      },
      resolve(_root, args, ctx) {
        if (!args.active) {
          const searchQ = args.searchQuery ?? undefined;
          return ctx.prisma.mission.findMany({ where: { title: { contains: searchQ } } });
        } else {
          return ctx.prisma.mission.findMany({ where: { finished: false } });
        }
      },
    });
    t.field('mission', {
      description: 'Get a single Mission by its ID',
      type: 'Mission',
      args: {
        missionId: nonNull(intArg()),
      },
      async resolve(_root, args, ctx) {
        const mission = await ctx.prisma.mission.findUnique({ where: { id: args.missionId } });
        if (!mission) throw new UserInputError('Mission not found');
        return mission;
      },
    });
  },
});

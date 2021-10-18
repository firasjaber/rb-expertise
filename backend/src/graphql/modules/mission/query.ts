import { extendType, nonNull, intArg, nullable, stringArg } from 'nexus';
import { UserInputError } from 'apollo-server';

export const MissionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('missions', {
      type: 'Mission',
      args: {
        searchQuery: nullable(stringArg()),
      },
      resolve(_root, args, ctx) {
        const searchQ = args.searchQuery ?? undefined;
        return ctx.prisma.mission.findMany({ where: { title: { contains: searchQ } } });
      },
    });
    t.field('mission', {
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

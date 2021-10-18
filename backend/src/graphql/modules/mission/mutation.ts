import { UserInputError } from 'apollo-server-errors';
import { extendType, nonNull, inputObjectType, arg } from 'nexus';

export const MissionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createMission', {
      description: 'Create a mission',
      type: 'Mission',
      args: {
        data: arg({ type: nonNull(MissionCreateInput) }),
      },
      async resolve(_root, { data }, ctx) {
        return ctx.prisma.mission.create({
          data,
        });
      },
    });
    t.field('resolveMission', {
      description: 'Resolve a Mission by changing status to finished',
      type: 'Mission',
      args: {
        data: arg({ type: nonNull(MissionResolveInput) }),
      },
      async resolve(_root, { data }, ctx) {
        const { id, finished } = data;
        const mission = await ctx.prisma.mission.findUnique({ where: { id } });
        if (!mission) throw new UserInputError('Mission not found');
        return ctx.prisma.mission.update({
          where: { id },
          data: {
            finished,
          },
        });
      },
    });
  },
});

const MissionCreateInput = inputObjectType({
  name: 'MissionCreateInput',
  definition(t) {
    t.nonNull.string('title');
    t.nonNull.date('starts');
    t.nonNull.date('ends');
    t.nonNull.string('address');
    t.nullable.boolean('finished');
    t.nonNull.string('carRegistrationNumber');
    t.nonNull.string('carHolderName');
    t.nonNull.string('carHolderEmail');
    t.nonNull.string('carHolderPhone');
    t.nonNull.string('assuranceContractNumber');
    t.nonNull.string('repairAgencyName');
    t.nonNull.string('repairAgencyResponsible');
    t.nonNull.string('repairAgencyEmail');
    t.nonNull.string('repairAgencyPhone');
    t.nonNull.int('employeeId');
    t.nonNull.int('assuranceId');
  },
});

const MissionResolveInput = inputObjectType({
  name: 'MissionResolveInput',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.boolean('finished');
  },
});

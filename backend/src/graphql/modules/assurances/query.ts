import { extendType, nullable, stringArg } from 'nexus';

export const AssuranceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('assurances', {
      description: 'Get all Assurances Companies',
      type: 'Assurance',
      resolve(_root, _args, ctx) {
        return ctx.prisma.assurance.findMany();
      },
    });
  },
});

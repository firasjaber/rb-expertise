import { extendType, nonNull, intArg, nullable, stringArg } from 'nexus';
import { UserInputError } from 'apollo-server';

export const AppointmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('appointments', {
      type: 'Appointment',
      args: {
        searchQuery: nullable(stringArg()),
      },
      resolve(_root, args, ctx) {
        const searchQ = args.searchQuery ?? undefined;
        return ctx.prisma.appointment.findMany({ where: { title: { contains: searchQ } } });
      },
    });
    t.field('appointment', {
      type: 'Appointment',
      args: {
        appointmentId: nonNull(intArg()),
      },
      async resolve(_root, args, ctx) {
        const appointment = await ctx.prisma.appointment.findUnique({ where: { id: args.appointmentId } });
        if (!appointment) throw new UserInputError('Appointment not found');
        return appointment;
      },
    });
  },
});

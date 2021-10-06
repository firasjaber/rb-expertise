import { UserInputError } from 'apollo-server-errors';
import { extendType, nonNull, inputObjectType, arg } from 'nexus';

export const AppointmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createAppointment', {
      type: 'Appointment',
      args: {
        data: arg({ type: nonNull(AppointmentCreateInput) }),
      },
      async resolve(_root, { data }, ctx) {
        return ctx.prisma.appointment.create({
          data,
        });
      },
    });
    t.field('resolveAppointment', {
      type: 'Appointment',
      args: {
        data: arg({ type: nonNull(AppointmentResolveInput) }),
      },
      async resolve(_root, { data }, ctx) {
        const { id, resolved } = data;
        const appointment = await ctx.prisma.appointment.findUnique({ where: { id } });
        if (!appointment) throw new UserInputError('Appointment not found');
        return ctx.prisma.appointment.update({
          where: { id },
          data: {
            resolved,
            resolvedAt: new Date(),
          },
        });
      },
    });
  },
});

const AppointmentCreateInput = inputObjectType({
  name: 'AppointmentCreateInput',
  definition(t) {
    t.nonNull.string('title');
    t.nonNull.string('location');
    t.nonNull.date('date');
    t.string('notes');
    t.nonNull.int('employeeId');
    t.nonNull.int('assuranceId');
  },
});

const AppointmentResolveInput = inputObjectType({
  name: 'AppointmentResolveInput',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.boolean('resolved');
  },
});

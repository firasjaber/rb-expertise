import { extendType, nonNull, inputObjectType, arg, intArg } from 'nexus';

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

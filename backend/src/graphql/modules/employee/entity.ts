import { objectType } from 'nexus';
import { Context } from '../../../context';

export const Employee = objectType({
  name: 'Employee',
  definition(t) {
    t.nonNull.int('id');
    t.string('firstName');
    t.string('lastName');
    t.string('email');
    t.string('pictureUrl');
    t.boolean('isAdmin');
    t.string('phone');
    t.date('birthDate');
    t.string('address');
    t.string('city');
    t.string('region');
    t.date('startDate');
    t.date('endDate');
    t.date('createdAt');
    t.list.field('appointments', {
      type: 'Appointment',
      resolve(root, _args, ctx: Context) {
        return ctx.prisma.appointment.findMany({ where: { employeeId: root.id } });
      },
    });
  },
});

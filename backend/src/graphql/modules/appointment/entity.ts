import { objectType } from 'nexus';
import { Context } from '../../../context';

export const Appointment = objectType({
  name: 'Appointment',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('title');
    t.string('location');
    t.nonNull.date('date');
    t.string('notes');
    t.nonNull.date('createdAt');
    t.nonNull.int('employeeId');
    t.field('employee', {
      type: 'Employee',
      resolve(root, _args, ctx: Context) {
        //return ctx.db.users.find((u) => u.id === root.userId);
        return ctx.prisma.employee.findUnique({ where: { id: root.employeeId } });
      },
    });
    t.nonNull.int('assuranceId');
    t.field('assurance', {
      type: 'Assurance',
      resolve(root, _args, ctx: Context) {
        return ctx.prisma.assurance.findUnique({ where: { id: root.assuranceId } });
      },
    });
  },
});

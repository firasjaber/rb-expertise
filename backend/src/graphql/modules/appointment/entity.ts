import { objectType } from 'nexus';
import { Context } from '../../../context';

export const Appointment = objectType({
  description: 'Appointment between client ,assurance and SEAT',
  name: 'Appointment',
  definition(t) {
    t.nonNull.int('id', { description: 'Appointment id' });
    t.nonNull.string('title', { description: 'Appointment title' });
    t.string('location', { description: 'Appointment description' });
    t.nonNull.date('date', { description: 'Appointment potential date' });
    t.string('notes', { description: 'Appointment additional notes' });
    t.nonNull.date('createdAt', { description: 'Appointment creation date' });
    t.boolean('resolved', { description: 'Appointment current status' });
    t.date('resolvedAt', { description: 'Appointment resolvation date' });
    t.nonNull.int('employeeId', { description: 'Appointment assigned employee id' });
    t.field('employee', {
      description: 'Appointment assigned employee',
      type: 'Employee',
      resolve(root, _args, ctx: Context) {
        //return ctx.db.users.find((u) => u.id === root.userId);
        return ctx.prisma.employee.findUnique({ where: { id: root.employeeId } });
      },
    });
    t.nonNull.int('assuranceId', { description: 'Appointment assigned assurance id' });
    t.field('assurance', {
      description: 'Appointment assigned assurance',

      type: 'Assurance',
      resolve(root, _args, ctx: Context) {
        return ctx.prisma.assurance.findUnique({ where: { id: root.assuranceId } });
      },
    });
  },
});

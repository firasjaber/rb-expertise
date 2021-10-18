import { objectType } from 'nexus';
import { Context } from '../../../context';

export const Employee = objectType({
  description: 'SEAT Employee ( expert )',
  name: 'Employee',
  definition(t) {
    t.nonNull.int('id', { description: 'Employee id' });
    t.string('firstName', { description: 'Employee first name' });
    t.string('lastName', { description: 'Employee last name' });
    t.string('email', { description: 'Employee email' });
    t.string('pictureUrl', { description: 'Employee picture url' });
    t.boolean('isAdmin', { description: 'Employee role' });
    t.string('phone', { description: 'Employee phone number' });
    t.date('birthDate', { description: 'Employee birth date' });
    t.string('address', { description: 'Employee address' });
    t.string('city', { description: 'Employee city' });
    t.string('region', { description: 'Employee Region' });
    t.date('startDate', { description: 'Employee joining date' });
    t.date('endDate', { description: 'Employee potention resigning date' });
    t.date('createdAt', { description: 'Employee creation date' });
    t.list.field('appointments', {
      description: 'Appointment associeted with this Employee',
      type: 'Appointment',
      resolve(root, _args, ctx: Context) {
        return ctx.prisma.appointment.findMany({ where: { employeeId: root.id } });
      },
    });
  },
});

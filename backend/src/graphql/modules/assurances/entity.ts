import { objectType } from 'nexus';
import { Context } from '../../../context';

export const Assurance = objectType({
  description: 'Assurance company associated with SEAT',
  name: 'Assurance',
  definition(t) {
    t.nonNull.int('id', { description: 'Assurance Company ID' });
    t.string('slug', { description: 'Assurance Company Slug (Short Name)' });
    t.string('name', { description: 'Assurance company full name' });
    t.string('pictureUrl', { description: 'Assurance company picture url' });
    t.list.field('appointments', {
      description: 'appointments associated with correspending assurance company',
      type: 'Appointment',
      resolve(root, _args, ctx: Context) {
        return ctx.prisma.appointment.findMany({ where: { assuranceId: root.id } });
      },
    });
  },
});

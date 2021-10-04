import { objectType } from 'nexus';
import { Context } from '../../../context';

export const Assurance = objectType({
  name: 'Assurance',
  definition(t) {
    t.nonNull.int('id');
    t.string('slug');
    t.string('name');
    t.string('pictureUrl');
    t.list.field('appointments', {
      type: 'Appointment',
      resolve(root, _args, ctx: Context) {
        return ctx.prisma.appointment.findMany({ where: { assuranceId: root.id } });
      },
    });
  },
});

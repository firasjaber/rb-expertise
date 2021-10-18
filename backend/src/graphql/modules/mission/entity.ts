import { objectType } from 'nexus';
import { Context } from '../../../context';

export const Mission = objectType({
  name: 'Mission',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('title');
    t.nonNull.date('starts');
    t.nonNull.date('ends');
    t.nonNull.string('address');
    t.nonNull.boolean('finished');
    t.nonNull.date('createdAt');
    t.nonNull.string('carRegistrationNumber');
    t.nonNull.string('carHolderName');
    t.nonNull.string('carHolderEmail');
    t.nonNull.string('carHolderPhone');
    t.nonNull.string('assuranceContractNumber');
    t.nonNull.string('repairAgencyName');
    t.nonNull.string('repairAgencyResponsible');
    t.nonNull.string('repairAgencyEmail');
    t.nonNull.string('repairAgencyPhone');
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

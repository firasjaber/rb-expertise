import { extendType, nonNull, intArg, nullable, stringArg, booleanArg, inputObjectType, arg } from 'nexus';
import { UserInputError } from 'apollo-server';

export const EmployeeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createOneEmployee', {
      type: 'Employee',
      args: {
        data: arg({ type: nonNull(EmployeeCreateInput) }),
      },
      async resolve(_root, args, ctx) {
        const {
          data: { firstName, lastName, phone, email, birthDate, address, city, region, startDate, endDate },
        } = args;
        const employeeExist = await ctx.prisma.employee.findUnique({ where: { email } });

        if (employeeExist) throw new UserInputError('Email already exists for another employee');
        return ctx.prisma.employee.create({
          data: {
            firstName,
            lastName,
            email,
            phone,
            birthDate,
            address,
            city,
            region,
            startDate,
            endDate: endDate ?? undefined,
            isAdmin: false,
          },
        });
      },
    });
  },
});

const EmployeeCreateInput = inputObjectType({
  name: 'EmployeeCreateInput',
  definition(t) {
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
    t.nonNull.string('email');
    t.nonNull.string('phone');
    t.nonNull.date('birthDate');
    t.nonNull.string('address');
    t.nonNull.string('city');
    t.nonNull.string('region');
    t.nonNull.date('startDate');
    t.date('endDate');
  },
});

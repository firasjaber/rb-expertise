import { extendType, nonNull, inputObjectType, arg, intArg } from 'nexus';
import { UserInputError } from 'apollo-server';

export const EmployeeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createOneEmployee', {
      description: 'Create an Employee',
      type: 'Employee',
      args: {
        data: arg({ type: nonNull(EmployeeCreateInput) }),
      },
      async resolve(_root, { data }, ctx) {
        const { email } = data;
        const employeeExist = await ctx.prisma.employee.findUnique({ where: { email } });

        if (employeeExist) throw new UserInputError('Email already exists for another employee');
        return ctx.prisma.employee.create({
          data: {
            ...data,
            endDate: data.endDate ?? undefined,
            isAdmin: false,
          },
        });
      },
    });
    t.field('updateOneEmployee', {
      description: 'Update an employee by ID',
      type: 'Employee',
      args: {
        data: arg({ type: nonNull(EmployeeUpdateInput) }),
      },
      async resolve(_root, { data }, ctx) {
        const { id, ...dataWithoutId } = data;
        const employeeExist = await ctx.prisma.employee.findUnique({ where: { id } });

        if (!employeeExist) throw new UserInputError('Employee not found to update');
        return ctx.prisma.employee.update({
          where: { id },
          data: {
            ...dataWithoutId,
            endDate: data.endDate ?? undefined,
          },
        });
      },
    });
    t.field('deleteOneEmployee', {
      description: 'Delete an Employee by ID',
      type: 'Boolean',
      args: {
        employeeId: nonNull(intArg()),
      },
      async resolve(_root, args, ctx) {
        const employee = await ctx.prisma.employee.findUnique({ where: { id: args.employeeId } });
        if (!employee) throw new UserInputError('Employee not found to delete');
        await ctx.prisma.employee.delete({ where: { id: args.employeeId } });
        return true;
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
    t.string('pictureUrl');
    t.nonNull.date('birthDate');
    t.nonNull.string('address');
    t.nonNull.string('city');
    t.nonNull.string('region');
    t.nonNull.date('startDate');
    t.date('endDate');
  },
});

const EmployeeUpdateInput = inputObjectType({
  name: 'EmployeeUpdateInput',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
    t.nonNull.string('email');
    t.string('pictureUrl');
    t.nonNull.string('phone');
    t.nonNull.date('birthDate');
    t.nonNull.string('address');
    t.nonNull.string('city');
    t.nonNull.string('region');
    t.nonNull.date('startDate');
    t.date('endDate');
  },
});

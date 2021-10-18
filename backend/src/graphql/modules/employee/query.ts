import { extendType, nonNull, intArg, nullable, stringArg } from 'nexus';
import { UserInputError } from 'apollo-server';

export const EmployeeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('employees', {
      description: 'Get all Employees',
      type: 'Employee',
      args: {
        searchQuery: nullable(stringArg()),
      },
      resolve(_root, args, ctx) {
        const searchQ = args.searchQuery ?? undefined;
        return ctx.prisma.employee.findMany({ where: { firstName: { contains: searchQ } } });
      },
    });
    t.field('employee', {
      description: 'Get an Employee by ID',
      type: 'Employee',
      args: {
        employeeId: nonNull(intArg()),
      },
      async resolve(_root, args, ctx) {
        const employee = await ctx.prisma.employee.findUnique({ where: { id: args.employeeId } });
        if (!employee) throw new UserInputError('Employe not found');
        return employee;
      },
    });
  },
});

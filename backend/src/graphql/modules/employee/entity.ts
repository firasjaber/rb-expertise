import { objectType } from 'nexus';

export const Employee = objectType({
  name: 'Employee',
  definition(t) {
    t.nonNull.int('id');
    t.string('firstName');
    t.string('lastName');
    t.string('email');
    t.boolean('isAdmin');
    t.string('phone');
    t.date('birthDate');
    t.string('address');
    t.string('city');
    t.string('region');
    t.date('startDate');
    t.date('endDate');
    t.date('createdAt');
  },
});

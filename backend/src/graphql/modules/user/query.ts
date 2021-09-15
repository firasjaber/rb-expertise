import { extendType } from 'nexus';

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('me', {
      type: 'String',
      resolve() {
        return 'hello world';
      },
    });
  },
});

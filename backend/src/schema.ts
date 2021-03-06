import { makeSchema } from 'nexus';
//import { nexusPrisma } from 'nexus-plugin-prisma';
import { join } from 'path';
import * as types from './graphql';

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, '..', 'generated', 'nexus-typegen.ts'),
    schema: join(__dirname, '..', 'generated', 'schema.graphql'),
  },
  contextType: {
    module: join(__dirname, './context.ts'),
    export: 'Context',
  },
  //plugins: [nexusPrisma()],
});

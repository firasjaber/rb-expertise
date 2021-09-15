import { prisma } from './db';

import { PrismaClient } from '@prisma/client';

export interface Context {
  prisma: PrismaClient;
}
export const context = {
  prisma,
};

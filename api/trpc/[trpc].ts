import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
// @ts-expect-error -- Vercel deploy uses Node bundler that resolves extensions automatically
import { appRouter } from '../../../src/server/trpc/router';
// @ts-expect-error -- Vercel deploy uses Node bundler that resolves extensions automatically
import { createContext } from '../../../src/server/trpc/context';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  });

export const config = {
  runtime: 'nodejs',
};

export default handler;

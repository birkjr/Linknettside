import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { procedure, router } from './trpc';

const BUCKET = 'bilder';
const SUBGROUP_FOLDER = 'subGroups';

const extensionFromMime = (mimeType: string) => {
  if (mimeType === 'image/png') return 'png';
  if (mimeType === 'image/webp') return 'webp';
  return 'jpg';
};

export const appRouter = router({
  createSubgroupUploadUrl: procedure
    .input(
      z.object({
        key: z.string().min(1, 'key is required'),
        mimeType: z.string().min(1, 'mimeType is required'),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const extension = extensionFromMime(input.mimeType);
      const normalizedKey = input.key.toLowerCase();
      const remoteFileName = `${normalizedKey}.${extension}`;
      const path = `${SUBGROUP_FOLDER}/${remoteFileName}`;

      const { data, error } = await ctx.supabase.storage
        .from(BUCKET)
        .createSignedUploadUrl(path, { upsert: true });

      if (error || !data) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error?.message ?? 'Kunne ikke opprette opplastings-url',
        });
      }

      return {
        path,
        fileName: remoteFileName,
        token: data.token,
        url: data.signedUrl,
      };
    }),
});

export type AppRouter = typeof appRouter;

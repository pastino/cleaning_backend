import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../generated/prisma-client";

interface CreateBannerMutationArgs {
  imageUrl: string;
}

interface CreateBannerResponse {
  ok: boolean;
  error: string | null;
}

const resolvers: Resolvers = {
  Mutation: {
    CreateBanner: async (
      _,
      args: CreateBannerMutationArgs
    ): Promise<CreateBannerResponse> => {
      const { imageUrl } = args;
      try {
        const banner = await prisma.createBanner({
          imageUrl,
        });
        if (!banner) {
          return {
            ok: false,
            error: "게시물 생성이 실패하였습니다.",
          };
        } else {
          return {
            ok: true,
            error: null,
          };
        }
      } catch (e) {
        return {
          ok: false,
          error: e,
        };
      }
    },
  },
};

export default resolvers;

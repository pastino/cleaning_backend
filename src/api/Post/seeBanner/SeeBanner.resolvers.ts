import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../generated/prisma-client";

export interface SeeBannerResponse {
  ok: boolean;
  error: string | null;
  result: Array<Banner> | null;
}

export interface Banner {
  id: string;
  imageUrl: string;
  createdAt: string | null;
  updatedAt: string | null;
}

const resolvers: Resolvers = {
  Query: {
    SeeBanner: async (_, __, ___): Promise<SeeBannerResponse> => {
      try {
        const banners: any = await prisma.banners();
        // 수정필요 - any 삭제
        if (!banners) {
          return {
            ok: true,
            error: null,
            result: [],
          };
        } else {
          return {
            ok: true,
            error: null,
            result: banners,
          };
        }
      } catch (e) {
        return {
          ok: false,
          error: e,
          result: [],
        };
      }
    },
  },
};

export default resolvers;

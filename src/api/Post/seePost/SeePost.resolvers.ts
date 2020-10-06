import { SeePostResponse } from "src/types/graph";
import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../generated/prisma-client";

const resolvers: Resolvers = {
  Query: {
    SeePost: async (_, args, ___): Promise<SeePostResponse> => {
      const { petType, pageNumber, items } = args;

      try {
        const posts: any = await prisma.posts({
          where: { petType },
          first: items,
          skip: pageNumber,
        });
        // 수정필요 - any 삭제
        if (!posts) {
          return {
            ok: true,
            error: null,
            result: [],
          };
        } else {
          return {
            ok: true,
            error: null,
            result: posts,
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

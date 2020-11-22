import { prisma } from "../../../../generated/prisma-client";
import { Resolvers } from "src/types/resolvers";

interface CreateCleaningMutationArgs {
  title: string;
  imageUrl: string;
}

interface CreateCleaingResponse {
  ok: boolean;
  error: string | null;
}

const resolvers: Resolvers = {
  Mutation: {
    CreateCleaning: async (
      _,
      args: CreateCleaningMutationArgs,
      ___
    ): Promise<CreateCleaingResponse> => {
      const { title, imageUrl } = args;
      try {
        const cleaning = await prisma.createCleaning({
          title,
          imageUrl,
        });
        if (!cleaning) {
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

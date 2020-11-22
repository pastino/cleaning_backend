import { prisma } from "../../../../generated/prisma-client";
import { Resolvers } from "src/types/resolvers";

interface DeleteCleaningMutationArgs {
  id: string;
}

interface DeleteCleaningResponse {
  ok: boolean;
  error: string | null;
}

const resolvers: Resolvers = {
  Mutation: {
    DeleteCleaning: async (
      _,
      args: DeleteCleaningMutationArgs,
      ___
    ): Promise<DeleteCleaningResponse> => {
      const { id } = args;
      try {
        await prisma.deleteCleaning({
          id,
        });
        return {
          ok: true,
          error: null,
        };
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

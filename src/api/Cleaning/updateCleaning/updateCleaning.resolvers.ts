import { prisma } from "../../../../generated/prisma-client";
import { Resolvers } from "src/types/resolvers";

interface UpdateCleaningMutationArgs {
  id: string;
  title?: string;
  imageUrl?: string;
}

interface UpdateCleaningResponse {
  ok: boolean;
  error: string | null;
}

const resolvers: Resolvers = {
  Mutation: {
    UpdateCleaning: async (
      _,
      args: UpdateCleaningMutationArgs,
      ___
    ): Promise<UpdateCleaningResponse> => {
      const { id, title, imageUrl } = args;
      console.log(id, title, imageUrl);
      try {
        await prisma.updateCleaning({
          where: { id },
          data: { title, imageUrl },
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

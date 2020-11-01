import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../../generated/prisma-client";

export interface LoginUserResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

const resolvers: Resolvers = {
  Mutation: {
    JoinUser: async (
      _,
      args: JoinUserMutationArgs
    ): Promise<JoinUserResponse> => {
      const { id } = args;
      try {
        const user = await prisma.user({
          userId: id,
        });
        if (!user) {
          return {
            ok: false,
            error: "Failed to Login",
            token: null,
          };
        } else {
          return {
            ok: true,
            error: null,
            token: "Comming Soon",
          };
        }
      } catch (e) {
        return {
          ok: false,
          error: e,
          token: null,
        };
      }
    },
  },
};

export default resolvers;

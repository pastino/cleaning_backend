import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../../generated/prisma-client";

export interface CheckWhetherToJoinResponse {
  ok: boolean;
  error: string | null;
  result: string;
}
export interface CheckWhetherToJoinQueryArgs {
  id: string;
  email: string;
}

const resolvers: Resolvers = {
  Query: {
    CheckWhetherToJoin: async (
      _,
      args: CheckWhetherToJoinQueryArgs
    ): Promise<CheckWhetherToJoinResponse> => {
      const { email } = args;
      try {
        const existingUser = await prisma.user({ email });
        if (!existingUser) {
          return {
            ok: true,
            error: null,
            result: "No User, Need to join",
          };
        } else {
          return {
            ok: true,
            error: null,
            result: "Find a user, log in",
          };
        }
      } catch (e) {
        return {
          ok: false,
          error: e,
          result: "Error",
        };
      }
    },
  },
};

export default resolvers;

import { JoinUserMutationArgs, JoinUserResponse } from "src/types/graph";
import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../../generated/prisma-client";

const resolvers: Resolvers = {
  Mutation: {
    JoinUser: async (
      _,
      args: JoinUserMutationArgs
    ): Promise<JoinUserResponse> => {
      const { id, avatar, email } = args;
      try {
        const user = await prisma.createUser({
          userId: id,
          avatar: avatar === "None" ? null : avatar,
          email: email === "None" ? null : email,
        });
        if (!user) {
          return {
            ok: false,
            error: "Failed to join",
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

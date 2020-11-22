import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../../generated/prisma-client";
import bcrypt from "bcryptjs";

export interface JoinUserMutationArgs {
  email: string | null;
  id: string;
  password: string | null;
  avatar: string | null;
  nickname: string | null;
}

export interface JoinUserResponse {
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
      const { id, avatar, email, password, nickname } = args;
      const existingUser = await prisma.$exists.user({ email });

      try {
        if (existingUser) {
          return {
            ok: false,
            error: "user information already exists",
            token: null,
          };
        } else {
          bcrypt.genSalt(10, async (err, salt) => {
            bcrypt.hash(password, salt, async function(err, hash) {
              await prisma.createUser({
                userId: id,
                avatar: avatar === "None" ? null : avatar,
                email: email === "None" ? null : email,
                nickname,
                password: hash,
              });
            });
          });
          return {
            ok: true,
            error: null,
            token: null,
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

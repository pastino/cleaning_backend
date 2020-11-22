import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../../generated/prisma-client";
import bcrypt from "bcryptjs";
import { generateToken } from "../../../../utils";
export interface LoginUserMutationArgs {
  email: string;
  id: string | null;
  password: string | null;
}

export interface LoginUserResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

const resolvers: Resolvers = {
  Mutation: {
    LoginUser: async (
      _,
      args: LoginUserMutationArgs
    ): Promise<LoginUserResponse> => {
      const { email, password } = args;
      const existingUser = await prisma.$exists.user({ email });
      try {
        if (!existingUser) {
          return {
            ok: false,
            error: "ot a registered email",
            token: null,
          };
        } else {
          const user = await prisma.user({ email });
          if (user) {
            const valid = await bcrypt.compare(password, user.password);
            if (valid) {
              return {
                ok: true,
                error: null,
                token: generateToken(user.id),
              };
            } else {
              return {
                ok: true,
                error: "password Inconsistency",
                token: null,
              };
            }
          } else {
            return {
              ok: true,
              error: "can not find user",
              token: null,
            };
          }
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

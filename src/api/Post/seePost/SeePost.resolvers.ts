import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../generated/prisma-client";

export interface SeePostResponse {
  ok: boolean;
  error: string | null;
  result: Array<Post> | null;
}

export interface Post {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: string | null;
  updatedAt: string | null;
}

const resolvers: Resolvers = {
  Query: {
    SeePost: async (_, __, ___): Promise<SeePostResponse> => {
      try {
        const posts: any = await prisma.posts();
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

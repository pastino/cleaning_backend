import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../generated/prisma-client";

export interface CreatePostMutationArgs {
  title: string;
  imageUrl: string;
}

export interface CreatePostResponse {
  ok: boolean;
  error: string | null;
}

const resolvers: Resolvers = {
  Mutation: {
    CreatePost: async (
      _,
      args: CreatePostMutationArgs
    ): Promise<CreatePostResponse> => {
      const { imageUrl, title } = args;
      try {
        const post = await prisma.createPost({
          imageUrl,
          title,
        });
        if (!post) {
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

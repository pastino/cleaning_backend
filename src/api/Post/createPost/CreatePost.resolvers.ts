import { CreatePostMutationArgs, CreatePostResponse } from "src/types/graph";
import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../generated/prisma-client";

const resolvers: Resolvers = {
  Mutation: {
    CreatePost: async (
      _,
      args: CreatePostMutationArgs
    ): Promise<CreatePostResponse> => {
      const { petType, title, text } = args;
      try {
        let post;
        if (petType === undefined) {
          post = await prisma.createPost({
            petType: null,
            title,
            text,
          });
        } else {
          post = await prisma.createPost({
            petType,
            title,
            text,
          });
        }
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

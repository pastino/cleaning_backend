import { CLEANING_FRAGMENT } from "../../../fragments";
import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../generated/prisma-client";

export interface SeeCleaningResponse {
  ok: boolean;
  error: string | null;
  result: Array<Cleaning> | null;
}

export interface Cleaning {
  id: string;
  title: string;
  imageUrl: string;
  companies: {
    id: string;
    name: string;
    imageUrl: string;
    latitude: number;
    longitude: number;
    phoneNumber: string;
    createdAt: string | null;
    updatedAt: string | null;
  };
  createdAt: string | null;
  updatedAt: string | null;
}

const resolvers: Resolvers = {
  Query: {
    SeeCleaning: async (_, __, ___): Promise<SeeCleaningResponse> => {
      try {
        const cleanings: any = await prisma
          .cleanings()
          .$fragment(CLEANING_FRAGMENT);

        // 수정필요 - any 삭제
        if (!cleanings) {
          return {
            ok: true,
            error: null,
            result: [],
          };
        } else {
          return {
            ok: true,
            error: null,
            result: cleanings,
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

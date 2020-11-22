import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../generated/prisma-client";

export interface SeeCompanyResponse {
  ok: boolean;
  error: string | null;
  result: Array<Company> | null;
}

export interface Company {
  id: string;
  name: string;
  subTitle: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  phoneNumber: string;
  cleaning: {
    id: string;
  };
  createdAt: string | null;
  updatedAt: string | null;
}

const resolvers: Resolvers = {
  Query: {
    SeeCompany: async (_, args, ___): Promise<SeeCompanyResponse> => {
      try {
        const { id } = args;
        const companies: any = await prisma.companies({ where: id });

        if (!companies) {
          return {
            ok: true,
            error: null,
            result: [],
          };
        } else {
          return {
            ok: true,
            error: null,
            result: companies,
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

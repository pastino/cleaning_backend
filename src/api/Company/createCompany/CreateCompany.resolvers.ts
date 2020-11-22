import { Resolvers } from "src/types/resolvers";
import { prisma } from "../../../../generated/prisma-client";

interface CreateCompanyMutationArgs {
  kindOfId: string;
  name: string;
  subTitle: string;
  latitude: number;
  longitude: number;
  phoneNumber: string;
  imageUrl: string;
}

interface CreateCompanyResponse {
  ok: boolean;
  error: string | null;
}

const resolvers: Resolvers = {
  Mutation: {
    CreateCompany: async (
      _,
      args: CreateCompanyMutationArgs
    ): Promise<CreateCompanyResponse> => {
      const {
        kindOfId,
        name,
        subTitle,
        latitude,
        longitude,
        phoneNumber,
        imageUrl,
      } = args;
      try {
        const company = await prisma.createCompany({
          name,
          latitude,
          longitude,
          subTitle,
          phoneNumber,
          imageUrl,
        });
        await prisma.updateCompany({
          where: { id: company.id },
          data: { cleaning: { connect: { id: kindOfId } } },
        });
        if (!company) {
          return {
            ok: false,
            error: "업체 등록에 실패하였습니다.",
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

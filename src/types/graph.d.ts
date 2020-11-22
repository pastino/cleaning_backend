export const typeDefs = ["type CreateCleaningResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CreateCleaning(title: String!, imageUrl: String!): CreateCleaningResponse!\n  CreateBanner(imageUrl: String!): CreateBannerResponse!\n  JoinUser(email: String!, password: String!, id: String, avatar: String, nickname: String): JoinUserResponse!\n  LoginUser(email: String!, id: String, password: String): LoginUserResponse!\n}\n\ntype Cleaning {\n  id: ID!\n  title: String!\n  imageUrl: String!\n  createdAt: String\n  updatedAt: String\n}\n\ntype CreateBannerResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype SeeBannerResponse {\n  ok: Boolean!\n  error: String\n  result: [Banner]\n}\n\ntype Query {\n  SeeBanner: SeeBannerResponse!\n  CheckWhetherToJoin(id: String, email: String): CheckWhetherToJoinResponse!\n}\n\ntype Banner {\n  id: ID!\n  imageUrl: String!\n  createdAt: String\n  updatedAt: String\n}\n\ntype CheckWhetherToJoinResponse {\n  ok: Boolean!\n  error: String\n  result: String!\n}\n\ntype JoinUserResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype LoginUserResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype User {\n  id: ID!\n  userId: String!\n  password: String\n  email: String\n  avatar: String\n  createdAt: String\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  SeeBanner: SeeBannerResponse;
  CheckWhetherToJoin: CheckWhetherToJoinResponse;
}

export interface CheckWhetherToJoinQueryArgs {
  id: string | null;
  email: string | null;
}

export interface SeeBannerResponse {
  ok: boolean;
  error: string | null;
  result: Array<Banner> | null;
}

export interface Banner {
  id: string;
  imageUrl: string;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface CheckWhetherToJoinResponse {
  ok: boolean;
  error: string | null;
  result: string;
}

export interface Mutation {
  CreateCleaning: CreateCleaningResponse;
  CreateBanner: CreateBannerResponse;
  JoinUser: JoinUserResponse;
  LoginUser: LoginUserResponse;
}

export interface CreateCleaningMutationArgs {
  title: string;
  imageUrl: string;
}

export interface CreateBannerMutationArgs {
  imageUrl: string;
}

export interface JoinUserMutationArgs {
  email: string;
  password: string;
  id: string | null;
  avatar: string | null;
  nickname: string | null;
}

export interface LoginUserMutationArgs {
  email: string;
  id: string | null;
  password: string | null;
}

export interface CreateCleaningResponse {
  ok: boolean;
  error: string | null;
}

export interface CreateBannerResponse {
  ok: boolean;
  error: string | null;
}

export interface JoinUserResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface LoginUserResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface Cleaning {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface User {
  id: string;
  userId: string;
  password: string | null;
  email: string | null;
  avatar: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

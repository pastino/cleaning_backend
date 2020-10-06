export const typeDefs = ["type CreatePostResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CreatePost(petType: String, title: String!, text: String!): CreatePostResponse!\n  JoinUser(id: String!, avatar: String, email: String): JoinUserResponse!\n}\n\ntype SeePostResponse {\n  ok: Boolean!\n  error: String\n  result: [Post]\n}\n\ntype Query {\n  SeePost(petType: String!, pageNumber: Int!, items: Int!): SeePostResponse!\n  CheckWhetherToJoin(id: String!): CheckWhetherToJoinResponse!\n}\n\ntype Post {\n  id: ID!\n  petType: String\n  title: String!\n  text: String!\n  createdAt: String\n  updatedAt: String\n}\n\ntype CheckWhetherToJoinResponse {\n  ok: Boolean!\n  error: String\n  result: String!\n}\n\ntype JoinUserResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype User {\n  id: ID!\n  userId: String!\n  email: String\n  avatar: String\n  createdAt: String\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  SeePost: SeePostResponse;
  CheckWhetherToJoin: CheckWhetherToJoinResponse;
}

export interface SeePostQueryArgs {
  petType: string;
  pageNumber: number;
  items: number;
}

export interface CheckWhetherToJoinQueryArgs {
  id: string;
}

export interface SeePostResponse {
  ok: boolean;
  error: string | null;
  result: Array<Post> | null;
}

export interface Post {
  id: string;
  petType: string | null;
  title: string;
  text: string;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface CheckWhetherToJoinResponse {
  ok: boolean;
  error: string | null;
  result: string;
}

export interface Mutation {
  CreatePost: CreatePostResponse;
  JoinUser: JoinUserResponse;
}

export interface CreatePostMutationArgs {
  petType: string | null;
  title: string;
  text: string;
}

export interface JoinUserMutationArgs {
  id: string;
  avatar: string | null;
  email: string | null;
}

export interface CreatePostResponse {
  ok: boolean;
  error: string | null;
}

export interface JoinUserResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface User {
  id: string;
  userId: string;
  email: string | null;
  avatar: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

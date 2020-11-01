export const typeDefs = [
  "type CreatePostResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CreatePost(title: String!, imageUrl: String!): CreatePostResponse!\n  JoinUser(id: String!, email: String, avatar: String, password: String): JoinUserResponse!\n  JoinUser(email: String!, id: String, password: String): LoginUserResponse!\n}\n\ntype SeePostResponse {\n  ok: Boolean!\n  error: String\n  result: [Post]\n}\n\ntype Query {\n  SeePost: SeePostResponse!\n  CheckWhetherToJoin(id: String!): CheckWhetherToJoinResponse!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  imageUrl: String!\n  createdAt: String\n  updatedAt: String\n}\n\ntype CheckWhetherToJoinResponse {\n  ok: Boolean!\n  error: String\n  result: String!\n}\n\ntype JoinUserResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype LoginUserResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype User {\n  id: ID!\n  userId: String!\n  password: String\n  email: String\n  avatar: String\n  createdAt: String\n  updatedAt: String\n}\n",
];
/* tslint:disable */

export interface Query {
  SeePost: SeePostResponse;
  CheckWhetherToJoin: CheckWhetherToJoinResponse;
}

export interface Mutation {
  CreatePost: CreatePostResponse;
  JoinUser: LoginUserResponse;
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

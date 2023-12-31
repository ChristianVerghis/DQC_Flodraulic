import { DefaultSession, DefaultUser } from "next-auth";
// Define a role enum
export enum Role {
  admin = "admin",
  design = "design",
  production = "production",
  qc = "qc",
  shipping = "shipping"
}

//common interface for JWT and Session
interface IUser extends DefaultUser {
  role?: Role;
}
declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}

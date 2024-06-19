import { UserRole } from "@prisma/client";

export type loginProps = {
  email: string;
  password: string;
};

export type signupProps = {
  name: string;
  email: string;
  password: string;
  role: UserRole;
};

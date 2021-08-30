import { TypeEducationEnum } from "../entities/Users";

export interface IUsersData {
  full_name: string;
  email: string;
  password: string;
  birth_date: string;
  state: string;
  city: string;
  education: TypeEducationEnum;
}

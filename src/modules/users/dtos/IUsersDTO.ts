import { UserEducation } from "../entities/User";

export interface IUsersDTO {
  full_name: string;
  email: string;
  password: string;
  birth_date: string;
  state: string;
  city: string;
  education: UserEducation;
}

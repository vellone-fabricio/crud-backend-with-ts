import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export type TypeEducationEnum =
  | "infantil"
  | "fundamental"
  | "medio"
  | "superior"
  | "pos_graducao"
  | "mestrado"
  | "doutorado";

@Entity("users")
class Users {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  birth_date: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  education: TypeEducationEnum;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;
}

export { Users };

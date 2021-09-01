import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Companies } from "../../companies/entities/Companies";
import { Users } from "../../users/entities/Users";

@Entity("collaborator")
class Collaborator {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => Users)
  @JoinColumn({ name: "user_id" })
  user: Users;

  @ManyToOne(() => Companies)
  @JoinColumn({ name: "company_id" })
  company: Companies;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Collaborator };

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
import { JobPositions } from "./JobPositions";

@Entity("collaborator")
class Collaborator {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => Users)
  @JoinColumn({ name: "user_id" })
  user_id: number;

  @ManyToOne(() => Companies)
  @JoinColumn({ name: "company_id" })
  company_id: number;

  @OneToOne(() => JobPositions)
  @JoinColumn({ name: "job_position_id" })
  job_position_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Collaborator };

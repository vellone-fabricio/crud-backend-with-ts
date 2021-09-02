import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Company } from "../../companies/entities/Company";
import { User } from "../../users/entities/User";

export type JobPosition = "Diretor" | "Gestor" | "Empregado";
@Entity("collaborator")
class Collaborator {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToOne(type => User, collaborator => Collaborator)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(type => Company, collaborators => Collaborator)
  @JoinColumn({ name: "company_id " })
  company: Company;

  @Column({
    type: "enum",
    enum: ["Diretor", "Gestor", "Empregado"],
  })
  job_position: JobPosition;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Collaborator };

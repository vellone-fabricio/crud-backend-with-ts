import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Collaborator } from "../../collaborators/entities/Collaborator";

export type UserEducation = "infantil" | "fundamental" | "medio" | "superior" | "pos-grad" | "mestrado" | "doutorado";

@Entity("user")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: "date" })
  birth_date: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column({
    type: "enum",
    enum: ["infantil", "fundamental", "medio", "superior", "pos-grad", "mestrado", "doutorado"],
  })
  education: UserEducation;

  @Column({ default: false })
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(type => Collaborator, user => User)
  collaborator: Collaborator;
}

export { User };

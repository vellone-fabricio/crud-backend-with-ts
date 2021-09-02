import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Collaborator } from "../../collaborators/entities/Collaborator";

@Entity("company")
class Company {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  area: string;

  @Column()
  creation_date: Date;

  @Column()
  description: string;

  @Column()
  director: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(type => Collaborator, company => Company)
  collaborators: Collaborator[];
}

export { Company };

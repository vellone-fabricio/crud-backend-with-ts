import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("companies")
class Companies {
  @PrimaryGeneratedColumn()
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
}

export { Companies };

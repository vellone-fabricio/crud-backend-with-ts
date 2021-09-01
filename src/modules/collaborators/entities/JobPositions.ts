import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("job_positions")
class JobPositions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
export { JobPositions };

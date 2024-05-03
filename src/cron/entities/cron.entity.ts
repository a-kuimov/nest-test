import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Cron {
  @PrimaryColumn()
  id: number;

  @Column()
  shedule: string;
}

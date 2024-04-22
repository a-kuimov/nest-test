import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Group {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}

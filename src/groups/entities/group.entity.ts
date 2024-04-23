import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Task } from '../../tasks/entities/task.entity';

@Entity()
export class Group {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Task, (task) => task.group)
  tasks: Task[];
}

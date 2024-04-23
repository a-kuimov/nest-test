import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Group } from '../../groups/entities/group.entity';

@Entity()
export class Task {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  groupId: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  deadline: Date;

  @Column({ nullable: true })
  responsible: string;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  createdDate: Date;

  @Column('simple-array')
  tags: string[];

  @Column({ nullable: true })
  dataNachalaProizvodstva: Date;

  @Column({ nullable: true })
  napravlenieDeyatelnostiUTS: string;

  @Column({ nullable: true })
  manager: string;

  @Column({ nullable: true })
  stadiya: string;

  @Column({ nullable: true })
  naimenovanieProdukcii: string;

  @Column({ nullable: true })
  FISborshika: string;

  @Column({ nullable: true })
  proizvodstvenniUchastor: string;

  @ManyToOne(() => Group, (group) => group.tasks)
  group: Group;
}

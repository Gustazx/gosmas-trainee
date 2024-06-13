import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToMany(() => User, (user) => user.teams)
  @JoinColumn()
  users: User[];
}

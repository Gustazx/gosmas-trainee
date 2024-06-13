import { Team } from 'src/team/team.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToMany(() => Team, (team) => team.users)
  @JoinTable()
  teams: Team[];
}

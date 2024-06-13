import { Team } from 'src/team/team.entity';

export class CreateUserDto {
  username: string;
  email: string;
  createdAt: Date;
  teams: Team[];
}

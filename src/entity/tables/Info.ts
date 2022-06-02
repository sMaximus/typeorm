import { User } from './User';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Info {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: number;

  @Column()
  address: string;

  @OneToOne((type) => User, (user) => user.info)
  @JoinColumn()
  user: User;
}

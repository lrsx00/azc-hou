import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum StaffRole {
  RECORDER = 'RECORDER',
  HARVEST_LEAD = 'HARVEST_LEAD',
  TEA_MASTER = 'TEA_MASTER',
}

@Entity('staff_templates')
export class StaffTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: StaffRole,
  })
  role: StaffRole;

  @Column({ nullable: true })
  avatarUrl: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}


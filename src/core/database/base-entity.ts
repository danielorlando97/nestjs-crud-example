import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Exclude } from 'class-transformer';

const { CREATE, UPDATE } = CrudValidationGroups;
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @DeleteDateColumn({ type: 'timestamp', default: null })
  deletedAt: Date;
}

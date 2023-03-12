import { Column, Entity, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from 'src/core/database/base-entity';
import { DEntity } from 'src/modules/d-entity/d-entity.entity';

@Entity()
export class CEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToMany(() => DEntity, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinTable({ name: 'cd-relation' })
  DEntities: DEntity[];
}

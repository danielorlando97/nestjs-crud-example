import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from 'src/core/database/base-entity';
import { CEntity } from 'src/modules/c-entity/c-entity.entity';

@Entity()
export class DEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToMany(() => CEntity, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  CEntities: CEntity[];
}

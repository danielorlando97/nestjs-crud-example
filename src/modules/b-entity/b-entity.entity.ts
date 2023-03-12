import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/core/database/base-entity';
import { AEntity } from 'src/modules/a-entity/a-entity.entity';

@Entity()
export class BEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToOne(() => BEntity, { onUpdate: 'RESTRICT' })
  AEntity: BEntity;
}

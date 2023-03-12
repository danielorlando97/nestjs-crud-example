import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/core/database/base-entity';
import { BEntity } from 'src/modules/b-entity/b-entity.entity';

@Entity()
export class AEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @OneToMany(() => BEntity, (b) => b.AEntity, { onDelete: 'CASCADE' })
  BEntities: BEntity[];
}

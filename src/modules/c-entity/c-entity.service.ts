import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { CEntity } from './c-entity.entity';

@Injectable()
export class CEntitiesService extends TypeOrmCrudService<CEntity> {
  constructor(@InjectRepository(CEntity) repo) {
    super(repo);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { DEntity } from './d-entity.entity';

@Injectable()
export class DEntitiesService extends TypeOrmCrudService<DEntity> {
  constructor(@InjectRepository(DEntity) repo) {
    super(repo);
  }
}

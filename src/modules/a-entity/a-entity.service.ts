import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { AEntity } from './a-entity.entity';

@Injectable()
export class AEntitiesService extends TypeOrmCrudService<AEntity> {
  constructor(@InjectRepository(AEntity) repo) {
    super(repo);
  }
}

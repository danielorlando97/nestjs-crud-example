import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { BEntity } from './b-entity.entity';

@Injectable()
export class BEntitiesService extends TypeOrmCrudService<BEntity> {
  constructor(@InjectRepository(BEntity) repo) {
    super(repo);
  }
}

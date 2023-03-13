import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { AEntity } from './a-entity.entity';
import { AEntitiesService } from './a-entity.service';
import { AEntityCreateDto, AEntityCreateSerializer } from './dtos/create.dto';
import { AEntityUpdateDto, AEntityUpdateSerializer } from './dtos/update.dto';
@Crud({
  model: {
    type: AEntity,
  },
  dto: {
    create: AEntityCreateDto,
    update: AEntityUpdateDto,
  },
  serialize: {
    create: AEntityCreateSerializer,
    createMany: AEntityCreateSerializer,
    update: AEntityUpdateSerializer,
  },
  query: {
    join: {
      BEntities: {
        eager: true,
      },
    },
  },
})
@Controller('a-entity')
export class AEntitiesController implements CrudController<AEntity> {
  constructor(public service: AEntitiesService) {}
}

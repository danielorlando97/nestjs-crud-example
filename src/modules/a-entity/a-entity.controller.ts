import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { AEntity } from './a-entity.entity';
import { AEntitiesService } from './a-entity.service';
import { AEntityCreateDto } from './dtos/create.dto';
import { AEntityUpdateDto } from './dtos/update.dto';
@Crud({
  model: {
    type: AEntity,
  },
  dto: {
    create: AEntityCreateDto,
    update: AEntityUpdateDto,
  },
  query: {
    join: {
      BEntities: {
        allow: ['id', 'name'],
        eager: true,
      },
    },
  },
})
@Controller('a-entity')
export class AEntitiesController implements CrudController<AEntity> {
  constructor(public service: AEntitiesService) {}
}

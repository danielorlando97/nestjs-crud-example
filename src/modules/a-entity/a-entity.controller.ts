import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { AEntity } from './a-entity.entity';
import { AEntitiesService } from './a-entity.service';

@Crud({
  model: {
    type: AEntity,
  },
})
@Controller('a-entity')
export class AEntitiesController implements CrudController<AEntity> {
  constructor(public service: AEntitiesService) {}
}

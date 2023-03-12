import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { BEntity } from './b-entity.entity';
import { BEntitiesService } from './b-entity.service';

@Crud({
  model: {
    type: BEntity,
  },
})
@Controller('b-entity')
export class BEntitiesController implements CrudController<BEntity> {
  constructor(public service: BEntitiesService) {}
}

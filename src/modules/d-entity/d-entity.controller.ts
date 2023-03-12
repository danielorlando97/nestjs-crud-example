import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { DEntity } from './d-entity.entity';
import { DEntitiesService } from './d-entity.service';

@Crud({
  model: {
    type: DEntity,
  },
})
@Controller('d-entity')
export class DEntitiesController implements CrudController<DEntity> {
  constructor(public service: DEntitiesService) {}
}

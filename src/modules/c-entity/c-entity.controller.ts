import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { CEntity } from './c-entity.entity';
import { CEntitiesService } from './c-entity.service';

@Crud({
  model: {
    type: CEntity,
  },
})
@Controller('c-entity')
export class CEntitiesController implements CrudController<CEntity> {
  constructor(public service: CEntitiesService) {}
}

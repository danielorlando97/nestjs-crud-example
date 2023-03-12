import { Module } from '@nestjs/common';

import { AEntitiesModule } from './a-entity/a-entity.module';
import { BEntitiesModule } from './b-entity/b-entity.module';
import { CEntitiesModule } from './c-entity/c-entity.module';
import { DEntitiesModule } from './d-entity/d-entity.module';

@Module({
  imports: [AEntitiesModule, BEntitiesModule, CEntitiesModule, DEntitiesModule],
})
export class ModulesModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CEntity } from './c-entity.entity';
import { CEntitiesService } from './c-entity.service';
import { CEntitiesController } from './c-entity.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CEntity])],
  providers: [CEntitiesService],
  exports: [CEntitiesService],
  controllers: [CEntitiesController],
})
export class CEntitiesModule {}

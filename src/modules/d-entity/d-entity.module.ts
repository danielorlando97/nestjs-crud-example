import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DEntity } from './d-entity.entity';
import { DEntitiesService } from './d-entity.service';
import { DEntitiesController } from './d-entity.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DEntity])],
  providers: [DEntitiesService],
  exports: [DEntitiesService],
  controllers: [DEntitiesController],
})
export class DEntitiesModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BEntity } from './b-entity.entity';
import { BEntitiesService } from './b-entity.service';
import { BEntitiesController } from './b-entity.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BEntity])],
  providers: [BEntitiesService],
  exports: [BEntitiesService],
  controllers: [BEntitiesController],
})
export class BEntitiesModule {}

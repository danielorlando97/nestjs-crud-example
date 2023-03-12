import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AEntity } from './a-entity.entity';
import { AEntitiesService } from './a-entity.service';
import { AEntitiesController } from './a-entity.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AEntity])],
  providers: [AEntitiesService],
  exports: [AEntitiesService],
  controllers: [AEntitiesController],
})
export class AEntitiesModule {}

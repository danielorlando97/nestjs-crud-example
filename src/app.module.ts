import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { configService } from './postgresql.config';

@Module({
  imports: [
    ModulesModule,
    CoreModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
})
export class AppModule {}

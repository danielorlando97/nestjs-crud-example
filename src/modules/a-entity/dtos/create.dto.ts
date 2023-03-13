import { Exclude, Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import {
  BaseSerializer,
  HiddenMetaDataSerializer,
} from 'src/core/database/base-serializer';

export class AEntityCreateDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
  //   BEntities: BEntity[];
}

export class AEntityCreateSerializer extends BaseSerializer {
  name: string;
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BEntityAEntityCreateSerializer)
  BEntities: BEntityAEntityCreateSerializer[];
}

export class BEntityAEntityCreateSerializer extends HiddenMetaDataSerializer {
  name: string;
  @Exclude()
  description: string;
}

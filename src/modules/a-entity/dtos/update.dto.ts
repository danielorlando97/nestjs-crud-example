import { Exclude, Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import {
  BaseSerializer,
  HiddenMetaDataSerializer,
} from 'src/core/database/base-serializer';

export class AEntityUpdateDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
  //   BEntities: BEntity[];
}

export class AEntityUpdateSerializer extends BaseSerializer {
  name: string;
  description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BEntityAEntityUpdateSerializer)
  BEntities: BEntityAEntityUpdateSerializer[];
}

export class BEntityAEntityUpdateSerializer extends HiddenMetaDataSerializer {
  name: string;
  @Exclude()
  description: string;
}

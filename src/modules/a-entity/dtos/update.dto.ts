import { IsOptional, IsString } from 'class-validator';

export class AEntityUpdateDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
  //   BEntities: BEntity[];
}

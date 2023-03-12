import { IsOptional, IsString } from 'class-validator';

export class AEntityCreateDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
  //   BEntities: BEntity[];
}

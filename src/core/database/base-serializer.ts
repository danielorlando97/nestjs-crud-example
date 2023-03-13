import { Exclude } from 'class-transformer';

export class HiddenMetaDataSerializer {
  @Exclude()
  createdAt: Date;
  @Exclude()
  updatedAt: Date;
  @Exclude()
  deletedAt: Date;
}

export class BaseSerializer {
  @Exclude()
  updatedAt: Date;
  @Exclude()
  deletedAt: Date;
}

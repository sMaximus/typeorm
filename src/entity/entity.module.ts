import { Info } from './tables/Info';
import { User } from './tables/User';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityController } from './entity.controller';
import { EntityService } from './entity.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Info])],
  controllers: [EntityController],
  providers: [EntityService],
})
export class EntityModule {}

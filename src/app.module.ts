import { Info } from './entity/tables/Info';
import { User } from './entity/tables/User';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityModule } from './entity/entity.module';

@Module({
  imports: [
    EntityModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [User, Info],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

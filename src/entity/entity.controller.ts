import { User } from './tables/User';
import { Info } from './tables/Info';

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { EntityService } from './entity.service';

@Controller('db')
export class EntityController {
  constructor(private entityService: EntityService) {}

  @Get('')
  async index(@Query('id') id): Promise<User[]> {
    return this.entityService.find(id);
  }

  @Post('/createUser')
  async create(@Body() entitytData: User): Promise<any> {
    return this.entityService.create(entitytData);
  }

  @Post('/addInfo')
  async add(@Body() entitytData: Info): Promise<any> {
    return this.entityService.add(entitytData);
  }

  @Get('/update')
  async update(@Query('id') id, @Body() entityData: User): Promise<any> {
    entityData.id = Number(id);
    return this.entityService.update(entityData);
  }

  @Get('/delete')
  async delete(@Query('id') id): Promise<any> {
    return this.entityService.delete(id);
  }
}

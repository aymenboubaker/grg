import { Controller, Get,Param, Body,Put,Delete,Post } from '@nestjs/common';
import { Garage } from 'src/items/entities/garage.entity';
import { GarageService } from 'src/items/services/garage/garage.service';
import { DeepPartial } from 'typeorm';

@Controller('garages')
export class GarageController {
  constructor(private readonly garageService: GarageService) {}

  @Get()
  async findAll(): Promise<Garage[]> {
    return this.garageService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Garage | undefined> {
    return this.garageService.findGarageById(id);
  }
  @Post()
  create(@Body() garageData: DeepPartial<Garage>): Promise<Garage> {
    return this.garageService.createGarage(garageData);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: DeepPartial<Garage>): Promise<Garage> {
    return this.garageService.updateGarage(id, updateData);
  }
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.garageService.deleteGarage(id);
  }
}

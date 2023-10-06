import { Controller, Get } from '@nestjs/common';
import { Garage } from 'src/items/entities/garage.entity';
import { GarageService } from 'src/items/services/garage/garage.service';

@Controller('garages')
export class GarageController {
  constructor(private readonly garageService: GarageService) {}

  @Get()
  async findAll(): Promise<Garage[]> {
    return this.garageService.findAll();
  }
}

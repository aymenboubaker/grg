import { Controller, Get } from '@nestjs/common';
import { Car } from 'src/items/entities/Car.entity';
import { CarService } from 'src/items/services/car/car.service';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }
}

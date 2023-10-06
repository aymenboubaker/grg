import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '../entities/Car.entity';
import { CarService } from '../services/car/car.service';
import { CarController } from '../controllers/car/car.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarService],
  controllers: [CarController],
})
export class CarModule {}

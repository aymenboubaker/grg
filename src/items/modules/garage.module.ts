import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Garage } from 'src/items/entities/garage.entity';
import { GarageController } from '../controllers/garage/garage.controller';
import { GarageService } from '../services/garage/garage.service';

@Module({
  imports: [TypeOrmModule.forFeature([Garage])],
  providers: [GarageService],
  controllers: [GarageController],
  exports: [GarageService],
})
export class GarageModule {}

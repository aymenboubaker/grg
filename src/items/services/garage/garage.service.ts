import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Garage } from 'src/items/entities/garage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GarageService {
  constructor(
    @InjectRepository(Garage)
    private readonly garageRepository: Repository<Garage>,
  ) {}

  async findAll(): Promise<Garage[]> {
    return this.garageRepository.find();
  }
}

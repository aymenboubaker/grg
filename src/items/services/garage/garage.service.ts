import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Garage } from 'src/items/entities/garage.entity';
import { Repository } from 'typeorm';
import { DeepPartial } from 'typeorm';

@Injectable()
export class GarageService {
  constructor(
    @InjectRepository(Garage)
    private readonly garageRepository: Repository<Garage>,
  ) {}

  async findAll(): Promise<Garage[]> {
    return this.garageRepository.find();
  }
  async createGarage(garageData: DeepPartial<Garage>): Promise<Garage> {
    const newGarage = this.garageRepository.create(garageData);
    return this.garageRepository.save(newGarage);
  }
  async findGarageById(id: number): Promise<Garage | undefined> {
    return this.garageRepository.findOne({ where: { id } });
  }
  async updateGarage(id: number, updateData: DeepPartial<Garage>): Promise<Garage> {
    const existingGarage = await this.findGarageById(id);
    if (!existingGarage) {
      throw new NotFoundException(`Garage with ID ${id} not found`);
    }
    // Merge the update data into the existing garage
    this.garageRepository.merge(existingGarage, updateData);
    return this.garageRepository.save(existingGarage);
  }
  async deleteGarage(id: number): Promise<void> {
    const existingGarage = await this.findGarageById(id);
    if (!existingGarage) {
      throw new NotFoundException(`Garage with ID ${id} not found`);
    }

    await this.garageRepository.remove(existingGarage);
  }
}


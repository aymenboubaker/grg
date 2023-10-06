import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GarageModule } from './items/modules/garage.module';
import { CarModule } from './items/modules/car.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin2022',
      database: 'garageData',
      entities: [__dirname + '/**/*.entity{.ts,.js}',],
      synchronize: true,
    }),
    GarageModule,
    CarModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './services/vehicles.service';
import { VEHICLES_REPOSITORY } from './interfaces/vehicles.repository';
import { VehiclesRepository } from './repositories/vehicles.repository';

@Module({
  imports: [PrismaModule],
  controllers: [VehiclesController],
  providers: [
    VehiclesService,
    { provide: VEHICLES_REPOSITORY, useClass: VehiclesRepository },
  ],
})
export class VehiclesModule {}


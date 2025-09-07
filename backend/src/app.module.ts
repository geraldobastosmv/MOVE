import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles/vehicles.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  controllers: [VehiclesController],
  providers: [PrismaService],
})
export class AppModule {}


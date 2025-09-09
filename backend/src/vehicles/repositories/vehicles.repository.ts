import { Injectable } from '@nestjs/common';
import { Vehicle } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { IVehiclesRepository } from '../interfaces/vehicles.repository';

@Injectable()
export class VehiclesRepository implements IVehiclesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Vehicle[]> {
    return this.prisma.vehicle.findMany({ orderBy: { created_at: 'desc' } });
  }

  async findById(id: bigint): Promise<Vehicle | null> {
    return this.prisma.vehicle.findUnique({ where: { id } });
  }
}


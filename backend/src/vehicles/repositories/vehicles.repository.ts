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

  async findByFilters(filters: {
    categorySlug?: string;
    categoryId?: number;
    locationId?: bigint;
    start?: Date;
    end?: Date;
  }): Promise<Vehicle[]> {
    const where: any = {};

    if (typeof filters.categoryId === 'number') {
      where.categoryId = filters.categoryId;
    } else if (filters.categorySlug) {
      where.category = { slug: filters.categorySlug };
    }

    if (typeof filters.locationId === 'bigint') {
      where.locationId = filters.locationId;
    }

    // Availability: exclude vehicles with bookings that overlap the [start, end]
    if (filters.start && filters.end) {
      where.bookings = {
        none: {
          AND: [
            { start_date: { lte: filters.end } },
            { end_date: { gte: filters.start } },
          ],
        },
      };
    }

    return this.prisma.vehicle.findMany({ where, orderBy: { created_at: 'desc' } });
  }
}

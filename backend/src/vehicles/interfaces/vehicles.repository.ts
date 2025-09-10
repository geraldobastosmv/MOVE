import { Vehicle } from '@prisma/client';

export const VEHICLES_REPOSITORY = Symbol('VEHICLES_REPOSITORY');

export interface IVehiclesRepository {
  findAll(): Promise<Vehicle[]>;
  findById(id: bigint): Promise<Vehicle | null>;
  findByFilters(filters: {
    categorySlug?: string;
    categoryId?: number;
    locationId?: bigint;
    start?: Date;
    end?: Date;
  }): Promise<Vehicle[]>;
}

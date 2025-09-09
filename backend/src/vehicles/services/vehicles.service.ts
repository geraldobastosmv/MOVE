import { Inject, Injectable } from '@nestjs/common';
import { Prisma, Vehicle } from '@prisma/client';
import { IVehiclesRepository, VEHICLES_REPOSITORY } from '../interfaces/vehicles.repository';

// Public shape returned to API clients (BigInt/Decimal converted to string)
export interface VehicleDTO {
  id: string;
  ownerId: string;
  categoryId: string;
  locationId: string;
  title: string;
  description: string | null;
  brand: string | null;
  model: string | null;
  model_year: number | null;
  daily_price: string; // decimal as string
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

@Injectable()
export class VehiclesService {
  constructor(
    @Inject(VEHICLES_REPOSITORY)
    private readonly repo: IVehiclesRepository,
  ) {}

  async findAll(): Promise<VehicleDTO[]> {
    const rows = await this.repo.findAll();
    return rows.map(this.toDTO);
  }

  async findByIdString(id: string): Promise<VehicleDTO | null> {
    // Expect numeric string for BigInt; throw for invalid input
    if (!/^\d+$/.test(id)) return null;
    const row = await this.repo.findById(BigInt(id));
    return row ? this.toDTO(row) : null;
  }

  private toDTO = (v: Vehicle): VehicleDTO => ({
    id: v.id.toString(),
    ownerId: v.ownerId.toString(),
    categoryId: v.categoryId.toString(),
    locationId: v.locationId.toString(),
    title: v.title,
    description: v.description,
    brand: v.brand,
    model: v.model,
    model_year: v.model_year,
    daily_price: (v.daily_price as unknown as Prisma.Decimal).toString(),
    is_active: v.is_active,
    created_at: v.created_at.toISOString(),
    updated_at: v.updated_at.toISOString(),
  });
}

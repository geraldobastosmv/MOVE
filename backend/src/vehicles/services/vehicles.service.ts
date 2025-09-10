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

  async search(filters: {
    start_date?: string | null;
    end_date?: string | null;
    vehicle_category?: string | null; // slug or numeric id
    location?: string | null; // numeric id as string
  }): Promise<VehicleDTO[]> {
    const input = filters || {};

    // Parse category: allow slug or numeric id
    let categorySlug: string | undefined;
    let categoryId: number | undefined;
    if (input.vehicle_category) {
      if (/^\d+$/.test(input.vehicle_category)) categoryId = Number(input.vehicle_category);
      else categorySlug = input.vehicle_category;
    }

    // Parse location: numeric id for Location
    let locationId: bigint | undefined;
    if (input.location && /^\d+$/.test(input.location)) {
      locationId = BigInt(input.location);
    }

    // Parse dates only if both provided and valid
    let start: Date | undefined;
    let end: Date | undefined;
    if (input.start_date && input.end_date) {
      const s = new Date(input.start_date);
      const e = new Date(input.end_date);
      if (!isNaN(s.getTime()) && !isNaN(e.getTime())) {
        // Ensure start <= end; if not, swap
        if (s.getTime() <= e.getTime()) {
          start = s;
          end = e;
        } else {
          start = e;
          end = s;
        }
      }
    }

    const rows = await this.repo.findByFilters({ categorySlug, categoryId, locationId, start, end });
    return rows.map(this.toDTO);
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

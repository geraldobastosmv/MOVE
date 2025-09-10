import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { VehiclesService, VehicleDTO } from './services/vehicles.service';

@Controller('vehicles')
@ApiTags('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  @ApiOkResponse({ description: 'List all vehicles' })
  async getAll(): Promise<VehicleDTO[]> {
    return this.vehiclesService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true, description: 'Vehicle ID (BigInt as string)' })
  async getById(@Param('id') id: string) {
    const v = await this.vehiclesService.findByIdString(id);
    if (!v) throw new NotFoundException('Vehicle not found');
    return v;
  }

  @Post('search')
  @ApiBody({
    description: 'Optional filters for vehicle search',
    schema: {
      type: 'object',
      properties: {
        start_date: { type: 'string', format: 'date', nullable: true },
        end_date: { type: 'string', format: 'date', nullable: true },
        vehicle_category: { type: 'string', nullable: true, description: 'Category slug or numeric ID' },
        location: { type: 'string', nullable: true, description: 'Location numeric ID as string' },
      },
    },
  })
  @ApiOkResponse({ description: 'Filtered vehicles' })
  async search(
    @Body()
    body: {
      start_date?: string | null;
      end_date?: string | null;
      vehicle_category?: string | null;
      location?: string | null;
    },
  ): Promise<VehicleDTO[]> {
    return this.vehiclesService.search(body || {});
  }
}

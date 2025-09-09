import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
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
}

import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { PrismaService } from '../prisma/prisma.service';

@Controller('vehicles')
@ApiTags('vehicles')
export class VehiclesController {
  constructor(private readonly prisma: PrismaService) {}

  @Get(':id')
  @ApiParam({ name: 'id', required: true, description: 'Vehicle UUID' })
  async getById(@Param('id') id: string) {
    const v = await this.prisma.vehicle.findUnique({ where: { id } });
    if (!v) throw new NotFoundException('Vehicle not found');
    return v;
  }
}

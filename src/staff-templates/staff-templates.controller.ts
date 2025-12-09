import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { StaffTemplatesService } from './staff-templates.service';
import { CreateStaffTemplateDto } from './dto/create-staff-template.dto';
import { UpdateStaffTemplateDto } from './dto/update-staff-template.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('staff-templates')
export class StaffTemplatesController {
  constructor(private readonly staffTemplatesService: StaffTemplatesService) {}

  @Get()
  findAll() {
    return this.staffTemplatesService.findAll();
  }

  @Post()
  create(@Body() dto: CreateStaffTemplateDto) {
    return this.staffTemplatesService.create(dto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateStaffTemplateDto,
  ) {
    return this.staffTemplatesService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.staffTemplatesService.remove(id);
    return { message: 'deleted' };
  }
}


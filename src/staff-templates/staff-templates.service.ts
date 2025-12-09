import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StaffTemplate } from './entities/staff-template.entity';
import { CreateStaffTemplateDto } from './dto/create-staff-template.dto';
import { UpdateStaffTemplateDto } from './dto/update-staff-template.dto';

@Injectable()
export class StaffTemplatesService {
  constructor(
    @InjectRepository(StaffTemplate)
    private readonly staffTemplatesRepository: Repository<StaffTemplate>,
  ) {}

  async create(dto: CreateStaffTemplateDto): Promise<StaffTemplate> {
    const entity = this.staffTemplatesRepository.create(dto);
    return this.staffTemplatesRepository.save(entity);
  }

  findAll(): Promise<StaffTemplate[]> {
    return this.staffTemplatesRepository.find();
  }

  async update(id: number, dto: UpdateStaffTemplateDto): Promise<StaffTemplate> {
    const staffTemplate = await this.staffTemplatesRepository.findOne({
      where: { id },
    });
    if (!staffTemplate) {
      throw new NotFoundException('Staff template not found');
    }

    const merged = this.staffTemplatesRepository.merge(staffTemplate, dto);
    return this.staffTemplatesRepository.save(merged);
  }

  async remove(id: number): Promise<void> {
    const staffTemplate = await this.staffTemplatesRepository.findOne({
      where: { id },
    });
    if (!staffTemplate) {
      throw new NotFoundException('Staff template not found');
    }

    await this.staffTemplatesRepository.remove(staffTemplate);
  }
}


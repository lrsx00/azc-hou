import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffTemplateDto } from './create-staff-template.dto';

export class UpdateStaffTemplateDto extends PartialType(CreateStaffTemplateDto) {}


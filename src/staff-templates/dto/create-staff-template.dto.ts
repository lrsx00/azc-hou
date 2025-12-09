import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { StaffRole } from '../entities/staff-template.entity';

export class CreateStaffTemplateDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsEnum(StaffRole)
  role: StaffRole;

  @IsOptional()
  @IsString()
  avatarUrl?: string;
}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffTemplatesService } from './staff-templates.service';
import { StaffTemplatesController } from './staff-templates.controller';
import { StaffTemplate } from './entities/staff-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StaffTemplate])],
  controllers: [StaffTemplatesController],
  providers: [StaffTemplatesService],
})
export class StaffTemplatesModule {}


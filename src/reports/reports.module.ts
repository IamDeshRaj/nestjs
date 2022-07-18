import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from '../models/entities/report';

@Module({
  imports: [TypeOrmModule.forFeature([Report])],
  providers: [ReportsService],
  controllers: [ReportsController]
})
export class ReportsModule {}
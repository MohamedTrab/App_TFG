import { Module } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { DeliveriesController } from './deliveries.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [DeliveriesController],
  providers: [DeliveriesService,DatabaseService],
})
export class DeliveriesModule {}

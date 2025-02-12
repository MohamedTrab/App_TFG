import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Injectable()
export class DeliveriesService {
  constructor(private readonly db: DatabaseService) {}

  async create(createDeliveryDto: CreateDeliveryDto) {
    return this.db.delivery.create({
      data: { ...createDeliveryDto },
    });
  }

  async findAll() {
    return this.db.delivery.findMany();
  }

  async findOne(id: number) {
    return this.db.delivery.findUnique({ where: { id } });
  }

  async update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return this.db.delivery.update({
      where: { id },
      data: { ...updateDeliveryDto },
    });
  }

  async remove(id: number) {
    return this.db.delivery.delete({ where: { id } });
  }
}

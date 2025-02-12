import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { GetCurrentUser } from 'src/common/decorators';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post('create')
  createDelivery(@Body() data){

    return this.deliveryService.createDelivery(data)
  }

}

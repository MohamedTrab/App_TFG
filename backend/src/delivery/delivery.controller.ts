import { Body, Controller, HttpCode, HttpException, HttpStatus, Post,Delete,Param,ParseIntPipe,Get } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { GetCurrentUser } from 'src/common/decorators';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post('create')
  createDelivery(@Body() data){

    return this.deliveryService.createDelivery(data)
  }

  @Delete(':id')
  @HttpCode(200)
  async deleteDelivery(@Param('id', ParseIntPipe) id: number) {
    return await this.deliveryService.deleteDelivery(id);
  }

  @Get(':id')
  async getDelivery(@Param('id', ParseIntPipe) id: number) {
    return this.deliveryService.getDeliveryById(id);  // Llama al servicio para obtener la entrega
  }

}

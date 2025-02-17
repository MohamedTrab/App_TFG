import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DeliveryService {
  constructor(private readonly prisma: DatabaseService) {}

  async createDelivery(data) {
    const { truckId, clientId, conductorId } = data;
    const truckExist = await this.prisma.truck.findFirst({
      where: { id: +truckId },
    });

    if (!truckExist) {
      throw new HttpException('Camion no existe', HttpStatus.NOT_FOUND);
    }

    const activeDelivery = await this.prisma.delivery.findFirst({
      where: {
        truckId: +truckId,
        NOT: { status: 'sl3awoslt' },
      },
    });

    // if (activeDelivery) {
    //   throw new HttpException(
    //     'Este camión está ocupado en otra entrega',
    //     HttpStatus.CONFLICT,
    //   );
    // }

    const clientExist = await this.prisma.user.findFirst({
      where: { id: +clientId, role: 'CLIENT' },
    });

    if (!clientExist) {
      throw new HttpException(
        'Cliente no existe o el usuario no es Cliente ',
        HttpStatus.NOT_FOUND,
      );
    }

    const conductorExist = await this.prisma.user.findFirst({
      where: { id: parseInt(conductorId), role: 'CONDUCTEUR' },
    });

    if (!conductorExist) {
      throw new HttpException(
        'Conductor no existe o el usuario no es Conductor',
        HttpStatus.NOT_FOUND,
      );
    }

    //i5dmhom houni
    /**

    *
    * cond update sl3a 5rjt
    * yji mail ll client li sl3a 5rjt 
    * 
    * 
    * client yconfermi : update sl3a wolst
    * 

    */

    const deliveryCreated = await this.prisma.delivery.create({
      data: {
        truckId,
        clientId,
        conductorId,
      },
    });
    if (deliveryCreated) {
      throw new HttpException('delivery created', HttpStatus.CREATED);
    }
  }

  async deleteDelivery(id: number) {
    const delivery = await this.prisma.delivery.findUnique({ where: { id } });

    if (!delivery) {
      throw new HttpException('Delivery not found', HttpStatus.NOT_FOUND);
    }

    await this.prisma.delivery.delete({ where: { id } });

    return { message: 'Entrega eliminada correctamente' };
  }

  async getDeliveryById(id) {
    const delivery = await this.prisma.delivery.findFirst({
      where: { id },
      include: {
        truck: true, 
        user: {
          select: {
            email: true,
            role: true,
            id: true,
          },
        },
        client: {
          select: {
            email: true,
            role: true,
            id: true,
          },
        },
      },
    });

    if (!delivery) {
      throw new HttpException('Delivery not found', HttpStatus.NOT_FOUND);
    }

    return delivery;
  }
}

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
      throw new HttpException('truck nexiste pas', HttpStatus.NOT_FOUND);
    }

    const clientExist = await this.prisma.userInfo.findFirst({
      where: { id: +clientId },
    });

    if (!clientExist) {
      throw new HttpException('client nexiste pas', HttpStatus.NOT_FOUND);
    }

    const conductorExist = await this.prisma.user.findFirst({
      where: { id: +conductorId },
    });

    if (!conductorExist) {
      throw new HttpException('conducteur nexiste pas', HttpStatus.NOT_FOUND);
    }

    //i5dmhom houni
    /**
     * tasks :
     * crud t3 user info 
     * crud t3 deliver 
     * crud t3 truck
     * 
     * 
     * check roles of conductors client
     * ki n7otou zouz chwafra lazm maykounch l kamyoun hedheka deja mest3Mlinou
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
}

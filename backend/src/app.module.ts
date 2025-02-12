import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from './mailer/mailer.module';
import { APP_GUARD } from '@nestjs/core';
import { ActiveUserGuard, AtGuard } from './common/guards';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { TrucksModule } from './trucks/trucks.module';
import { DeliveriesModule } from './deliveries/deliveries.module';

@Module({
  imports: [DatabaseModule, AuthModule, MailerModule, UserModule, ArticleModule, TrucksModule, DeliveriesModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ActiveUserGuard,
    },
  ],
})
export class AppModule {}

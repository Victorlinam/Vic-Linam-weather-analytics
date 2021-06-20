import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { WeatherModule } from './modules/weather/weather.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({ imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, WeatherModule, AnalyticsModule, AdminModule] })
export class AppModule {}

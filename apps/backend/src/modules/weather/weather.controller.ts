import { Controller, Get, Query } from '@nestjs/common';
@Controller('weather')
export class WeatherController {
  @Get('current') current(@Query('lat') lat: string, @Query('lon') lon: string) {
    return { lat, lon, tempC: 23.2, humidity: 61, windKph: 13, provider: 'normalized-fallback-layer' };
  }
}

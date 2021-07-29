import { Controller, Get } from '@nestjs/common';
@Controller('analytics')
export class AnalyticsController { @Get('kpis') kpis(){ return { severeAlerts: 3, apiAvailability: 99.91, anomalyScore: 0.14, forecastConfidence: 0.86 }; } }

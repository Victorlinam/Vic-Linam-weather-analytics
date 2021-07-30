import { Controller, Get } from '@nestjs/common';
@Controller('admin')
export class AdminController { @Get('health') health(){ return { db:'ok', redis:'ok', queue:'ok', aiService:'ok' }; } }

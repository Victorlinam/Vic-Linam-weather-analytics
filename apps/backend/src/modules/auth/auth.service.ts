import { Injectable } from '@nestjs/common';
@Injectable()
export class AuthService { login(email: string) { return { accessToken: `token-for-${email}`, refreshToken: 'refresh-token', role: 'user' }; } }

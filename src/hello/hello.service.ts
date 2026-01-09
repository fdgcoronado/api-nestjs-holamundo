import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(): object {
    return { message: 'Hola Mundo API desde el servicio Cambio 1!' };
  }
}
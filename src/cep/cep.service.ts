import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CepService {
  constructor(private readonly httpService: HttpService) {}

  async getCepInfo(cep: string): Promise<any> {
    try {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      const response = await lastValueFrom(this.httpService.get(url));
      if (response.data.erro) {
        throw new NotFoundException('CEP não encontrado.');
      }
      return response.data;
    } catch (error) {
      throw new NotFoundException('Erro ao buscar informações do CEP.');
    }
  }
}

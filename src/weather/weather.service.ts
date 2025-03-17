import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getWeather(city: string): Promise<any> {
    try {
      const formattedCity = encodeURIComponent(city);
      const apiKey = this.configService.get<string>('OPENWEATHER_API_KEY');
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&appid=${apiKey}&units=metric`;
      
      const response = await lastValueFrom(this.httpService.get(url));
      return this.transformData(response.data);
    } catch (error) {
      if (error.response?.status === 404) {
        throw new NotFoundException('Cidade não encontrada.');
      }
      throw new InternalServerErrorException('Erro ao buscar os dados do clima.');
    }
  }

  private transformData(data: any): any {
    return {
      cidade: data.name,
      estado: data?.state || 'Não disponível',
      pais: data.sys?.country || 'Não disponível',
      temperatura: `${data.main.temp} °C`,
      descricao: data.weather[0]?.description || 'Não disponível',
      umidade: `${data.main.humidity} %`,
      vento: `${data.wind.speed} m/s`,
    };
  }
}
import { Injectable, NotFoundException } from '@nestjs/common';
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
      const apiKey = this.configService.get<string>('OPENWEATHER_API_KEY');
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await lastValueFrom(this.httpService.get(url));
      return this.transformData(response.data);
    } catch (error) {
      throw new NotFoundException(
        'Cidade não encontrada ou erro na requisição.',
      );
    }
  }

  private transformData(data: any): any {
    return {
      cidade: data.name,
      temperatura: `${data.main.temp} °C`,
      descricao: data.weather[0].description,
      umidade: `${data.main.humidity} %`,
      vento: `${data.wind.speed} m/s`,
    };
  }
}

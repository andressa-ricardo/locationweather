import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CepService } from '../cep/cep.service';
import { WeatherService } from '../weather/weather.service';
import { LocationWeatherDto } from './location-weather.dto';

@Injectable()
export class LocationWeatherService {
  constructor(
    private readonly cepService: CepService,
    private readonly weatherService: WeatherService,
  ) {}

  async getWeatherByCep(cep: string): Promise<LocationWeatherDto> {
    try {
      const cepData = await this.cepService.getCepInfo(cep);
      if (!cepData.localidade) {
        throw new NotFoundException('Cidade não encontrada para este CEP.');
      }

      const weatherData = await this.weatherService.getWeather(
        cepData.localidade,
      );

      return {
        cep: cepData.cep,
        cidade: cepData.localidade,
        estado: cepData.estado,
        regiao: cepData.regiao,
        temperatura: weatherData.temperatura,
        descricao: weatherData.descricao,
        umidade: weatherData.umidade,
        vento: weatherData.vento,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao obter dados do CEP e clima.',
      );
    }
  }
}

import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { LocationWeatherService } from './location-weather.service';
import { ApiTags, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { LocationWeatherDto } from './location-weather.dto';

@ApiTags('Localização e Clima')
@Controller('location-weather')
export class LocationWeatherController {
  constructor(
    private readonly locationWeatherService: LocationWeatherService,
  ) {}

  @Get()
  @ApiQuery({ name: 'cep', type: String, required: true, example: '25235-485' })
  @ApiResponse({
    status: 200,
    description: 'Dados do CEP e Clima',
    type: LocationWeatherDto,
  })
  @ApiResponse({ status: 400, description: 'Parâmetro "cep" é obrigatório' })
  @ApiResponse({
    status: 404,
    description: 'Cidade não encontrada para este CEP',
  })
  async getWeatherByCep(
    @Query('cep') cep: string,
  ): Promise<LocationWeatherDto> {
    if (!cep) {
      throw new BadRequestException('O parâmetro "cep" é obrigatório.');
    }
    return this.locationWeatherService.getWeatherByCep(cep);
  }
}

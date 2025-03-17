import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiTags, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { WeatherDto } from './weather.dto';

@ApiTags('Weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @ApiQuery({
    name: 'city',
    type: String,
    required: true,
    example: 'Rio de Janeiro',
  })
  @ApiResponse({ status: 200, description: 'Dados do clima', type: WeatherDto })
  @ApiResponse({ status: 400, description: 'Parâmetro "city" é obrigatório' })
  @ApiResponse({
    status: 404,
    description: 'Cidade não encontrada ou erro na requisição',
  })
  async getWeather(@Query('city') city: string): Promise<WeatherDto> {
    if (!city) {
      throw new BadRequestException('O parâmetro "city" é obrigatório.');
    }
    return this.weatherService.getWeather(city);
  }
}

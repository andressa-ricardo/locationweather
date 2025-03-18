import { Module } from '@nestjs/common';
import { LocationWeatherService } from './location-weather.service';
import { LocationWeatherController } from './location-weather.controller';
import { CepModule } from '../cep/cep.module';
import { WeatherModule } from '../weather/weather.module';

@Module({
  imports: [CepModule, WeatherModule],
  controllers: [LocationWeatherController],
  providers: [LocationWeatherService],
})
export class LocationWeatherModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './weather/weather.module';
import { CepModule } from './cep/cep.module';
import { LocationWeatherModule } from './locationweather/location-weather.module';

@Module({
  imports: [ConfigModule.forRoot(), LocationWeatherModule, WeatherModule, CepModule, ],
})
export class AppModule {}

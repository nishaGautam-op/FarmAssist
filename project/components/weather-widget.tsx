"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Sun, CloudRain, Droplets, Thermometer, Wind } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function WeatherWidget() {
  const { t } = useLanguage();

  // Mock weather data - in a real app, this would come from an API
  const weather = {
    temperature: 28,
    humidity: 75,
    windSpeed: 12,
    condition: 'partly_cloudy',
    rainfall: 2.5,
    location: 'Kochi, Kerala'
  };

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'rainy':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      case 'partly_cloudy':
      default:
        return <Cloud className="h-8 w-8 text-gray-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {getWeatherIcon()}
          <span>{t('todayWeather')}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold">{weather.temperature}°C</div>
            <div className="text-sm text-gray-600">{weather.location}</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <span>Humidity: {weather.humidity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-gray-500" />
              <span>Wind: {weather.windSpeed} km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <CloudRain className="h-4 w-4 text-blue-600" />
              <span>Rain: {weather.rainfall}mm</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-red-500" />
              <span>Feels like 32°C</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
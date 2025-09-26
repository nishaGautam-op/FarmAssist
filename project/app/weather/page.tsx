"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, Sun, CloudRain, Droplets, Thermometer, Wind, 
  Eye, Gauge, Calendar, Sunrise, Sunset, Leaf, Sprout 
} from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function WeatherPage() {
  const { t } = useLanguage();

  // Mock weather data
  const currentWeather = {
    location: 'Kochi, Kerala',
    temperature: 28,
    condition: 'partly_cloudy',
    humidity: 75,
    windSpeed: 12,
    visibility: 10,
    uvIndex: 6,
    pressure: 1013,
    feelsLike: 32,
    sunrise: '06:15',
    sunset: '18:45',
    rainfall: 2.5
  };

  const forecast = [
    { day: 'Today', high: 28, low: 22, condition: 'partly_cloudy', rainfall: 2.5 },
    { day: 'Tomorrow', high: 30, low: 24, condition: 'rainy', rainfall: 15.2 },
    { day: 'Wednesday', high: 26, low: 20, condition: 'rainy', rainfall: 25.8 },
    { day: 'Thursday', high: 29, low: 23, condition: 'partly_cloudy', rainfall: 5.0 },
    { day: 'Friday', high: 31, low: 25, condition: 'sunny', rainfall: 0.0 },
  ];

  const cropRecommendations = [
    {
      crop: 'Rice',
      suitability: 'Excellent',
      reason: 'Current humidity and upcoming rainfall perfect for rice cultivation',
      action: 'Start seedbed preparation',
      color: 'green'
    },
    {
      crop: 'Coconut',
      suitability: 'Good',
      reason: 'Moderate temperature and consistent moisture',
      action: 'Continue regular care',
      color: 'green'
    },
    {
      crop: 'Pepper',
      suitability: 'Very Good',
      reason: 'High humidity ideal for pepper growth',
      action: 'Plant new saplings',
      color: 'green'
    },
    {
      crop: 'Banana',
      suitability: 'Caution',
      reason: 'Heavy rainfall expected may cause waterlogging',
      action: 'Ensure proper drainage',
      color: 'yellow'
    }
  ];

  const farmingTips = [
    {
      title: 'Prepare for Heavy Rain',
      description: 'Clean drainage channels and cover vulnerable crops',
      priority: 'high'
    },
    {
      title: 'Fertilizer Application',
      description: 'Apply organic fertilizer before the rain to boost growth',
      priority: 'medium'
    },
    {
      title: 'Pest Monitoring',
      description: 'High humidity may increase pest activity. Monitor closely',
      priority: 'medium'
    }
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'rainy':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      case 'partly_cloudy':
      default:
        return <Cloud className="h-8 w-8 text-gray-500" />;
    }
  };

  const getSmallWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-5 w-5 text-yellow-500" />;
      case 'rainy':
        return <CloudRain className="h-5 w-5 text-blue-500" />;
      case 'partly_cloudy':
      default:
        return <Cloud className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Weather & Crop Recommendations</h1>
        <p className="text-gray-600 mt-2">
          Real-time weather data and farming advice for your location
        </p>
      </div>

      {/* Current Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {getWeatherIcon(currentWeather.condition)}
              Current Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold">{currentWeather.temperature}°C</div>
                <div className="text-lg text-gray-600">Partly Cloudy</div>
                <div className="text-sm text-gray-500">{currentWeather.location}</div>
                <div className="text-sm text-gray-500">Feels like {currentWeather.feelsLike}°C</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  <span>Humidity: {currentWeather.humidity}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-gray-500" />
                  <span>Wind: {currentWeather.windSpeed} km/h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-gray-500" />
                  <span>Visibility: {currentWeather.visibility} km</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-gray-500" />
                  <span>Pressure: {currentWeather.pressure} mb</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sunrise className="h-4 w-4 text-orange-500" />
                  <span>Sunrise: {currentWeather.sunrise}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sunset className="h-4 w-4 text-orange-600" />
                  <span>Sunset: {currentWeather.sunset}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              5-Day Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {forecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    {getSmallWeatherIcon(day.condition)}
                    <span className="font-medium">{day.day}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{day.high}°/{day.low}°</div>
                    <div className="text-sm text-blue-600">{day.rainfall}mm</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Crop Recommendations */}
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              Crop Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cropRecommendations.map((crop, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{crop.crop}</h3>
                    <Badge variant={crop.color === 'green' ? 'default' : 'secondary'}>
                      {crop.suitability}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{crop.reason}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Sprout className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-600">{crop.action}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Farming Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Weather-Based Farming Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {farmingTips.map((tip, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start gap-3">
                  <div className={`p-1 rounded-full ${
                    tip.priority === 'high' ? 'bg-red-100' : 'bg-yellow-100'
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${
                      tip.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}></div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{tip.title}</h3>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
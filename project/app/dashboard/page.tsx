"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { WeatherWidget } from '@/components/weather-widget';
import { FeatureCard } from '@/components/feature-card';
import { 
  Mic, Cloud, Bug, Droplets, Bell, MapPin, 
  TrendingUp, Calendar, Leaf, AlertCircle 
} from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function DashboardPage() {
  const { t } = useLanguage();

  const quickActions = [
    {
      icon: Mic,
      title: t('voiceAssistant'),
      description: "Ask farming questions",
      buttonText: "Start Chat",
      href: '/voice-assistant'
    },
    {
      icon: Cloud,
      title: t('weatherDetection'),
      description: "Check weather & crops",
      buttonText: "View Weather",
      href: '/weather'
    },
    {
      icon: Bug,
      title: t('diseaseAnalysis'),
      description: "Analyze plant diseases",
      buttonText: "Analyze",
      href: '/disease-analysis'
    },
    {
      icon: Droplets,
      title: t('soilGuidance'),
      description: "Get soil recommendations",
      buttonText: "Guide Me",
      href: '/soil-guide'
    },
    {
      icon: Bell,
      title: "Reminders",
      description: "Manage farm tasks",
      buttonText: "View Tasks",
      href: '/reminders'
    },
    {
      icon: MapPin,
      title: "Nearby Shops",
      description: "Find agricultural supplies",
      buttonText: "Find Shops",
      href: '/nearby-shops'
    }
  ];

  const recentActivities = [
    {
      title: "Disease Analysis Completed",
      description: "Brown leaf spot detected in rice crop",
      time: "2 hours ago",
      icon: Bug,
      status: "warning"
    },
    {
      title: "Weather Alert",
      description: "Heavy rainfall expected tomorrow",
      time: "4 hours ago",
      icon: Cloud,
      status: "info"
    },
    {
      title: "Fertilizer Reminder",
      description: "Apply NPK fertilizer to tomato plants",
      time: "1 day ago",
      icon: Calendar,
      status: "success"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {t('welcomeFarmer')}, Ravi Kumar! 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Here's your farming dashboard for today
        </p>
      </div>

      {/* Top Row - Weather & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <WeatherWidget />
        </div>
        
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-gray-600">Active Crops</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">₹45K</div>
                    <div className="text-sm text-gray-600">Monthly Income</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm text-gray-600">Pending Tasks</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('quickActions')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <FeatureCard key={index} {...action} />
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('recentActivity')}</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                  <div className={`p-2 rounded-lg ${
                    activity.status === 'warning' ? 'bg-orange-100' :
                    activity.status === 'info' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    <activity.icon className={`h-4 w-4 ${
                      activity.status === 'warning' ? 'text-orange-600' :
                      activity.status === 'info' ? 'text-blue-600' : 'text-green-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
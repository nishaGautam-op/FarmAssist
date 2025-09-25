"use client";

import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { FeatureCard } from '@/components/feature-card';
import { Mic, Cloud, Bug, Droplets, Bell, MapPin, ChevronRight, Leaf, Users, Award, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Mic,
      title: t('voiceAssistant'),
      description: t('voiceDesc'),
      buttonText: t('getStarted'),
      href: '/voice-assistant'
    },
    {
      icon: Cloud,
      title: t('weatherDetection'),
      description: t('weatherDesc'),
      buttonText: t('getStarted'),
      href: '/weather'
    },
    {
      icon: Bug,
      title: t('diseaseAnalysis'),
      description: t('diseaseDesc'),
      buttonText: t('getStarted'),
      href: '/disease-analysis'
    },
    {
      icon: Droplets,
      title: t('soilGuidance'),
      description: t('soilDesc'),
      buttonText: t('getStarted'),
      href: '/soil-guide'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8 bgimg">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {t('heroTitle')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-green-100 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Link href="/auth/signup">{t('getStarted')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
              <Link href="#features">{t('learnMore')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Smart Farming Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive AI-powered tools designed specifically for Kerala's farming conditions
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 sm:mt-20 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <FeatureCard
                icon={Bell}
                title="Smart Reminders"
                description="Never miss watering, fertilizing, or harvest time"
                buttonText={t('getStarted')}
                href="/reminders"
              />
              <FeatureCard
                icon={MapPin}
                title="Find Nearby Shops"
                description="Locate agricultural supplies and equipment nearby"
                buttonText={t('getStarted')}
                href="/nearby-shops"
              />
            </div>
            
            {/* Stats */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Trusted by Kerala Farmers
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Active Farmers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">4</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">25%</div>
                  <div className="text-sm text-gray-600">Yield Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to revolutionize your farming?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-green-100">
              Join thousands of Kerala farmers who are already using AI to improve their harvests and reduce costs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
                <Link href="/auth/signup">{t('getStarted')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="rounded-lg bg-green-600 p-1.5">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">FarmAssist</span>
            </div>
            <p className="text-gray-600">
              AI-Powered Farming Assistant for Kerala Farmers
            </p>
            <p className="text-sm text-gray-500 mt-2">
              © 2024 FarmAssist. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
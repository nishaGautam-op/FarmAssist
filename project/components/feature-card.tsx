import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  href?: string;
  onClick?: () => void;
}

export function FeatureCard({ icon: Icon, title, description, buttonText, href, onClick }: FeatureCardProps) {
  return (
    <Card className="group transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        {href ? (
          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
            <a href={href}>{buttonText}</a>
          </Button>
        ) : (
          <Button onClick={onClick} className="w-full bg-green-600 hover:bg-green-700">
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
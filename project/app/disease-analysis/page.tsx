"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Upload, Camera, AlertTriangle, CheckCircle, 
  Bug, Leaf, Droplets, Sprout, ShoppingCart 
} from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function DiseaseAnalysisPage() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [symptoms, setSymptoms] = useState('');
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Mock analysis results
  const mockResults = {
    disease: {
      name: 'Brown Leaf Spot',
      scientificName: 'Bipolaris oryzae',
      confidence: 92,
      severity: 'Moderate',
      crop: 'Rice'
    },
    symptoms: [
      'Brown oval spots on leaves',
      'Yellow halo around spots',
      'Leaf yellowing and drying'
    ],
    causes: [
      'High humidity and warm weather',
      'Poor air circulation',
      'Excess nitrogen fertilization'
    ],
    treatment: {
      immediate: [
        'Remove affected leaves immediately',
        'Apply fungicide (Propiconazole)',
        'Improve field drainage'
      ],
      preventive: [
        'Use disease-resistant varieties',
        'Maintain proper plant spacing',
        'Apply balanced fertilization'
      ]
    },
    products: [
      {
        name: 'Propiconazole 25% EC',
        type: 'Fungicide',
        dosage: '1ml per liter',
        price: '₹450',
        availability: 'Available nearby'
      },
      {
        name: 'Mancozeb 75% WP',
        type: 'Fungicide',
        dosage: '2g per liter',
        price: '₹320',
        availability: 'Available nearby'
      }
    ]
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalysis = () => {
    if (!selectedImage && !symptoms.trim()) {
      alert('Please upload an image or describe symptoms');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult(mockResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'mild':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'severe':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Disease & Pest Analysis</h1>
        <p className="text-gray-600 mt-2">
          Upload crop images or describe symptoms to get instant diagnosis and treatment recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Upload Crop Image
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  {selectedImage ? (
                    <div className="space-y-4">
                      <img 
                        src={selectedImage} 
                        alt="Uploaded crop" 
                        className="max-w-full h-48 object-contain mx-auto rounded-lg"
                      />
                      <Button
                        variant="outline"
                        onClick={() => setSelectedImage(null)}
                      >
                        Remove Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                      <div>
                        <p className="text-lg font-medium">Upload crop image</p>
                        <p className="text-sm text-gray-600">
                          Support JPG, PNG files up to 10MB
                        </p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <Button asChild>
                        <label htmlFor="image-upload" className="cursor-pointer">
                          Choose File
                        </label>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bug className="h-5 w-5" />
                Describe Symptoms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Describe what you observe: leaf color changes, spots, wilting, pest presence, etc."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                rows={4}
                className="w-full"
              />
            </CardContent>
          </Card>

          <Button 
            onClick={handleAnalysis}
            className="w-full bg-green-600 hover:bg-green-700"
            size="lg"
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Analyzing...
              </>
            ) : (
              <>
                <Bug className="h-4 w-4 mr-2" />
                Analyze Disease
              </>
            )}
          </Button>
        </div>

        {/* Results Section */}
        <div>
          {analysisResult ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Analysis Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="diagnosis" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
                    <TabsTrigger value="treatment">Treatment</TabsTrigger>
                    <TabsTrigger value="products">Products</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="diagnosis" className="space-y-4">
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-red-600">
                            {analysisResult.disease.name}
                          </h3>
                          <Badge className={getSeverityColor(analysisResult.disease.severity)}>
                            {analysisResult.disease.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 italic mb-2">
                          {analysisResult.disease.scientificName}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Confidence: </span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{ width: `${analysisResult.disease.confidence}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold">{analysisResult.disease.confidence}%</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Leaf className="h-4 w-4" />
                          Observed Symptoms
                        </h4>
                        <ul className="space-y-1">
                          {analysisResult.symptoms.map((symptom: string, index: number) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Possible Causes</h4>
                        <ul className="space-y-1">
                          {analysisResult.causes.map((cause: string, index: number) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <AlertTriangle className="h-3 w-3 text-orange-600" />
                              {cause}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="treatment" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-600">Immediate Actions</h4>
                      <ul className="space-y-2">
                        {analysisResult.treatment.immediate.map((action: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-green-600">Preventive Measures</h4>
                      <ul className="space-y-2">
                        {analysisResult.treatment.preventive.map((measure: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                            {measure}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="products" className="space-y-4">
                    {analysisResult.products.map((product: any, index: number) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{product.name}</h4>
                          <Badge variant="outline">{product.type}</Badge>
                        </div>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><span className="font-medium">Dosage:</span> {product.dosage}</p>
                          <p><span className="font-medium">Price:</span> {product.price}</p>
                          <p className="flex items-center gap-1">
                            <span className="font-medium">Status:</span>
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            {product.availability}
                          </p>
                        </div>
                        <Button size="sm" className="mt-2 w-full" variant="outline">
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Find Nearby Shop
                        </Button>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Bug className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Ready to Analyze
                </h3>
                <p className="text-gray-500">
                  Upload an image or describe symptoms to get started with AI-powered disease diagnosis.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
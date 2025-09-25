import { Navbar } from '@/components/navbar';

export default function DiseaseAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <Navbar />
      {children}
    </div>
  );
}
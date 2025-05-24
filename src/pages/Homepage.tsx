
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Shield, Settings, Bell } from 'lucide-react';

const Homepage = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Pelacakan Real-time',
      description: 'Pantau lokasi kendaraan Anda secara langsung dengan akurasi tinggi'
    },
    {
      icon: Shield,
      title: 'Keamanan Terjamin',
      description: 'Sistem keamanan berlapis dengan enkripsi data end-to-end'
    },
    {
      icon: Settings,
      title: 'Kontrol Remote',
      description: 'Matikan mesin dan kontrol kendaraan dari jarak jauh'
    },
    {
      icon: Bell,
      title: 'Notifikasi Cerdas',
      description: 'Dapatkan peringatan instant untuk aktivitas mencurigakan'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Solusi GPS Tracker
              <span className="block text-emerald-200">Terdepan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto">
              Pantau, kontrol, dan amankan kendaraan Anda dengan teknologi GPS tracking terdepan. 
              Real-time monitoring dengan akurasi tinggi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100" asChild>
                <Link to="/register">Mulai Gratis</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600" asChild>
                <Link to="/dashboard">Lihat Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dilengkapi dengan teknologi terdepan untuk memberikan pengalaman tracking terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 card-gradient">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Siap Memulai?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Bergabunglah dengan ribuan pengguna yang telah mempercayai kami untuk mengamankan kendaraan mereka
          </p>
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600" asChild>
            <Link to="/register">Daftar Sekarang</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

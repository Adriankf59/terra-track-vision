
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, User, Settings } from 'lucide-react';

const Dashboard = () => {
  const vehicles = [
    { id: 1, name: 'Truk Pengiriman 01', status: 'Aktif', location: 'Jakarta Pusat', speed: '45 km/h' },
    { id: 2, name: 'Van Ekspedisi 02', status: 'Parkir', location: 'Bandung', speed: '0 km/h' },
    { id: 3, name: 'Motor Kurir 03', status: 'Aktif', location: 'Surabaya', speed: '35 km/h' },
  ];

  const stats = [
    { title: 'Total Kendaraan', value: '12', icon: Settings },
    { title: 'Aktif Hari Ini', value: '8', icon: Calendar },
    { title: 'Rata-rata Kecepatan', value: '42 km/h', icon: MapPin },
    { title: 'Peringatan', value: '3', icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Pantau semua kendaraan Anda dalam satu tempat</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Peta Real-time</span>
              </CardTitle>
              <CardDescription>
                Lokasi semua kendaraan Anda saat ini
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Peta Interaktif</p>
                  <p className="text-gray-400">Akan menampilkan lokasi real-time kendaraan</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle List */}
          <Card>
            <CardHeader>
              <CardTitle>Kendaraan Aktif</CardTitle>
              <CardDescription>
                Status terkini kendaraan Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{vehicle.name}</h4>
                    <p className="text-sm text-gray-500">{vehicle.location}</p>
                    <p className="text-sm text-gray-500">{vehicle.speed}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        vehicle.status === 'Aktif'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {vehicle.status}
                    </span>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4" variant="outline">
                Lihat Semua Kendaraan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

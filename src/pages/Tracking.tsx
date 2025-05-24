
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { map-pin, calendar, arrow-right } from 'lucide-react';

const Tracking = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  
  const vehicles = [
    { id: '1', name: 'Truk Pengiriman 01' },
    { id: '2', name: 'Van Ekspedisi 02' },
    { id: '3', name: 'Motor Kurir 03' },
  ];

  const trackingData = {
    currentLocation: 'Jl. Sudirman No. 123, Jakarta Pusat',
    speed: '45 km/h',
    lastUpdate: '2 menit yang lalu',
    fuel: '75%',
    engine: 'Hidup',
    driver: 'Ahmad Santoso'
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pelacakan & Riwayat</h1>
          <p className="text-gray-600">Pantau kendaraan secara real-time dan lihat riwayat perjalanan</p>
        </div>

        {/* Vehicle Selector */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pilih Kendaraan</CardTitle>
            <CardDescription>Pilih kendaraan yang ingin dipantau</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
                <SelectTrigger className="w-full sm:w-72">
                  <SelectValue placeholder="Pilih kendaraan..." />
                </SelectTrigger>
                <SelectContent>
                  {vehicles.map((vehicle) => (
                    <SelectItem key={vehicle.id} value={vehicle.id}>
                      {vehicle.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button disabled={!selectedVehicle}>
                <map-pin className="w-4 h-4 mr-2" />
                Mulai Pelacakan
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map and Tracking */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <map-pin className="w-5 h-5" />
                <span>Lokasi Real-time</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 mb-6">
                <div className="text-center">
                  <map-pin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Peta Pelacakan</p>
                  <p className="text-gray-400">Menampilkan rute dan lokasi real-time</p>
                </div>
              </div>
              
              {/* Route Controls */}
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <calendar className="w-4 h-4 mr-2" />
                  Riwayat Hari Ini
                </Button>
                <Button variant="outline" size="sm">
                  <calendar className="w-4 h-4 mr-2" />
                  7 Hari Terakhir
                </Button>
                <Button variant="outline" size="sm">
                  <calendar className="w-4 h-4 mr-2" />
                  Custom Range
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Info Kendaraan</CardTitle>
                <CardDescription>Data real-time kendaraan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Lokasi</p>
                    <p className="font-medium">{trackingData.currentLocation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Kecepatan</p>
                    <p className="font-medium text-lg">{trackingData.speed}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Update Terakhir</p>
                    <p className="font-medium">{trackingData.lastUpdate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">BBM</p>
                    <p className="font-medium">{trackingData.fuel}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Mesin</p>
                    <p className="font-medium text-green-600">{trackingData.engine}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Driver</p>
                    <p className="font-medium">{trackingData.driver}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kontrol Cepat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <map-pin className="w-4 h-4 mr-2" />
                  Bagikan Lokasi
                </Button>
                <Button className="w-full" variant="outline">
                  <calendar className="w-4 h-4 mr-2" />
                  Unduh Riwayat
                </Button>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Matikan Mesin
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;

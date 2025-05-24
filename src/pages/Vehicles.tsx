
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { settings, circle-plus, map-pin } from 'lucide-react';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      name: 'Truk Pengiriman 01',
      plateNumber: 'B 1234 CD',
      deviceId: 'GPS001',
      driver: 'Ahmad Santoso',
      status: 'Aktif',
      lastLocation: 'Jakarta Pusat'
    },
    {
      id: 2,
      name: 'Van Ekspedisi 02',
      plateNumber: 'B 5678 EF',
      deviceId: 'GPS002',
      driver: 'Budi Prakoso',
      status: 'Parkir',
      lastLocation: 'Bandung'
    },
    {
      id: 3,
      name: 'Motor Kurir 03',
      plateNumber: 'B 9012 GH',
      deviceId: 'GPS003',
      driver: 'Citra Dewi',
      status: 'Aktif',
      lastLocation: 'Surabaya'
    }
  ]);

  const [newVehicle, setNewVehicle] = useState({
    name: '',
    plateNumber: '',
    deviceId: '',
    driver: ''
  });

  const handleAddVehicle = () => {
    if (newVehicle.name && newVehicle.plateNumber && newVehicle.deviceId) {
      setVehicles([...vehicles, {
        id: vehicles.length + 1,
        ...newVehicle,
        status: 'Tidak Aktif',
        lastLocation: '-'
      }]);
      setNewVehicle({ name: '', plateNumber: '', deviceId: '', driver: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manajemen Kendaraan</h1>
            <p className="text-gray-600">Kelola data kendaraan dan perangkat GPS</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600">
                <circle-plus className="w-4 h-4 mr-2" />
                Tambah Kendaraan
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Tambah Kendaraan Baru</DialogTitle>
                <DialogDescription>
                  Masukkan informasi kendaraan dan perangkat GPS
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="vehicleName">Nama Kendaraan</Label>
                  <Input
                    id="vehicleName"
                    value={newVehicle.name}
                    onChange={(e) => setNewVehicle({...newVehicle, name: e.target.value})}
                    placeholder="Contoh: Truk Pengiriman 01"
                  />
                </div>
                <div>
                  <Label htmlFor="plateNumber">Nomor Polisi</Label>
                  <Input
                    id="plateNumber"
                    value={newVehicle.plateNumber}
                    onChange={(e) => setNewVehicle({...newVehicle, plateNumber: e.target.value})}
                    placeholder="Contoh: B 1234 CD"
                  />
                </div>
                <div>
                  <Label htmlFor="deviceId">ID Perangkat GPS</Label>
                  <Input
                    id="deviceId"
                    value={newVehicle.deviceId}
                    onChange={(e) => setNewVehicle({...newVehicle, deviceId: e.target.value})}
                    placeholder="Contoh: GPS001"
                  />
                </div>
                <div>
                  <Label htmlFor="driver">Nama Driver</Label>
                  <Input
                    id="driver"
                    value={newVehicle.driver}
                    onChange={(e) => setNewVehicle({...newVehicle, driver: e.target.value})}
                    placeholder="Contoh: Ahmad Santoso"
                  />
                </div>
                <Button onClick={handleAddVehicle} className="w-full">
                  Tambah Kendaraan
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{vehicle.name}</CardTitle>
                    <CardDescription>{vehicle.plateNumber}</CardDescription>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      vehicle.status === 'Aktif'
                        ? 'bg-green-100 text-green-800'
                        : vehicle.status === 'Parkir'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {vehicle.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Device ID:</span>
                    <span className="font-medium">{vehicle.deviceId}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Driver:</span>
                    <span className="font-medium">{vehicle.driver}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Lokasi Terakhir:</span>
                    <span className="font-medium">{vehicle.lastLocation}</span>
                  </div>
                  
                  <div className="flex gap-2 pt-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <map-pin className="w-4 h-4 mr-1" />
                      Lacak
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <settings className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Ringkasan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{vehicles.length}</div>
                <div className="text-sm text-gray-500">Total Kendaraan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {vehicles.filter(v => v.status === 'Aktif').length}
                </div>
                <div className="text-sm text-gray-500">Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {vehicles.filter(v => v.status === 'Parkir').length}
                </div>
                <div className="text-sm text-gray-500">Parkir</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">
                  {vehicles.filter(v => v.status === 'Tidak Aktif').length}
                </div>
                <div className="text-sm text-gray-500">Tidak Aktif</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Vehicles;

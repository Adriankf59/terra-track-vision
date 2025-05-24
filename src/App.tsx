
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Tracking from "./pages/Tracking";
import Vehicles from "./pages/Vehicles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Routes with navbar */}
            <Route path="/*" element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/tracking" element={<Tracking />} />
                  <Route path="/vehicles" element={<Vehicles />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

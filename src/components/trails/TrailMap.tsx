import React, { useState } from "react";
import { MapPin, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TrailMapMarker {
  id: string;
  latitude: number;
  longitude: number;
  difficulty: "easy" | "medium" | "hard";
  title: string;
}

interface TrailMapProps {
  markers?: TrailMapMarker[];
  center?: { lat: number; lng: number };
  zoom?: number;
  onMarkerClick?: (markerId: string) => void;
}

const TrailMap = ({
  markers = [
    {
      id: "1",
      latitude: 31.7683,
      longitude: 35.2137,
      difficulty: "easy",
      title: "Jerusalem Trail",
    },
    {
      id: "2",
      latitude: 32.794,
      longitude: 35.5019,
      difficulty: "medium",
      title: "Mount Tabor Trail",
    },
    {
      id: "3",
      latitude: 30.5951,
      longitude: 34.8,
      difficulty: "hard",
      title: "Makhtesh Ramon Trail",
    },
  ],
  center = { lat: 31.7683, lng: 35.2137 },
  zoom = 8,
  onMarkerClick = () => {},
}: TrailMapProps) => {
  const [currentZoom, setCurrentZoom] = useState(zoom);

  const difficultyColors = {
    easy: "bg-green-500",
    medium: "bg-yellow-500",
    hard: "bg-red-500",
  };

  return (
    <div className="relative w-full h-[540px] bg-gray-100 overflow-hidden">
      {/* Placeholder for actual map implementation */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b')] bg-cover bg-center opacity-50"></div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setCurrentZoom((prev) => Math.min(prev + 1, 20))}
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setCurrentZoom((prev) => Math.max(prev - 1, 1))}
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>

      {/* Trail Markers */}
      <TooltipProvider>
        {markers.map((marker) => (
          <div
            key={marker.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{
              left: `${(marker.longitude - center.lng) * 100 + 50}%`,
              top: `${(marker.latitude - center.lat) * 100 + 50}%`,
            }}
            onClick={() => onMarkerClick(marker.id)}
          >
            <Tooltip>
              <TooltipTrigger>
                <div
                  className={`p-2 rounded-full ${difficultyColors[marker.difficulty]} shadow-lg`}
                >
                  <MapPin className="h-4 w-4 text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{marker.title}</p>
                <p className="capitalize text-xs text-gray-500">
                  {marker.difficulty} difficulty
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </TooltipProvider>

      {/* Weather Overlay */}
      <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg shadow-lg">
        <div className="text-sm font-medium">Current Weather</div>
        <div className="text-xs text-gray-500">
          Sunny • 24°C • Wind: 12 km/h
        </div>
      </div>
    </div>
  );
};

export default TrailMap;

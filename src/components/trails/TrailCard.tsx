import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ArrowUpRight, Thermometer, Wind } from "lucide-react";

interface TrailCardProps {
  title?: string;
  difficulty?: "easy" | "medium" | "hard";
  distance?: number;
  elevation?: number;
  duration?: number;
  temperature?: number;
  windSpeed?: number;
  imageUrl?: string;
  status?: "open" | "closed" | "warning";
}

const TrailCard = ({
  title = "Mount Arbel Trail",
  difficulty = "medium",
  distance = 5.2,
  elevation = 380,
  duration = 3,
  temperature = 24,
  windSpeed = 12,
  imageUrl = "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
  status = "open",
}: TrailCardProps) => {
  const difficultyColors = {
    easy: "bg-green-500",
    medium: "bg-yellow-500",
    hard: "bg-red-500",
  };

  const statusColors = {
    open: "bg-green-500",
    closed: "bg-red-500",
    warning: "bg-yellow-500",
  };

  return (
    <Card className="w-[360px] h-[280px] overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0 relative h-32">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge className={`${difficultyColors[difficulty]} text-white`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
          <Badge className={`${statusColors[status]} text-white`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{distance} km</span>
          </div>
          <div className="flex items-center gap-1">
            <ArrowUpRight className="w-4 h-4" />
            <span>{elevation}m</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration} hours</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t">
        <div className="flex justify-between w-full text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Thermometer className="w-4 h-4" />
            <span>{temperature}°C</span>
          </div>
          <div className="flex items-center gap-1">
            <Wind className="w-4 h-4" />
            <span>{windSpeed} km/h</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TrailCard;

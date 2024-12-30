import React from "react";
import TrailCard from "./TrailCard";

interface TrailCardGridProps {
  trails?: Array<{
    id: string;
    title: string;
    difficulty: "easy" | "medium" | "hard";
    distance: number;
    elevation: number;
    duration: number;
    temperature: number;
    windSpeed: number;
    imageUrl: string;
    status: "open" | "closed" | "warning";
  }>;
}

const defaultTrails = [
  {
    id: "1",
    title: "Mount Arbel Trail",
    difficulty: "medium",
    distance: 5.2,
    elevation: 380,
    duration: 3,
    temperature: 24,
    windSpeed: 12,
    imageUrl: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    status: "open",
  },
  {
    id: "2",
    title: "Sea of Galilee Circuit",
    difficulty: "easy",
    distance: 3.8,
    elevation: 150,
    duration: 2,
    temperature: 26,
    windSpeed: 8,
    imageUrl: "https://images.unsplash.com/photo-1542292714-0af8a9b4bda6",
    status: "open",
  },
  {
    id: "3",
    title: "Masada Snake Path",
    difficulty: "hard",
    distance: 2.5,
    elevation: 350,
    duration: 1.5,
    temperature: 28,
    windSpeed: 15,
    imageUrl: "https://images.unsplash.com/photo-1544735716-ea9ef790f501",
    status: "warning",
  },
] as const;

const TrailCardGrid = ({ trails = defaultTrails }: TrailCardGridProps) => {
  return (
    <div className="w-full min-h-[362px] bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {trails.map((trail) => (
            <TrailCard
              key={trail.id}
              title={trail.title}
              difficulty={trail.difficulty}
              distance={trail.distance}
              elevation={trail.elevation}
              duration={trail.duration}
              temperature={trail.temperature}
              windSpeed={trail.windSpeed}
              imageUrl={trail.imageUrl}
              status={trail.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrailCardGrid;

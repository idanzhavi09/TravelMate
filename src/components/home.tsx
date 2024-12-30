import React, { useState, useMemo } from "react";
import PreferenceSelector from "./trails/PreferenceSelector";
import TrailMap from "./trails/TrailMap";
import TrailCardGrid from "./trails/TrailCardGrid";
import EmergencyInfoDialog from "./trails/EmergencyInfoDialog";
import { Button } from "@/components/ui/button";
import { Filter, AlertTriangle } from "lucide-react";

interface HomeProps {
  initialPreferences?: {
    difficulty: "easy" | "medium" | "hard";
    duration: number;
    activityType: "hiking" | "biking" | "family";
  };
}

const allTrails = [
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
    activityType: "hiking",
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
    activityType: "family",
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
    activityType: "hiking",
  },
  {
    id: "4",
    title: "Tel Aviv Promenade",
    difficulty: "easy",
    distance: 8.0,
    elevation: 10,
    duration: 2.5,
    temperature: 27,
    windSpeed: 18,
    imageUrl: "https://images.unsplash.com/photo-1544971587-b842c27f8e14",
    status: "open",
    activityType: "biking",
  },
  {
    id: "5",
    title: "Carmel Mountain Trail",
    difficulty: "medium",
    distance: 12.0,
    elevation: 450,
    duration: 5,
    temperature: 22,
    windSpeed: 10,
    imageUrl: "https://images.unsplash.com/photo-1578508048851-45246f69d9d1",
    status: "open",
    activityType: "biking",
  },
  {
    id: "6",
    title: "Ein Gedi Nature Reserve",
    difficulty: "easy",
    distance: 3.0,
    elevation: 100,
    duration: 2,
    temperature: 30,
    windSpeed: 5,
    imageUrl: "https://images.unsplash.com/photo-1578508048544-5b3a3e3bf00c",
    status: "open",
    activityType: "family",
  },
];

const Home = ({
  initialPreferences = {
    difficulty: "medium",
    duration: 4,
    activityType: "hiking",
  },
}: HomeProps) => {
  const [preferences, setPreferences] = useState(initialPreferences);
  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false);

  const handlePreferenceChange = (
    newPreferences: typeof initialPreferences,
  ) => {
    setPreferences(newPreferences);
  };

  const filteredTrails = useMemo(() => {
    return allTrails.filter((trail) => {
      const matchesDifficulty = preferences.difficulty === trail.difficulty;
      const matchesActivity = preferences.activityType === trail.activityType;
      const matchesDuration =
        Math.abs(trail.duration - preferences.duration) <= 2;
      return matchesDifficulty && matchesActivity && matchesDuration;
    });
  }, [preferences]);

  const mapMarkers = filteredTrails.map((trail) => ({
    id: trail.id,
    latitude: 31.7683 + parseFloat(trail.id) * 0.5,
    longitude: 35.2137 + parseFloat(trail.id) * 0.3,
    difficulty: trail.difficulty,
    title: trail.title,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <PreferenceSelector
        difficulty={preferences.difficulty}
        duration={preferences.duration}
        activityType={preferences.activityType}
        onPreferenceChange={handlePreferenceChange}
      />

      <TrailMap
        center={{ lat: 31.7683, lng: 35.2137 }}
        zoom={8}
        markers={mapMarkers}
      />

      <TrailCardGrid trails={filteredTrails} />

      <div className="fixed bottom-6 right-6 flex flex-col gap-2">
        <Button
          size="lg"
          className="rounded-full shadow-lg"
          onClick={() => setShowEmergencyDialog(true)}
        >
          <AlertTriangle className="h-5 w-5 mr-2" />
          Emergency Info
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="rounded-full shadow-lg"
          onClick={() => {}}
        >
          <Filter className="h-5 w-5 mr-2" />
          Filter
        </Button>
      </div>

      <EmergencyInfoDialog
        open={showEmergencyDialog}
        onClose={() => setShowEmergencyDialog(false)}
      />
    </div>
  );
};

export default Home;

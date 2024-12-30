import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Clock, Users, Mountain, Map } from "lucide-react";

interface PreferenceSelectorProps {
  difficulty?: "easy" | "medium" | "hard";
  duration?: number;
  activityType?: "hiking" | "biking" | "family";
  onPreferenceChange?: (preferences: {
    difficulty: string;
    duration: number;
    activityType: string;
  }) => void;
}

const PreferenceSelector = ({
  difficulty = "medium",
  duration = 4,
  activityType = "hiking",
  onPreferenceChange = () => {},
}: PreferenceSelectorProps) => {
  const difficulties = ["easy", "medium", "hard"];
  const activities = ["hiking", "biking", "family"];

  return (
    <div className="w-full h-20 px-6 py-4 bg-white border-b shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-6">
        {/* Difficulty Selection */}
        <div className="flex items-center gap-2">
          <Mountain className="w-5 h-5 text-gray-500" />
          <div className="flex gap-1">
            {difficulties.map((d) => (
              <Button
                key={d}
                variant={difficulty === d ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  onPreferenceChange({
                    difficulty: d,
                    duration,
                    activityType,
                  })
                }
                className="capitalize"
              >
                {d}
              </Button>
            ))}
          </div>
        </div>

        {/* Duration Slider */}
        <div className="flex items-center gap-4 min-w-[200px]">
          <Clock className="w-5 h-5 text-gray-500" />
          <div className="flex-1">
            <Slider
              defaultValue={[duration]}
              max={8}
              min={2}
              step={0.5}
              onValueChange={([value]) =>
                onPreferenceChange({
                  difficulty,
                  duration: value,
                  activityType,
                })
              }
            />
          </div>
          <span className="text-sm text-gray-600 min-w-[60px]">
            {duration}h
          </span>
        </div>

        {/* Activity Type Selection */}
        <div className="flex items-center gap-2">
          {activityType === "hiking" && (
            <Map className="w-5 h-5 text-gray-500" />
          )}
          {activityType === "family" && (
            <Users className="w-5 h-5 text-gray-500" />
          )}
          {activityType === "biking" && (
            <svg
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="5.5" cy="17.5" r="3.5" />
              <circle cx="18.5" cy="17.5" r="3.5" />
              <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2" />
            </svg>
          )}
          <div className="flex gap-1">
            {activities.map((a) => (
              <Button
                key={a}
                variant={activityType === a ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  onPreferenceChange({
                    difficulty,
                    duration,
                    activityType: a,
                  })
                }
                className="capitalize"
              >
                {a}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferenceSelector;

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, MapPin } from "lucide-react";

interface EmergencyInfoDialogProps {
  open?: boolean;
  onClose?: () => void;
}

const EmergencyInfoDialog = ({
  open = true,
  onClose = () => {},
}: EmergencyInfoDialogProps) => {
  const emergencyContacts = [
    {
      name: "Emergency Services",
      number: "112",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      name: "Search and Rescue",
      number: "100",
      icon: <AlertTriangle className="h-5 w-5" />,
    },
    {
      name: "Park Rangers",
      number: "*3639",
      icon: <MapPin className="h-5 w-5" />,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-red-600 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6" />
            Emergency Information
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            If you need immediate assistance while on the trail, use the
            following emergency contacts:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 my-4">
          {emergencyContacts.map((contact) => (
            <div
              key={contact.number}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                {contact.icon}
                <div>
                  <h3 className="font-medium">{contact.name}</h3>
                  <p className="text-sm text-gray-500">{contact.number}</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => (window.location.href = `tel:${contact.number}`)}
              >
                <Phone className="h-4 w-4" />
                Call
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h4 className="font-medium text-yellow-800 mb-2">
            Important Safety Tips
          </h4>
          <ul className="text-sm text-yellow-700 space-y-1 list-disc pl-4">
            <li>Share your hiking plan with someone before starting</li>
            <li>Carry enough water and basic first aid supplies</li>
            <li>Check weather conditions before departing</li>
            <li>Stay on marked trails</li>
          </ul>
        </div>

        <DialogFooter className="mt-6">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EmergencyInfoDialog;

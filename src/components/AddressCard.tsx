import React from 'react';

interface AddressCardProps {
  id: number;
  label: string;
  latitude: number;
  longitude: number;
  onViewRisks: (id: number) => void;
}

const AddressCard: React.FC<AddressCardProps> = ({ id, label, latitude, longitude, onViewRisks }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="font-semibold text-lg">{label}</h3>
      <div className="text-sm text-gray-600 mt-2">
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
      </div>
      <button 
        onClick={() => onViewRisks(id)}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        View Risks
      </button>
    </div>
  );
};

export default AddressCard;
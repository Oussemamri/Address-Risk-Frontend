import React from 'react';

interface Risk {
  type: string;
  niveau: string;
}

interface RiskIndicatorProps {
  risks: Risk[];
}

const RiskIndicator: React.FC<RiskIndicatorProps> = ({ risks }) => {
  const getColor = (niveau: string) => {
    switch (niveau) {
      case 'Élevé':
        return 'bg-red-600';
      case 'Moyen':
        return 'bg-yellow-500';
      case 'Faible':
        return 'bg-green-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      {risks.map((risk, index) => (
        <div key={index} className={`p-4 rounded ${getColor(risk.niveau)}`}>
          <h3 className="font-bold">{risk.type}</h3>
          <p>{risk.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RiskIndicator;
import React from 'react';
import { Risk } from '../types';

interface RiskIndicatorProps {
  risks: Risk[];
}

const RiskIndicator: React.FC<RiskIndicatorProps> = ({ risks }) => {
  const getColor = (niveau: string) => {
    switch (niveau.toLowerCase()) {
      case 'élevé':
      case 'fort':
        return 'bg-red-100 border-l-4 border-red-500';
      case 'moyen':
        return 'bg-yellow-100 border-l-4 border-yellow-500';
      case 'faible':
      default:
        return 'bg-green-100 border-l-4 border-green-500';
    }
  };

  return (
    <div className="space-y-3">
      {risks.map((risk, index) => (
        <div key={index} className={`p-4 rounded ${getColor(risk.niveau)}`}>
          <h3 className="font-bold">{risk.type}</h3>
          <p className="text-sm">Niveau: {risk.niveau}</p>
          <p>{risk.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RiskIndicator;
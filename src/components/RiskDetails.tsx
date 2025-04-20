import React from 'react';
import { Risk } from '../types';

interface RiskDetailsProps {
  risks: Risk[];
}

const RiskDetails: React.FC<RiskDetailsProps> = ({ risks }) => {
  return (
    <div className="space-y-3">
      {risks.map((risk, index) => (
        <div 
          key={index} 
          className={`p-4 rounded mb-3 ${
            risk.niveau === 'Élevé' ? 'bg-red-100 border-red-500' :
            risk.niveau === 'Moyen' ? 'bg-yellow-100 border-yellow-500' :
            'bg-green-100 border-green-500'
          } border-l-4`}
        >
          <h3 className="font-bold">{risk.type}</h3>
          <p className="text-sm">Niveau: {risk.niveau}</p>
          <p>{risk.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RiskDetails;
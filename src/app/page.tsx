'use client';

import React, { useState } from 'react';
import AddressSearch from '../components/AddressSearch';
import AddressCard from '../components/AddressCard';
import RiskDetails from '../components/RiskDetails';
import SearchHistory from '../components/SearchHistory';
import { Address, RiskResponse } from '../types';
import { getAddressRisks } from '../services/api';
import { useAddressHistory } from '../hooks/useAddressHistory';
import dynamic from 'next/dynamic';

// Dynamically import Map component with no SSR to avoid window is not defined errors
const MapWithNoSSR = dynamic(
  () => import('../components/Map'),
  { ssr: false }
);

export default function HomePage() {
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [riskData, setRiskData] = useState<RiskResponse | null>(null);
  const [showRiskDetails, setShowRiskDetails] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { addToHistory } = useAddressHistory();

  const handleAddressFound = (address: Address) => {
    setSelectedAddress(address);
    addToHistory(address);
    setShowRiskDetails(false);
  };

  const handleSelectFromHistory = (address: Address) => {
    setSelectedAddress(address);
    setShowRiskDetails(false);
  };

  const handleViewRisks = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAddressRisks(id);
      setRiskData(data);
      setShowRiskDetails(true);
    } catch (err) {
      setError('Failed to fetch risk data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Address Risk Checker</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="mb-6">
            <AddressSearch onAddressFound={handleAddressFound} setError={setError} />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          {selectedAddress && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Selected Address</h2>
              <AddressCard 
                id={selectedAddress.id}
                label={selectedAddress.label}
                latitude={selectedAddress.latitude}
                longitude={selectedAddress.longitude}
                onViewRisks={handleViewRisks}
              />
            </div>
          )}

          {loading && <p className="text-gray-600">Loading risk data...</p>}

          {showRiskDetails && riskData && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Risk Information</h2>
              {riskData.data.commune.risques.map((risk, index) => (
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
          )}
        </div>

        <div>
          <SearchHistory onSelectAddress={handleSelectFromHistory} />
          
          {selectedAddress && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Location</h2>
              <div className="h-64 border rounded overflow-hidden">
                <MapWithNoSSR 
                  latitude={selectedAddress.latitude} 
                  longitude={selectedAddress.longitude}
                  address={selectedAddress.label}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
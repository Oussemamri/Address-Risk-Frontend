import React from 'react';
import { Address } from '../types';

interface SearchHistoryProps {
  history: Address[];
  onSelectAddress: (address: Address) => void;
  onRemoveAddress: (id: number) => void;
  onClearHistory: () => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ 
  history, 
  onSelectAddress, 
  onRemoveAddress, 
  onClearHistory 
}) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Search History</h2>
      {history.length === 0 ? (
        <p>No search history available.</p>
      ) : (
        <ul className="space-y-2">
          {history.map((address) => (
            <li key={address.id} className="flex items-center justify-between p-2 border rounded hover:bg-gray-50">
              <div 
                className="flex-1 cursor-pointer" 
                onClick={() => onSelectAddress(address)}
              >
                <span className="block font-medium truncate">{address.label}</span>
                <span className="block text-xs text-gray-500 truncate">
                  {address.housenumber}, {address.street}, {address.postcode}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveAddress(address.id);
                }}
                className="ml-2 p-1 text-gray-500 hover:text-red-600"
                title="Remove from history"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
      {history.length > 0 && (
        <button
          onClick={onClearHistory}
          className="mt-3 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
        >
          Clear All History
        </button>
      )}
    </div>
  );
};

export default SearchHistory;
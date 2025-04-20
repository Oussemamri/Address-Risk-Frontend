import React from 'react';
import { useAddressHistory } from '../hooks/useAddressHistory';

const SearchHistory: React.FC = () => {
    const { history, clearHistory } = useAddressHistory();

    return (
        <div className="mt-4">
            <h2 className="text-lg font-semibold">Search History</h2>
            {history.length === 0 ? (
                <p>No search history available.</p>
            ) : (
                <ul className="list-disc pl-5">
                    {history.map((address, index) => (
                        <li key={index} className="py-1">
                            {address.label} - {address.housenumber}, {address.street}, {address.postcode}, {address.citycode}
                        </li>
                    ))}
                </ul>
            )}
            {history.length > 0 && (
                <button
                    onClick={clearHistory}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Clear History
                </button>
            )}
        </div>
    );
};

export default SearchHistory;
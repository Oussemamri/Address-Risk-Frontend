import { useState, useEffect } from 'react';
import { Address } from '../types';

export const useAddressHistory = () => {
  const [history, setHistory] = useState<Address[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('addressHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Failed to parse address history:', error);
        localStorage.removeItem('addressHistory');
      }
    }
  }, []);

  // Save to localStorage whenever history changes
  useEffect(() => {
    localStorage.setItem('addressHistory', JSON.stringify(history));
  }, [history]);

  const addToHistory = (address: Address) => {
    // Check if address already exists in history to avoid duplicates
    if (!history.some(item => item.id === address.id)) {
      setHistory(prevHistory => [address, ...prevHistory].slice(0, 10)); // Keep only last 10 searches
    }
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('addressHistory');
  };

  return { history, addToHistory, clearHistory };
};

export default useAddressHistory;
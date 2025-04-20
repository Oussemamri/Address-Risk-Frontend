import { Address, RiskResponse } from '../types';

const API_BASE_URL = 'https://63.178.19.158.nip.io/api';

export const searchAddress = async (query: string): Promise<Address> => {
  try {
    const response = await fetch(`${API_BASE_URL}/addresses/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ q: query }),
    });

    if (!response.ok) {
      throw new Error(`Error searching address: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to search address:', error);
    throw error;
  }
};

export const getAddressRisks = async (addressId: number): Promise<RiskResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/addresses/${addressId}/risks/`);

    if (!response.ok) {
      throw new Error(`Error fetching risks: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch risk data:', error);
    throw error;
  }
};
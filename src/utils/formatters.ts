export const formatRiskLevel = (level: string): string => {
    switch (level) {
        case 'Élevé':
            return 'bg-red-500 text-white';
        case 'Moyen':
            return 'bg-yellow-500 text-black';
        case 'Faible':
            return 'bg-green-500 text-white';
        default:
            return 'bg-gray-300 text-black';
    }
};

export const formatAddress = (address: { label: string; housenumber: string; street: string; postcode: string; }): string => {
    return `${address.housenumber} ${address.street}, ${address.postcode}`;
};
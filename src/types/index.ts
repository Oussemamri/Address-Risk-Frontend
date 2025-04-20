export interface Address {
  id: number;
  label: string;
  housenumber: string;
  street: string;
  postcode: string;
  citycode: string;
  latitude: number;
  longitude: number;
}

export interface Risk {
  type: string;
  niveau: string;
  description: string;
}

export interface RiskData {
  commune: {
    code_insee: string;
    nom: string;
    risques: Risk[];
  };
  adresse: {
    latitude: number;
    longitude: number;
    adresse: string;
  };
}

export interface RiskResponse {
  code: string;
  data: RiskData;
}
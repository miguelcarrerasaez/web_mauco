export interface Metric {
  id: string;
  value: string;
  label: string;
  icon?: string; 
  note?: string; 
}

export interface MeasurementCategory {
  id: string;
  title: string;
  description: string;
  tags: string[]; 
}

export type TeamCategory = 
  | 'Dirección y liderazgo científico' 
  | 'Investigadores' 
  | 'Coordinación y equipo profesional' 
  | 'Colaboradores';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: TeamCategory;
  institution: string;
  researchArea?: string;
  orcid?: string;
  imageUrl?: string; 
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  pubmedId?: string;
  url?: string;
  researchAreas: string[];
}

export interface AccessStep {
  stepNumber: string; 
  title: string;
  description: string;
}
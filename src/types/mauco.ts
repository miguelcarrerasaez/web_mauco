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
  | 'Data management'
  | 'Equipo de terreno'
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

export type SubstudyStatus = 'En curso' | 'Completado';

export interface Substudy {
  id: string;
  title: string;
  principalInvestigator: string;
  objective: string;
  date: string;
  status: SubstudyStatus;
}

export interface NewsEvent {
  id: string;
  type: 'news' | 'event';
  title: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  link?: string;
}

export interface StudySection {
  id: string;
  title: string;
  content: string[];
}

export interface StudyInfo {
  metodologia: StudySection[];
  poblacion: StudySection[];
  objetivos: StudySection[];
}
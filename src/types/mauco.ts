// src/types/mauco.ts

// 1. Estado de Vistas para la Navegación (Hub Dual)
export type ActiveView = 
  | 'home' 
  | 'investigadores' 
  | 'participantes' 
  | 'publicaciones' 
  | 'subestudios' 
  | 'contacto';

// 2. Subestudios de Investigación Anidados
export type SubstudyStatus = 'En curso' | 'Completado';

export interface Substudy {
  id: string;
  title: string;
  principalInvestigator: string;
  objective: string;
  date: string;
  status: SubstudyStatus;
}

// 3. Publicaciones Científicas
export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  area: string;
  doi?: string;
  pdfUrl?: string;
  researchArea?: string;
}

// 4. Noticias y Eventos
export interface NewsEvent {
  id: string;
  type: 'news' | 'event';
  title: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  link?: string;
  category?: string;
}

// 5. Equipo de Investigación y Jerarquías
export type TeamCategory = 
  | 'Dirección' 
  | 'Investigadores' 
  | 'Coordinación' 
  | 'Data management' 
  | 'Equipo de terreno' 
  | 'Colaboradores';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: TeamCategory;
  imageUrl?: string;
  institution?: string;
}

// 6. Métricas de Cohorte y Biobanco
export interface Metric {
  id?: string;
  label: string;
  value: string;
  description?: string;
  iconName?: string;
}

// 7. Mediciones y Categorías ("¿Qué medimos?")
export interface MeasurementCategory {
  id: string;
  title: string;
  description: string;
  tags: string[];
  iconName?: string;
}

// 8. Pasos de Solicitud y Acceso a Datos (REDCap Flow)
export interface AccessStep {
  step: number;
  title: string;
  description: string;
}

// 9. Información del Estudio (FAQ y Metodología)
export interface StudySection {
  id: string;
  title: string;
  content: string;
}

export interface StudyInfo {
  methodology: StudySection[];
  population: StudySection[];
  objectives: StudySection[];
}
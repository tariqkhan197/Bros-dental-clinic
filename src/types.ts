export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  duration: string;
  benefits: string[];
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  arabicName: string;
  title: string;
  arabicTitle: string;
  specialty: string;
  experienceYears: string;
  qualifications: string[];
  image: string;
  availableDays: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'equipment' | 'treatment' | 'results';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'treatments';
}

export interface AppointmentData {
  serviceId: string;
  doctorId?: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
  isFirstVisit: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

import { ServiceItem, Doctor, GalleryItem, Testimonial, FAQItem } from '../types';

import brosLogo from '../assets/images/bros_logo_1785466577786.jpg';
import heroDentalRoom from '../assets/images/hero_dental_room_1785466595221.jpg';
import smilingPatient from '../assets/images/smiling_patient_1785466615010.jpg';
import dentistConsultation from '../assets/images/dentist_consultation_1785466652542.jpg';
import dentalTechEquipment from '../assets/images/dental_tech_equipment_1785466668381.jpg';
import smileTransformation from '../assets/images/smile_transformation_1785466727050.jpg';

// Newly added real images generated for BROS Dental Clinic
import brosBuildingExterior from '../assets/images/bros_building_exterior_1785469488085.jpg';
import clinicMicroscopeRoom from '../assets/images/clinic_microscope_room_1785469508579.jpg';
import clinicSterilizationLab from '../assets/images/clinic_sterilization_lab_1785469530390.jpg';
import doctorExaminingPatient from '../assets/images/doctor_examining_patient_1785469555337.jpg';

// Doctor Portraits
import drKhaledSalem from '../assets/images/dr_khaled_salem_1785469577590.jpg';
import drOmniaHasaballah from '../assets/images/dr_omnia_hasaballah_1785469597861.jpg';
import drSouzanHamra from '../assets/images/dr_souzan_hamra_1785469618180.jpg';
import drMohammadNas from '../assets/images/dr_mohammad_nas_1785469639471.jpg';
import drBasharSalem from '../assets/images/dr_bashar_salem_1785469658102.jpg';

export const CLINIC_IMAGES = {
  logo: brosLogo,
  building: brosBuildingExterior,
  heroRoom: clinicMicroscopeRoom,
  patientSmiling: smilingPatient,
  reception: clinicMicroscopeRoom,
  consultation: doctorExaminingPatient,
  equipment: dentalTechEquipment,
  sterilization: clinicSterilizationLab,
  smileTransformation: smileTransformation,
};

export const CLINIC_INFO = {
  name: 'BROS DENTAL CLINIC',
  arabicName: 'مجمع عيادات بروز لطب الأسنان',
  tagline: 'Premier Dental Care & Modern Aesthetics',
  phone: '011 455 7028',
  phoneDirect: '+966114557028',
  emergencyPhone: '011 455 7028',
  email: 'care@brosdentalclinic.com',
  address: 'Olaya St, Al Wurud, Riyadh 12251, Saudi Arabia',
  social: {
    instagram: '@Brosdentalclinic',
    facebook: '@Bros Clinics',
    twitter: '@Brosdentclinics',
  },
  workingHours: [
    { days: 'Saturday - Thursday', hours: '9:00 AM - 9:00 PM' },
    { days: 'Friday', hours: 'Emergency & Priority Appointments' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'general-preventive',
    title: 'General dentistry and preventive care',
    category: 'General Care',
    shortDesc: 'Comprehensive oral health checkups, professional cleanings, scaling, and preventive dental care.',
    fullDesc: 'Our general dentistry and preventive care services focus on maintaining optimal oral hygiene, early diagnosis, routine cleanings, scaling, fluoride treatments, and personal care plans.',
    iconName: 'ShieldCheck',
    duration: '30 - 45 mins',
    benefits: ['Comprehensive Dental Checkup', 'Professional Scaling & Polishing', 'Preventive Fluoride Therapy', 'Early Cavity Prevention'],
    image: CLINIC_IMAGES.patientSmiling,
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic dentistry, such as veneers, teeth whitening, and smile makeovers',
    category: 'Cosmetic',
    shortDesc: 'Porcelain veneers, laser teeth whitening, and custom digital smile transformations.',
    fullDesc: 'Transform your smile aesthetics with custom hand-crafted porcelain veneers, gentle laser teeth whitening, and comprehensive digital smile design tailored to your facial features.',
    iconName: 'Sparkles',
    duration: '45 - 60 mins',
    benefits: ['Porcelain Veneers', 'Laser Teeth Whitening', 'Full Smile Makeovers', 'Stain-Resistant Enamel Coating'],
    image: CLINIC_IMAGES.smileTransformation,
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics, including braces and aligners',
    category: 'Orthodontics',
    shortDesc: 'Discreet clear aligners and modern braces for teeth alignment and bite correction.',
    fullDesc: 'Straighten your teeth comfortably with advanced 3D intraoral digital planning. Choose between completely transparent clear aligners or aesthetic precision braces.',
    iconName: 'Smile',
    duration: 'Monthly Progress Checks',
    benefits: ['3D Digital Impression Simulation', 'Invisible Clear Aligners', 'Modern Aesthetic Braces', 'Bite & Structural Alignment'],
    image: CLINIC_IMAGES.consultation,
  },
  {
    id: 'dental-implants',
    title: 'Dental implants',
    category: 'Implants',
    shortDesc: 'Permanent, natural-feeling tooth replacement using 3D guided technology.',
    fullDesc: 'Replace lost or damaged teeth permanently with high-precision computer-guided dental implants, restoring full chewing function and natural smile appearance.',
    iconName: 'Shield',
    duration: '45 - 60 mins',
    benefits: ['3D Guided Precision Placement', 'Permanent Titanium Root', 'Natural Tooth Aesthetics', 'Single & Full Arch Restorations'],
    image: CLINIC_IMAGES.equipment,
  },
  {
    id: 'periodontal-treatments',
    title: 'Periodontal (gum) treatments',
    category: 'Periodontics',
    shortDesc: 'Deep scaling, root planing, and comprehensive care for healthy, pain-free gums.',
    fullDesc: 'Protect your teeth and gums with targeted periodontal therapy, deep scaling, root planing, laser gum treatment, and long-term periodontal health monitoring.',
    iconName: 'Activity',
    duration: '45 mins',
    benefits: ['Deep Gum Scaling & Root Planing', 'Bleeding Gum Care', 'Laser Periodontal Therapy', 'Preventive Gum Protection'],
    image: CLINIC_IMAGES.heroRoom,
  },
  {
    id: 'restorative-procedures',
    title: 'Root canal therapy, crowns, bridges, dentures, and other restorative procedures',
    category: 'Restorative',
    shortDesc: 'Painless root canal treatments, porcelain crowns, bridges, full dentures, and restorative dentistry.',
    fullDesc: 'Eliminate dental pain and restore damaged or missing teeth with gentle root canal therapy, durable porcelain crowns, fixed bridges, full or partial dentures, and restorative care.',
    iconName: 'Zap',
    duration: '60 mins',
    benefits: ['Painless Root Canal Therapy', 'High-Strength Porcelain Crowns', 'Dental Bridges & Dentures', 'Full Oral Restoration'],
    image: CLINIC_IMAGES.heroRoom,
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-khaled-salem',
    name: 'Dr. Khaled Salem',
    arabicName: 'الدكتور: خالد سالم',
    title: 'Endodontics & Dental Implants Specialist',
    arabicTitle: 'أخصائي في المداواة اللبية وزراعة الأسنان',
    specialty: 'Dental Implants & Endodontics',
    experienceYears: '23+ Years Experience',
    qualifications: [
      'أخصائي في زراعة الأسنان (ترخيص إضافي) - Dental Implants Specialist (Additional License)',
      'ماجستير في علوم طب الأسنان - Master of Dental Sciences',
      'خبرة أكثر من 23 عام في طب الأسنان - Over 23 Years Clinical Experience',
    ],
    image: drKhaledSalem,
    availableDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
  },
  {
    id: 'dr-omnia-hasaballah',
    name: 'Dr. Omnia Hasaballah',
    arabicName: 'الدكتورة / أمنية حسب الله',
    title: 'General Dentist & Cosmetic Specialist',
    arabicTitle: 'طبيب أسنان عام',
    specialty: 'General & Cosmetic Dentistry',
    experienceYears: '8+ Years Experience',
    qualifications: [
      'بكالوريوس في طب وجراحة الفم والأسنان - Bachelor of Oral & Dental Surgery',
      'دبلوم استعاضة وتجميل الأسنان من جامعة جنوه الإيطالية - Diploma in Prosthodontics & Cosmetic Dentistry, University of Genoa (Italy)',
      'خبرة أكثر من 8 عام - Over 8 Years Clinical Experience',
    ],
    image: drOmniaHasaballah,
    availableDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
  },
  {
    id: 'dr-souzan-hamra',
    name: 'Dr. Souzan Hamra',
    arabicName: 'الدكتور : سوزان حمرا',
    title: 'General & Oral Surgery Specialist',
    arabicTitle: 'طبيب أسنان عام',
    specialty: 'Oral Surgery & General Dentistry',
    experienceYears: '23+ Years Experience',
    qualifications: [
      'بكالوريوس في طب وجراحة الفم والأسنان - Bachelor of Oral & Dental Surgery',
      'خبرة أكثر من 23 عام في جراحة الفم والأسنان - Over 23 Years Experience in Oral & Dental Surgery',
    ],
    image: drSouzanHamra,
    availableDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
  },
  {
    id: 'dr-mohammad-kull-al-nas',
    name: 'Dr. Mohammad Kull Al Nas',
    arabicName: 'الدكتور / محمد كل الناس',
    title: 'Orthodontic & Dentofacial Specialist',
    arabicTitle: 'أخصائي تقويم الأسنان والوجه والفكين',
    specialty: 'Orthodontics & Jaw Alignment',
    experienceYears: '25+ Years Experience',
    qualifications: [
      'ماجستير في تقويم الأسنان والوجه والفكين - Master\'s in Orthodontics & Dentofacial Orthopedics',
      'خبرة أكثر من 25 سنة - Over 25 Years Experience in Orthodontic Alignment',
    ],
    image: drMohammadNas,
    availableDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
  },
  {
    id: 'dr-bashar-salem',
    name: 'Dr. Bashar Salem',
    arabicName: 'الدكتور / بشار سالم',
    title: 'Prosthodontics & Aesthetic Restorations Specialist',
    arabicTitle: 'اخصائي في طب الأسنان التعويضي',
    specialty: 'Fixed Prosthodontics & Veneers',
    experienceYears: '20+ Years Experience',
    qualifications: [
      'أخصائي تركيبات وتجميل الأسنان - Specialist in Fixed Prosthetics & Cosmetic Restorations',
      'نائب في الاستعاضة السنية الثابتة - Associate in Fixed Prosthodontics',
      'خبرة أكثر من 20 سنة في مجال تركيبات الأسنان الثابتة وتجميل الأسنان - Over 20 Years Experience in Prosthetics & Smile Aesthetics',
    ],
    image: drBasharSalem,
    availableDays: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'BROS Dental Clinic Exterior',
    category: 'interior',
    image: CLINIC_IMAGES.building,
    description: 'Our modern clinic facility on Olaya St, Al Wurud, Riyadh, Saudi Arabia.',
  },
  {
    id: 'g2',
    title: 'Microscope Operating Suite',
    category: 'equipment',
    image: CLINIC_IMAGES.heroRoom,
    description: 'High-precision dental suite equipped with operating microscope and 3D digital imaging.',
  },
  {
    id: 'g3',
    title: 'Sterilization & Instrument Facility',
    category: 'equipment',
    image: CLINIC_IMAGES.sterilization,
    description: 'Hospital-grade autoclaves and sterile packaging for patient safety.',
  },
  {
    id: 'g4',
    title: 'Specialist Clinical Examination',
    category: 'treatment',
    image: CLINIC_IMAGES.consultation,
    description: 'Our specialists conducting a gentle patient checkup under high-resolution illumination.',
  },
  {
    id: 'g5',
    title: '3D Digital Scanner Unit',
    category: 'equipment',
    image: CLINIC_IMAGES.equipment,
    description: 'Precision digital intraoral scanner for instant comfortable 3D teeth impressions.',
  },
  {
    id: 'g6',
    title: 'Aesthetic Smile Transformation Outcome',
    category: 'results',
    image: CLINIC_IMAGES.smileTransformation,
    description: 'Natural aesthetic porcelain veneer smile transformation created by our specialists.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Fahad Al-Qahtani',
    treatment: 'Dental Implants with Dr. Khaled Salem',
    rating: 5,
    comment: 'Dr. Khaled Salem is an exceptional specialist. The dental implant procedure was completely painless and smooth. BROS Dental Clinic is truly world class.',
    image: CLINIC_IMAGES.patientSmiling,
    date: '2 weeks ago',
    verified: true,
  },
  {
    id: 't2',
    name: 'Sarah Al-Mansoor',
    treatment: 'Orthodontics with Dr. Mohammad Kull Al Nas',
    rating: 5,
    comment: 'Dr. Mohammad Kull Al Nas explained every step of my orthodontic treatment clearly. The results with clear aligners exceeded my expectations!',
    image: CLINIC_IMAGES.smileTransformation,
    date: '1 month ago',
    verified: true,
  },
  {
    id: 't3',
    name: 'Noura Al-Otaibi',
    treatment: 'Cosmetic Dentistry with Dr. Omnia Hasaballah',
    rating: 5,
    comment: 'Dr. Omnia Hasaballah gave me the smile of my dreams! Her diploma from Italy shows in her attention to detail and natural aesthetic touch.',
    image: CLINIC_IMAGES.patientSmiling,
    date: '3 weeks ago',
    verified: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are dental treatments at BROS Dental Clinic painless?',
    answer: 'Yes! We use gentle computerized local numbing technology, surface anesthesia, and laser-assisted procedures so that every treatment is completely comfortable and stress-free.',
    category: 'general',
  },
  {
    id: 'faq-2',
    question: 'How do I book an immediate or same-day appointment?',
    answer: 'You can use our online appointment form on this website to select your preferred doctor, date, and time slot, or call our direct line at 011 455 7028 for priority scheduling.',
    category: 'booking',
  },
  {
    id: 'faq-3',
    question: 'What services are offered at BROS Dental Clinic?',
    answer: 'Our clinic offers general dentistry & preventive care, cosmetic dentistry (veneers, teeth whitening, smile makeovers), orthodontics (braces & clear aligners), dental implants, periodontal gum treatments, and root canal therapy with restorative crowns, bridges, and dentures.',
    category: 'treatments',
  },
  {
    id: 'faq-4',
    question: 'Where is the clinic located in Riyadh?',
    answer: 'We are located at Olaya St, Al Wurud, Riyadh 12251, Saudi Arabia. Convenient parking and walk-in priority booking are available.',
    category: 'general',
  },
];

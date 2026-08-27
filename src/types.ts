export interface ServiceItem {
  id: string;
  title: string;
  category: 'ac' | 'heating' | 'maintenance' | 'iaq';
  shortDesc: string;
  fullDesc: string;
  image: string;
  priceFrom: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface CouponItem {
  id: string;
  code: string;
  tag: string;
  title: string;
  description: string;
  originalPrice?: string;
  promoPrice: string;
  serviceType: string;
  badgeColor?: string;
}

export interface TroubleshootingStep {
  id: string;
  question: string;
  type: 'select' | 'options';
  options: {
    label: string;
    value: string;
    subtext?: string;
  }[];
}

export interface DiagnosticResult {
  title: string;
  severity: 'low' | 'medium' | 'high' | 'emergency';
  possibleCause: string;
  recommendedAction: string;
  estimatedCost: string;
  promoCode: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredDate?: string;
  preferredTime?: string;
  promoCode: string;
  notes?: string;
  address?: string;
}

export interface HVACServicePill {
  title: string;
  badge: string;
  desc: string;
  actionCode: string;
}

export interface SectionContent {
  id: string;
  phaseNumber: string;
  phaseName: string;
  subtitle: string;
  headline: string;
  description: string;
  accentColor: string;
  badge?: string;
  features?: string[];
  servicePills?: HVACServicePill[];
  primaryCta?: {
    label: string;
    action: string;
    promoCode?: string;
  };
  secondaryCta?: {
    label: string;
    action: string;
  };
}

export interface BrandConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  location: string;
  status: string;
  rating: string;
  reviewsCount: string;
}

export interface SiteContentResponse {
  brand: BrandConfig;
  sections: SectionContent[];
}

export interface ClimateTelemetryMetrics {
  temperature: string;
  airPurity: string;
  relativeHumidity: string;
  staticPressureInWg: string;
  activeCycle: string;
}

export interface ClimateTelemetryResponse {
  timestamp: string;
  progress: number;
  phase: string;
  state: string;
  metrics: ClimateTelemetryMetrics;
}

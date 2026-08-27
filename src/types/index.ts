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

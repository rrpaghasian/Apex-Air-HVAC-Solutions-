import { useState, useEffect } from 'react';
import { SiteContentResponse, ClimateTelemetryResponse } from '../types';

const DEFAULT_CONTENT: SiteContentResponse = {
  brand: {
    name: 'Apex Air Solutions',
    tagline: 'Heating & Air Conditioning Specialists',
    phone: '(770) 967-7910',
    phoneRaw: '7709677910',
    location: 'Buford, GA & North Atlanta',
    status: 'ON-DUTY DISPATCH ACTIVE • AVG RESPONSE: 45 MIN',
    rating: '4.9 ★',
    reviewsCount: '380+ Verified Reviews'
  },
  sections: [
    {
      id: 'phase-1',
      phaseNumber: '01',
      phaseName: 'Phase I : Thermal Induction',
      subtitle: 'Precision Climate Architecture',
      headline: 'Apex Air Solutions',
      description: 'Fast, same-day HVAC repair, precision seasonal tune-ups, and high-efficiency system replacements with 100% upfront pricing.',
      accentColor: 'neutral-300',
      badge: "Buford & Hall County's #1 Rated HVAC Team",
      features: [
        'Same-Day Local Dispatch',
        '100% Upfront Pricing',
        'EPA & NATE-Certified Techs',
        '1-Yr Workmanship Warranty'
      ],
      primaryCta: {
        label: 'Get Started • Claim $25 Off',
        action: 'open-booking',
        promoCode: 'REBATE25'
      },
      secondaryCta: {
        label: 'Call 24/7 Dispatch',
        action: 'call'
      }
    },
    {
      id: 'phase-2',
      phaseNumber: '02',
      phaseName: 'Phase II : Engineered Airflow',
      subtitle: 'Residential & Commercial Climate Systems',
      headline: 'Engineered Airflow',
      description: 'From emergency compressor diagnostics to SEER2 inverter heat pump installations, our trucks carry 95% of universal parts for immediate resolution.',
      accentColor: 'cyan-300',
      badge: 'Universal Parts Stocked • 95% First-Visit Fix',
      servicePills: [
        {
          title: 'AC & Heat Repair',
          badge: '$79 Diagnostic',
          desc: 'Capacitors, contactors, refrigerant leaks & fan motors fixed fast.',
          actionCode: 'repair'
        },
        {
          title: 'SEER2 Upgrades',
          badge: 'Up to $500 Rebate',
          desc: 'High-efficiency heat pumps saving up to 30% on electric bills.',
          actionCode: 'install'
        },
        {
          title: 'Comfort Club Tune-Up',
          badge: '$19/mo VIP Plan',
          desc: '21-point seasonal inspection & priority 24/7 dispatch status.',
          actionCode: 'maintenance'
        },
        {
          title: 'UV-C Air Sanitizing',
          badge: 'HEPA & Duct Seal',
          desc: 'Eliminate airborne allergens, dust, and hot/cold air spots.',
          actionCode: 'iaq'
        }
      ],
      primaryCta: {
        label: 'Diagnose AC / Heating Issue',
        action: 'open-troubleshooter',
        promoCode: 'DIAG79'
      },
      secondaryCta: {
        label: 'Calculate SEER2 Savings',
        action: 'open-seer'
      }
    },
    {
      id: 'phase-3',
      phaseNumber: '03',
      phaseName: 'Phase III : Total Equilibrium',
      subtitle: '100% Fixed-Right Guarantee',
      headline: 'Ready for Total Comfort?',
      description: 'Schedule your appointment online in under 60 seconds with instant technician dispatch notification and real-time SMS tracking.',
      accentColor: 'orange-300',
      badge: 'Fixed Right Guarantee • 0% Financing Available',
      features: [
        'No Overtime Weekend Charges',
        'Digital Diagnostic Report Sent Direct to Phone',
        'Licensed GA HVAC Master #HVAC-98231',
        'Instant Calendar Slot Confirmation'
      ],
      primaryCta: {
        label: 'Get Started & Book Online →',
        action: 'open-booking',
        promoCode: 'ONLINE25'
      },
      secondaryCta: {
        label: 'Export GHL Funnel Code',
        action: 'open-ghl'
      }
    }
  ]
};

export function useServerTelemetry(scrollProgress: number) {
  const [content, setContent] = useState<SiteContentResponse>(DEFAULT_CONTENT);
  const [telemetry, setTelemetry] = useState<ClimateTelemetryResponse>({
    timestamp: new Date().toISOString(),
    progress: 0,
    phase: '01',
    state: 'Phase I : Thermal Induction',
    metrics: {
      temperature: '74.0°F',
      airPurity: '97.5%',
      relativeHumidity: '48%',
      staticPressureInWg: '0.42 in. w.g.',
      activeCycle: 'Cooling Stage 2'
    }
  });

  useEffect(() => {
    fetch('/api/content')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.sections) {
          setContent(data);
        }
      })
      .catch(() => {
        // Fallback to default
      });
  }, []);

  useEffect(() => {
    const normalized = Math.min(Math.max(scrollProgress, 0), 1);
    const temp = (74.0 - normalized * 4.2).toFixed(1);
    const airflow = (97.5 + normalized * 2.4).toFixed(1);
    const humidity = (48.0 - normalized * 6.5).toFixed(0);
    const staticPressure = (0.42 + normalized * 0.08).toFixed(2);

    let phase = '01';
    let state = 'Phase I : Thermal Induction';

    if (normalized >= 0.67) {
      phase = '03';
      state = 'Phase III : Total Equilibrium';
    } else if (normalized >= 0.33) {
      phase = '02';
      state = 'Phase II : Engineered Airflow';
    }

    setTelemetry({
      timestamp: new Date().toISOString(),
      progress: normalized,
      phase,
      state,
      metrics: {
        temperature: `${temp}°F`,
        airPurity: `${airflow}%`,
        relativeHumidity: `${humidity}%`,
        staticPressureInWg: `${staticPressure} in. w.g.`,
        activeCycle: normalized < 0.5 ? 'Cooling Stage 2' : 'Modulating Inverter VAV'
      }
    });
  }, [scrollProgress]);

  return { content, telemetry };
}

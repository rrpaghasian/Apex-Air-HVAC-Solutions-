import { ServiceItem, Testimonial, CouponItem, DiagnosticResult } from '../types';

export const COMPANY_INFO = {
  name: "Apex Air Solutions",
  brandSubtitle: "Heating & Air Conditioning Specialists",
  phone: "(770) 967-7910",
  phoneRaw: "7709677910",
  emergencyPhone: "(555) 019-2834",
  email: "dispatch@apexair.com",
  location: "Buford GA Location",
  address: "7035 Evergreen Way, Buford, GA 30518",
  hours: "Open 24/7 for Emergency Dispatches",
  serviceAreas: ["Buford", "Flowery Branch", "Gainesville", "Sugar Hill", "Suwanee", "Cumming", "Braselton"],
  license: "GA HVAC Master Lic #HVAC-98231",
  rating: "4.9 / 5.0",
  reviewsCount: "380+ Verified Reviews",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ac-installation',
    title: 'AC Installation',
    category: 'ac',
    shortDesc: 'A home air conditioning system is one of the most important investments you can make. Not only will a quality cooling system keep you comfortable in the hottest temperatures...',
    fullDesc: 'A home air conditioning system is one of the most important investments you can make. Not only will a quality cooling system keep you comfortable in the hottest temperatures, but the right unit can save you money through proper calibration and high-efficiency SEER2 ratings. With every new air conditioning system, our certified technicians perform precision load calculations to guarantee flawless performance and manufacturer warranty compliance.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    priceFrom: '$500 OFF Install',
    highlights: ['Free in-home energy audit', 'Load calculation included', 'Up to 10-year parts warranty', '0% APR financing available']
  },
  {
    id: 'ac-repair',
    title: 'AC Repair',
    category: 'ac',
    shortDesc: "It's easy to take your air conditioning for granted — even on the hottest summer days, you expect it to work at peak performance while you go about your day to day business...",
    fullDesc: "It's easy to take your air conditioning for granted — even on the hottest summer days, you expect it to work at peak performance while you go about your day. For most people, it's only when they encounter a problem or the unit stops cooling that they seek emergency service. Our fully stocked service vans arrive with universal capacitors, fan motors, contactors, and refrigerants to solve 95% of issues in a single visit.",
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    priceFrom: '$79 Diagnostic',
    highlights: ['Same-day emergency dispatch', 'Fixed-right guarantee', 'All makes and models serviced', 'Zero hidden overtime charges']
  },
  {
    id: 'ac-maintenance',
    title: 'AC Maintenance',
    category: 'maintenance',
    shortDesc: 'While every home is different, a quality cooling system is the key to comfort throughout the long, hot summers. Regular maintenance plans ensure you stay cool when temperatures rise...',
    fullDesc: 'While every home is different, a quality cooling system is the key to comfort throughout the long, hot summers. At Apex Air Solutions, our preventive maintenance plans ensure your equipment operates at peak electrical efficiency, prevents 85% of unexpected summer breakdowns, cleans condenser coils, and maximizes internal airflow throughout your ductwork.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    priceFrom: '$99 Tune-Up',
    highlights: ['21-point safety inspection', 'Refrigerant pressure checks', 'Condensate drain flush', 'Blower motor lubrication']
  },
  {
    id: 'heating-repair',
    title: 'Heating & Furnace Repair',
    category: 'heating',
    shortDesc: 'Keep your family warm and safe during freezing winter snaps. We repair heat pumps, gas furnaces, and electrical heating elements with rapid dispatch.',
    fullDesc: 'When cold winter fronts roll in, a failing furnace or heat pump can put your home at risk of frozen pipes and dangerous drops in temperature. Our NATE-certified heating specialists inspect heat exchangers for carbon monoxide safety, test electronic ignition controls, and calibrate heating sequences for smooth operation.',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80',
    priceFrom: '$25 OFF Service',
    highlights: ['Heat exchanger safety tests', 'Ignitor & thermocouple repair', 'Emergency winter heating', 'Heat pump reversing valves']
  },
  {
    id: 'ductwork-iaq',
    title: 'Air Quality & Duct Sealing',
    category: 'iaq',
    shortDesc: 'Eliminate airborne allergens, dust, and hot/cold spots with professional duct sealing, UV purification, and high-efficiency filtration systems.',
    fullDesc: 'Indoor air can be 2 to 5 times more polluted than outdoor air. Our air quality team installs whole-house HEPA filtration, UV-C germicidal lamps, and performs duct static pressure testing to eliminate leaks that waste up to 30% of your conditioned air.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    priceFrom: '$149 Sanitize',
    highlights: ['Static pressure testing', 'UV-C air sanitizers', 'Allergen reduction', 'Duct leak sealing']
  }
];

export const MAINTENANCE_BENEFITS = [
  { text: 'Saves money on monthly utility bills', icon: 'DollarSign' },
  { text: 'Helps maximize whole-house airflow', icon: 'Wind' },
  { text: 'Safer operation with carbon monoxide checks', icon: 'ShieldCheck' },
  { text: 'System runs significantly more efficient', icon: 'Gauge' },
  { text: 'Helps prevent costly emergency breakdowns', icon: 'AlertTriangle' },
  { text: 'Filter changes & air intake sanitation', icon: 'RefreshCw' },
  { text: 'Improves indoor comfort & humidity control', icon: 'Smile' },
  { text: 'Helps lengthen system lifespan by 5-8 yrs', icon: 'Clock' },
  { text: 'Peace of mind with 24/7 priority booking', icon: 'Heart' },
  { text: 'Improves peak summer & winter performance', icon: 'Zap' },
  { text: 'Automated seasonal service reminders', icon: 'Calendar' },
  { text: '15% Discount on all future repair parts', icon: 'Tag' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Neil Meckengy',
    location: 'Buford, GA',
    rating: 5,
    date: '2 days ago',
    service: 'AC Emergency Repair',
    comment: 'Our AC went out in the middle of a 95° heatwave on a Saturday afternoon. Apex Air had a technician at our door in 40 minutes. He diagnosed a bad capacitor, had the replacement part right on his truck, and had cold air blowing in 20 minutes. Incredible service and honest pricing!',
    verified: true
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    location: 'Flowery Branch, GA',
    rating: 5,
    date: '1 week ago',
    service: 'New Heat Pump Installation',
    comment: 'Replaced our 16-year-old 10 SEER unit with a modern 18 SEER system. The energy savings calculator on their website was spot on — our power bill dropped by nearly 40%! The installation crew was polite, wore shoe covers, and left the basement cleaner than they found it.',
    verified: true
  },
  {
    id: '3',
    name: 'David Reynolds',
    location: 'Gainesville, GA',
    rating: 5,
    date: '2 weeks ago',
    service: '21-Point Tune-Up',
    comment: 'The 21-point tune-up was thorough. The tech showed me photos of dirty coils before and after cleaning and checked refrigerant levels with digital gauges. Definitely joining their annual Comfort Club!',
    verified: true
  },
  {
    id: '4',
    name: 'Amanda & Robert Vance',
    location: 'Sugar Hill, GA',
    rating: 5,
    date: '3 weeks ago',
    service: 'Furnace & AC Replacement',
    comment: 'Zero pushy sales tactics. They gave us 3 straightforward pricing tiers and explained the pros/cons of each. Highly recommend Apex Air to anyone in Hall and Gwinnett county.',
    verified: true
  }
];

export const COUPONS_DATA: CouponItem[] = [
  {
    id: 'c1',
    code: 'SUMMER50',
    tag: 'Most Popular',
    title: 'Diagnostic Service Call',
    description: 'Complete system check, electrical testing, and exact written repair quote.',
    originalPrice: '$129',
    promoPrice: '$79',
    serviceType: 'repair',
    badgeColor: 'bg-amber-500'
  },
  {
    id: 'c2',
    code: 'TUNE21',
    tag: 'Preventative',
    title: '21-Point Precision Tune-Up',
    description: 'Deep coil rinse, motor calibration, capacitor test, and airflow check.',
    originalPrice: '$189',
    promoPrice: '$99',
    serviceType: 'tuneup',
    badgeColor: 'bg-blue-600'
  },
  {
    id: 'c3',
    code: 'SYSTEM500',
    tag: 'Big Savings',
    title: 'Full System Replacement',
    description: 'Complete high-efficiency heat pump or central AC system replacement.',
    originalPrice: undefined,
    promoPrice: '$500 OFF',
    serviceType: 'install',
    badgeColor: 'bg-emerald-600'
  },
  {
    id: 'c4',
    code: 'REBATE25',
    tag: 'Instant Voucher',
    title: 'Any Service Call Discount',
    description: 'Get $25 off immediately on any standard diagnostic or repair call.',
    originalPrice: '$104',
    promoPrice: '$25 OFF',
    serviceType: 'repair',
    badgeColor: 'bg-orange-500'
  }
];

export const PRICING_TIERS = [
  {
    id: 'diagnostic',
    name: 'Diagnostic & Inspection',
    price: '$79',
    period: 'flat rate',
    featured: false,
    badge: 'Standard',
    features: [
      'Comprehensive system troubleshooting',
      'Electronic refrigerant leak detection',
      'Written itemized upfront quote',
      'Fee waived 100% if repair is approved',
      'Same-day service window'
    ],
    ctaText: 'Select Diagnostic',
    code: 'SUMMER50',
    serviceVal: 'repair'
  },
  {
    id: 'tuneup',
    name: 'Seasonal Precision Tune-Up',
    price: '$99',
    period: 'flat rate',
    featured: true,
    badge: 'Best Value',
    features: [
      '21-Point comprehensive safety inspection',
      'Refrigerant operating pressure test',
      'Chemical condenser coil wash',
      'Condensate line drain clearing & tablet treatment',
      'Electrical contactor & capacitor testing',
      'Thermostat calibration & airflow test'
    ],
    ctaText: 'Select Tune-Up',
    code: 'TUNE21',
    serviceVal: 'tuneup'
  },
  {
    id: 'club',
    name: 'Comfort Club Membership',
    price: '$19',
    period: '/month',
    featured: false,
    badge: 'VIP Care',
    features: [
      '2 Full multi-point tune-ups per year (Spring + Fall)',
      '15% Discount on all repairs and parts',
      'Priority VIP emergency dispatch scheduling',
      'Zero overtime or weekend diagnostic fees',
      'Extended 2-year warranty on all repairs'
    ],
    ctaText: 'Join Comfort Club',
    code: 'CLUB19',
    serviceVal: 'maintenance'
  }
];

export const DIAGNOSTIC_DATABASE: Record<string, DiagnosticResult> = {
  'ac_warm_air': {
    title: 'Unit Running But Blowing Warm/Room Temp Air',
    severity: 'medium',
    possibleCause: 'Low refrigerant charge (leak), tripped compressor capacitor, dirty outdoor condenser coil, or faulty thermostat wire.',
    recommendedAction: 'Immediate refrigerant pressure check and capacitor electrical test by an EPA-certified tech to prevent compressor burn.',
    estimatedCost: '$79 Diagnostic (Parts: $120 - $280)',
    promoCode: 'SUMMER50'
  },
  'ac_no_power': {
    title: 'AC System Won\'t Turn On At All',
    severity: 'high',
    possibleCause: 'Full condensate drain float switch tripped, blown electrical disconnect fuse, failed contactor, or dead thermostat.',
    recommendedAction: 'Safety circuit check and clear drain pan switch. Avoid continuous breaker resets which could fry circuit boards.',
    estimatedCost: '$79 Diagnostic (Parts: $95 - $220)',
    promoCode: 'SUMMER50'
  },
  'ac_noises': {
    title: 'Screeching, Banging, or Buzzing Sounds',
    severity: 'high',
    possibleCause: 'Loose blower wheel, failed fan motor bearings, or loose compressor mounting hardware.',
    recommendedAction: 'Shut off system immediately at thermostat to prevent physical damage to motor housings and coils.',
    estimatedCost: '$79 Diagnostic + Precision Repair',
    promoCode: 'SUMMER50'
  },
  'ac_ice': {
    title: 'Ice Buildup on Copper Pipes or Indoor Coil',
    severity: 'emergency',
    possibleCause: 'Severe airflow restriction (clogged filter) or low refrigerant levels creating below-freezing evaporator temperatures.',
    recommendedAction: 'Turn system to "FAN ONLY" to thaw coil. Schedule tech to test refrigerant pressures and inspect blower wheel.',
    estimatedCost: '$79 Diagnostic (Voucher Applied)',
    promoCode: 'SUMMER50'
  },
  'heat_no_heat': {
    title: 'Heater/Furnace Blowing Cold Air',
    severity: 'high',
    possibleCause: 'Dirty flame sensor, cracked hot surface ignitor, pressure switch fault, or heat pump reversing valve stuck.',
    recommendedAction: 'Clean ignition assembly and check draft inducer motor safety switches.',
    estimatedCost: '$79 Diagnostic (Parts: $110 - $240)',
    promoCode: 'SUMMER50'
  },
  'heat_smell': {
    title: 'Burning Smell or Gas Odor From Vents',
    severity: 'emergency',
    possibleCause: 'First seasonal burn-off of dust, or hazardous cracked heat exchanger / electrical wire overheating.',
    recommendedAction: 'If sulfur/rotten egg odor, evacuate and contact gas utility immediately. Otherwise, schedule a full safety combustion inspection.',
    estimatedCost: '$79 Diagnostic + Safety Test',
    promoCode: 'SUMMER50'
  },
  'high_bills': {
    title: 'Skyrocketing Electric Bills / Constant Running',
    severity: 'low',
    possibleCause: 'Aging low-SEER compressor (e.g. 10 SEER), severe duct leakage, or degraded heat pump coils.',
    recommendedAction: 'Perform SEER Energy Audit and 21-Point Tune-Up or explore high-efficiency SEER2 replacement options.',
    estimatedCost: '$99 Tune-Up (Save up to 45% on bills)',
    promoCode: 'TUNE21'
  }
};

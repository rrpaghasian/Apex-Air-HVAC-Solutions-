import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(cors());
app.use(express.json());

// 1. Dynamic Server-Side Content API with Real HVAC Data & Funnel CTAs
app.get('/api/content', (_req, res) => {
  res.json({
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
  });
});

// 2. Dynamic Real-Time Climate Telemetry API
app.get('/api/telemetry', (req, res) => {
  const scrollProgress = parseFloat((req.query.progress as string) || '0');
  const normalized = Math.min(Math.max(scrollProgress, 0), 1);

  const baseTemp = 74.0;
  const currentTemp = (baseTemp - normalized * 4.2).toFixed(1);
  const currentAirflow = (97.5 + normalized * 2.4).toFixed(1);
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

  res.json({
    timestamp: new Date().toISOString(),
    progress: normalized,
    phase,
    state,
    metrics: {
      temperature: `${currentTemp}°F`,
      airPurity: `${currentAirflow}%`,
      relativeHumidity: `${humidity}%`,
      staticPressureInWg: `${staticPressure} in. w.g.`,
      activeCycle: normalized < 0.5 ? 'Cooling Stage 2' : 'Modulating Inverter VAV'
    }
  });
});

// 3. High-Performance HTTP 206 Partial Content Video Streamer
app.get('/api/stream/video', (req, res) => {
  const videoPath = path.join(__dirname, 'public', 'video_1_reversed.mp4');

  if (!fs.existsSync(videoPath)) {
    return res.status(404).json({ error: 'Video file not found' });
  }

  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;
    const file = fs.createReadStream(videoPath, { start, end });

    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/mp4'
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
      'Accept-Ranges': 'bytes'
    };
    res.writeHead(200, head);
    fs.createReadStream(videoPath).pipe(res);
  }
});

// 4. Vite Development Middleware / Production Static Hosting
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.use(express.static(path.join(__dirname, 'public')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`\n🚀 Apex Air Dynamic Server running on http://localhost:${PORT}`);
    console.log(`📊 Climate Telemetry API: http://localhost:${PORT}/api/telemetry`);
    console.log(`🎬 Dynamic Video Stream: http://localhost:${PORT}/api/stream/video\n`);
  });
}

startServer();

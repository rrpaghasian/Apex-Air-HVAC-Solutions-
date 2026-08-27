// GoHighLevel Funnel & Website Templates

export const GHL_FUNNEL_STEP1_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>Apex Air Solutions | Heating & Air Conditioning Specialists</title>
  
  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    /* ==========================================================================
       APEX AIR SOLUTIONS - GOHIGHLEVEL STANDALONE CUSTOM STYLES
       ========================================================================== */
    :root {
      --primary: #0284c7;
      --primary-dark: #0369a1;
      --primary-light: #e0f2fe;
      --accent: #f97316;
      --accent-hover: #ea580c;
      --accent-light: #ffedd5;
      --dark: #0f172a;
      --dark-800: #1e293b;
      --dark-850: #182234;
      --dark-900: #0f172a;
      --dark-950: #090d16;
      --emerald: #10b981;
      --emerald-dark: #059669;
      --emerald-light: #d1fae5;
      --gray-50: #f8fafc;
      --gray-100: #f1f5f9;
      --gray-200: #e2e8f0;
      --gray-300: #cbd5e1;
      --gray-400: #94a3b8;
      --gray-500: #64748b;
      --gray-600: #475569;
      --gray-700: #334155;
      --radius-sm: 6px;
      --radius-md: 10px;
      --radius-lg: 16px;
      --radius-xl: 24px;
      --radius-full: 9999px;
      --font: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: var(--font);
      -webkit-tap-highlight-color: transparent;
    }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
    }

    body {
      background-color: #ffffff;
      color: var(--dark);
      line-height: 1.5;
      overflow-x: hidden;
      padding-bottom: 70px;
      font-family: var(--font);
    }

    @media (min-width: 769px) {
      body { padding-bottom: 0; }
    }

    a { color: inherit; text-decoration: none; }
    button, input, select, textarea { font-family: inherit; }

    .container {
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 16px;
    }

    @media (min-width: 768px) {
      .container { padding: 0 24px; }
    }

    .flex { display: flex; }
    .inline-flex { display: inline-flex; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .justify-center { justify-content: center; }
    .flex-col { flex-direction: column; }
    .flex-wrap { flex-wrap: wrap; }
    .gap-1 { gap: 4px; }
    .gap-2 { gap: 8px; }
    .gap-3 { gap: 12px; }
    .gap-4 { gap: 16px; }
    .w-full { width: 100%; }
    .text-center { text-align: center; }
    .relative { position: relative; }
    .overflow-hidden { overflow: hidden; }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-weight: 800;
      border-radius: var(--radius-md);
      transition: all 0.2s ease;
      cursor: pointer;
      border: none;
      text-align: center;
      white-space: nowrap;
      user-select: none;
      font-size: 0.95rem;
      padding: 12px 24px;
      min-height: 46px;
    }
    .btn:active { transform: scale(0.97); }

    .btn-orange {
      background-color: var(--accent);
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(249, 115, 22, 0.35);
    }
    .btn-orange:hover {
      background-color: var(--accent-hover);
      box-shadow: 0 6px 20px rgba(249, 115, 22, 0.45);
    }

    .btn-cyan {
      background-color: var(--primary);
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
    }
    .btn-cyan:hover {
      background-color: var(--primary-dark);
      box-shadow: 0 6px 20px rgba(2, 132, 199, 0.45);
    }

    .btn-dark {
      background-color: var(--dark);
      color: #ffffff;
    }
    .btn-dark:hover { background-color: var(--dark-950); }

    /* 1. TOP BAR */
    .ghl-topbar {
      background-color: var(--dark);
      color: var(--gray-300);
      font-size: 0.8rem;
      border-bottom: 1px solid var(--dark-800);
      padding: 8px 0;
      position: relative;
      z-index: 50;
    }
    .ghl-topbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }
    .dispatch-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background-color: #ea580c;
      color: #ffffff;
      font-size: 0.7rem;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: var(--radius-sm);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #ffffff;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.3); }
    }

    /* 2. NAVBAR */
    .ghl-header {
      background-color: #ffffff;
      border-bottom: 1px solid var(--gray-200);
      position: sticky;
      top: 0;
      z-index: 40;
      transition: box-shadow 0.2s ease;
    }
    .ghl-header.scrolled {
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }
    .ghl-nav {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      flex-shrink: 0;
    }
    .brand-icon-box {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: linear-gradient(135deg, #06b6d4 0%, #1d4ed8 100%);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(6, 182, 212, 0.25);
    }
    .brand-name {
      font-size: 1.5rem;
      font-weight: 900;
      letter-spacing: -0.03em;
      color: var(--dark);
      line-height: 1;
    }
    .brand-name span { color: var(--primary); }
    .brand-sub {
      font-size: 0.65rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent);
      margin-top: 3px;
    }

    .nav-links-desktop {
      display: none;
      align-items: center;
      gap: 36px;
      list-style: none;
    }
    .nav-link-item {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--dark);
      transition: color 0.2s;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
    }
    .nav-link-item:hover { color: var(--primary); }

    /* SIDE-BY-SIDE FINAL SECTION & EMBEDDED FORM */
    .ghl-cta-section {
      background: linear-gradient(180deg, #0f172a 0%, #090d16 100%);
      color: #ffffff;
      padding: 70px 0 85px;
      position: relative;
      overflow: hidden;
    }
    .cta-split-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 36px;
      align-items: center;
    }
    @media (min-width: 992px) {
      .cta-split-grid {
        grid-template-columns: 1fr 1fr;
        gap: 48px;
      }
    }
    .cta-left-content { text-align: left; }
    .form-embed-card {
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-xl);
      padding: 20px 16px;
      box-shadow: var(--shadow-2xl);
    }
  </style>
</head>
<body>
  <!-- Full code in gohighlevel-landing-page.html -->
</body>
</html>`;

export const GHL_FUNNEL_STEP2_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>Book Your Service Window | Apex Air Solutions</title>
  
  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    /* ==========================================================================
       APEX AIR SOLUTIONS - GOHIGHLEVEL BOOKING PAGE STYLES
       ========================================================================== */
    :root {
      --primary: #0284c7;
      --primary-dark: #0369a1;
      --primary-light: #e0f2fe;
      --accent: #f97316;
      --accent-hover: #ea580c;
      --accent-light: #ffedd5;
      --dark: #0f172a;
      --dark-800: #1e293b;
      --dark-850: #182234;
      --dark-900: #0f172a;
      --dark-950: #090d16;
      --emerald: #10b981;
      --emerald-dark: #059669;
      --emerald-light: #d1fae5;
      --gray-50: #f8fafc;
      --gray-100: #f1f5f9;
      --gray-200: #e2e8f0;
      --gray-300: #cbd5e1;
      --gray-400: #94a3b8;
      --gray-500: #64748b;
      --gray-600: #475569;
      --gray-700: #334155;
      --radius-sm: 6px;
      --radius-md: 10px;
      --radius-lg: 16px;
      --radius-xl: 24px;
      --radius-full: 9999px;
      --font: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: var(--font);
      -webkit-tap-highlight-color: transparent;
    }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
    }

    body {
      background-color: #f8fafc;
      color: var(--dark);
      line-height: 1.5;
      overflow-x: hidden;
      padding-bottom: 74px;
      font-family: var(--font);
    }

    @media (min-width: 769px) {
      body { padding-bottom: 0; }
    }

    a { color: inherit; text-decoration: none; }
    button, input, select, textarea { font-family: inherit; }

    .container {
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 16px;
    }

    @media (min-width: 768px) {
      .container { padding: 0 24px; }
    }

    .flex { display: flex; }
    .inline-flex { display: inline-flex; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .justify-center { justify-content: center; }
    .flex-col { flex-direction: column; }
    .flex-wrap { flex-wrap: wrap; }
    .gap-1 { gap: 4px; }
    .gap-2 { gap: 8px; }
    .gap-3 { gap: 12px; }
    .gap-4 { gap: 16px; }
    .w-full { width: 100%; }
    .text-center { text-align: center; }
    .relative { position: relative; }
    .overflow-hidden { overflow: hidden; }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-weight: 800;
      border-radius: var(--radius-md);
      transition: all 0.2s ease;
      cursor: pointer;
      border: none;
      text-align: center;
      white-space: nowrap;
      user-select: none;
      font-size: 0.95rem;
      padding: 12px 24px;
      min-height: 46px;
    }
    .btn:active { transform: scale(0.97); }

    .btn-orange {
      background-color: var(--accent);
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(249, 115, 22, 0.35);
    }
    .btn-orange:hover {
      background-color: var(--accent-hover);
      box-shadow: 0 6px 20px rgba(249, 115, 22, 0.45);
    }

    .btn-cyan {
      background-color: var(--primary);
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
    }
    .btn-cyan:hover {
      background-color: var(--primary-dark);
      box-shadow: 0 6px 20px rgba(2, 132, 199, 0.45);
    }

    .btn-dark {
      background-color: var(--dark);
      color: #ffffff;
    }
    .btn-dark:hover { background-color: var(--dark-950); }

    /* 1. TOP BAR */
    .ghl-topbar {
      background-color: var(--dark);
      color: var(--gray-300);
      font-size: 0.8rem;
      border-bottom: 1px solid var(--dark-800);
      padding: 8px 0;
      position: relative;
      z-index: 50;
    }
    .ghl-topbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }
    .dispatch-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background-color: #ea580c;
      color: #ffffff;
      font-size: 0.7rem;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: var(--radius-sm);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #ffffff;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.3); }
    }

    /* 2. HEADER */
    .ghl-header {
      background-color: #ffffff;
      border-bottom: 1px solid var(--gray-200);
      position: sticky;
      top: 0;
      z-index: 40;
      box-shadow: var(--shadow-sm);
    }
    .ghl-nav {
      height: 76px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      flex-shrink: 0;
    }
    .brand-icon-box {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: linear-gradient(135deg, #06b6d4 0%, #1d4ed8 100%);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(6, 182, 212, 0.25);
    }
    .brand-name {
      font-size: 1.45rem;
      font-weight: 900;
      letter-spacing: -0.03em;
      color: var(--dark);
      line-height: 1;
    }
    .brand-name span { color: var(--primary); }
    .brand-sub {
      font-size: 0.65rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent);
      margin-top: 3px;
    }

    /* 3. HERO */
    .booking-hero {
      background: linear-gradient(180deg, #090d16 0%, #0f172a 60%, #1e293b 100%);
      color: #ffffff;
      padding: 44px 0 50px;
      position: relative;
      overflow: hidden;
      text-align: center;
    }
    .hero-ambient-glow {
      position: absolute;
      top: -60px;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 300px;
      background: radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, rgba(0,0,0,0) 70%);
      border-radius: 50%;
      pointer-events: none;
    }
    .promo-applied-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(249, 115, 22, 0.2);
      border: 1px solid rgba(249, 115, 22, 0.4);
      color: #fdba74;
      font-size: 0.8rem;
      font-weight: 800;
      padding: 6px 16px;
      border-radius: var(--radius-full);
      margin-bottom: 16px;
      backdrop-filter: blur(8px);
    }
    .booking-hero-title {
      font-size: clamp(2rem, 4.5vw, 3.2rem);
      font-weight: 900;
      line-height: 1.15;
      letter-spacing: -0.03em;
      color: #ffffff;
      margin-bottom: 12px;
    }
    .booking-hero-sub {
      font-size: clamp(0.95rem, 2vw, 1.15rem);
      color: var(--gray-300);
      max-width: 680px;
      margin: 0 auto 28px;
      line-height: 1.6;
    }

    /* 3-STEP TIMELINE */
    .timeline-steps {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      max-width: 780px;
      margin: 0 auto;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.12);
    }
    .step-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--gray-400);
    }
    .step-item.active { color: #38bdf8; }
    .step-num {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 900;
      background: rgba(255,255,255,0.1);
      color: #cbd5e1;
      flex-shrink: 0;
    }
    .step-item.active .step-num {
      background: var(--primary);
      color: #ffffff;
      box-shadow: 0 0 10px rgba(2, 132, 199, 0.5);
    }

    /* 4. MAIN BOOKING SECTION */
    .booking-main-section { padding: 40px 0 70px; }
    .booking-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px;
      align-items: start;
    }
    @media (min-width: 992px) {
      .booking-grid { grid-template-columns: 1fr 380px; }
    }

    .calendar-container-card {
      background: #ffffff;
      border: 1px solid var(--gray-200);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-xl);
      overflow: hidden;
    }
    .calendar-card-header {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #ffffff;
      padding: 18px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .calendar-title {
      font-size: 1.15rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .calendar-tag {
      background: rgba(16, 185, 129, 0.2);
      color: #34d399;
      border: 1px solid rgba(16, 185, 129, 0.4);
      font-size: 0.7rem;
      font-weight: 800;
      padding: 3px 10px;
      border-radius: var(--radius-full);
      text-transform: uppercase;
    }
    .calendar-embed-frame-wrap {
      padding: 16px;
      background: #ffffff;
      min-height: 640px;
    }
    @media (min-width: 768px) {
      .calendar-embed-frame-wrap { padding: 24px; }
    }
    .calendar-security-footer {
      background: var(--gray-50);
      border-top: 1px solid var(--gray-200);
      padding: 14px 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--gray-600);
    }

    .booking-sidebar {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .sidebar-card {
      background: #ffffff;
      border: 1px solid var(--gray-200);
      border-radius: var(--radius-lg);
      padding: 24px;
      box-shadow: var(--shadow-md);
    }
    .sidebar-card-title {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--dark);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .trust-checklist {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .trust-check-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 0.85rem;
      color: var(--gray-700);
      line-height: 1.4;
    }
    .trust-check-icon {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--emerald-light);
      color: var(--emerald-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 900;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .tech-status-box {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      color: #ffffff;
      border-radius: var(--radius-lg);
      padding: 20px;
      border: 1px solid var(--gray-700);
    }
    .tech-status-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .tech-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
    }
    .tech-avatar {
      width: 52px;
      height: 52px;
      border-radius: 10px;
      object-fit: cover;
      border: 2px solid var(--primary);
      flex-shrink: 0;
    }

    .emergency-call-card {
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      color: #ffffff;
      border-radius: var(--radius-lg);
      padding: 24px;
      text-align: center;
      box-shadow: var(--shadow-lg);
    }
    .emergency-title {
      font-size: 1.1rem;
      font-weight: 900;
      margin-bottom: 6px;
    }
    .emergency-sub {
      font-size: 0.8rem;
      color: #ffedd5;
      margin-bottom: 16px;
      line-height: 1.4;
    }

    /* 5. JOURNEY */
    .journey-section {
      background: #ffffff;
      border-top: 1px solid var(--gray-200);
      padding: 60px 0;
    }
    .journey-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin-top: 36px;
    }
    @media (min-width: 768px) {
      .journey-grid { grid-template-columns: repeat(3, 1fr); }
    }
    .journey-card {
      background: var(--gray-50);
      border: 1px solid var(--gray-200);
      border-radius: var(--radius-lg);
      padding: 24px;
      position: relative;
    }
    .journey-step-num {
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 1.8rem;
      font-weight: 900;
      color: var(--gray-300);
      line-height: 1;
    }
    .journey-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: var(--primary-light);
      color: var(--primary-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      margin-bottom: 14px;
    }
    .journey-card h4 {
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--dark);
      margin-bottom: 8px;
    }
    .journey-card p {
      font-size: 0.85rem;
      color: var(--gray-600);
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <!-- Full code in gohighlevel-booking-page.html -->
</body>
</html>`;

export const GHL_FUNNEL_STEP3_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>Booking Confirmed | Apex Air Solutions</title>
  
  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    /* ==========================================================================
       APEX AIR SOLUTIONS - LIGHT THEME THANK YOU PAGE
       ========================================================================== */
    :root {
      --primary: #0284c7;
      --primary-dark: #0369a1;
      --primary-light: #e0f2fe;
      --accent: #f97316;
      --accent-hover: #ea580c;
      --accent-light: #ffedd5;
      --dark: #0f172a;
      --dark-800: #1e293b;
      --dark-900: #0f172a;
      --emerald: #10b981;
      --emerald-dark: #059669;
      --emerald-light: #d1fae5;
      --gray-50: #f8fafc;
      --gray-100: #f1f5f9;
      --gray-200: #e2e8f0;
      --gray-300: #cbd5e1;
      --gray-400: #94a3b8;
      --gray-500: #64748b;
      --gray-600: #475569;
      --gray-700: #334155;
      --radius-sm: 8px;
      --radius-md: 12px;
      --radius-lg: 20px;
      --radius-xl: 24px;
      --radius-full: 9999px;
      --font: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: var(--font);
      -webkit-tap-highlight-color: transparent;
    }

    html, body {
      min-height: 100vh;
      background-color: #f8fafc;
      color: var(--dark);
      line-height: 1.5;
      font-family: var(--font);
      display: flex;
      flex-direction: column;
    }

    a { color: inherit; text-decoration: none; }
    button { font-family: inherit; cursor: pointer; }

    .container {
      width: 100%;
      max-width: 960px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* 1. TOP BAR */
    .ghl-topbar {
      background-color: var(--dark);
      color: var(--gray-300);
      font-size: 0.8rem;
      border-bottom: 1px solid var(--dark-800);
      padding: 8px 0;
    }
    .topbar-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
    }
    .dispatch-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background-color: #ea580c;
      color: #ffffff;
      font-size: 0.7rem;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #ffffff;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(1.3); }
    }

    /* 2. HEADER */
    .thankyou-header {
      background-color: #ffffff;
      border-bottom: 1px solid var(--gray-200);
      padding: 16px 0;
      box-shadow: var(--shadow-sm);
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .brand-icon-box {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, #06b6d4 0%, #1d4ed8 100%);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      box-shadow: 0 4px 10px rgba(6, 182, 212, 0.25);
    }
    .brand-name {
      font-size: 1.4rem;
      font-weight: 900;
      letter-spacing: -0.03em;
      color: var(--dark);
      line-height: 1;
    }
    .brand-name span { color: var(--primary); }
    .brand-sub {
      font-size: 0.65rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent);
      margin-top: 3px;
    }

    .funnel-step-badge {
      display: none;
      align-items: center;
      gap: 8px;
      background: var(--emerald-light);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: var(--emerald-dark);
      padding: 6px 14px;
      border-radius: var(--radius-full);
      font-size: 0.8rem;
      font-weight: 800;
    }
    @media (min-width: 640px) {
      .funnel-step-badge { display: inline-flex; }
    }

    .header-phone {
      display: flex;
      flex-direction: column;
      text-align: right;
    }
    .phone-label {
      font-size: 0.65rem;
      font-weight: 800;
      color: var(--gray-400);
      text-transform: uppercase;
    }
    .phone-num {
      font-size: 1rem;
      font-weight: 900;
      color: var(--dark);
      display: flex;
      align-items: center;
      gap: 4px;
    }

    /* 3. MAIN CONTENT */
    .thankyou-main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 36px 0;
      position: relative;
    }

    .ambient-bg-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      height: 400px;
      background: radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, rgba(16, 185, 129, 0.06) 50%, rgba(255,255,255,0) 70%);
      border-radius: 50%;
      pointer-events: none;
    }

    .thankyou-card {
      background: #ffffff;
      border: 1px solid var(--gray-200);
      border-radius: var(--radius-xl);
      padding: 36px 24px;
      text-align: center;
      box-shadow: var(--shadow-xl);
      width: 100%;
      position: relative;
      z-index: 10;
    }
    @media (min-width: 640px) {
      .thankyou-card { padding: 48px 40px; }
    }

    .success-icon-badge {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      font-weight: 900;
      margin: 0 auto 16px;
      box-shadow: 0 10px 25px rgba(16, 185, 129, 0.35);
      border: 3px solid #ffffff;
    }

    .badge-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--emerald-light);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: var(--emerald-dark);
      font-size: 0.75rem;
      font-weight: 800;
      padding: 4px 14px;
      border-radius: var(--radius-full);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 12px;
    }

    .thankyou-title {
      font-size: clamp(1.75rem, 4vw, 2.4rem);
      font-weight: 900;
      letter-spacing: -0.02em;
      line-height: 1.2;
      color: var(--dark);
      margin-bottom: 10px;
    }

    .thankyou-sub {
      font-size: clamp(0.95rem, 2vw, 1.05rem);
      color: var(--gray-600);
      max-width: 600px;
      margin: 0 auto 28px;
      line-height: 1.6;
    }
    .thankyou-sub strong { color: var(--primary-dark); font-weight: 800; }

    .steps-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
      max-width: 780px;
      margin: 0 auto 32px;
      text-align: left;
    }
    @media (min-width: 640px) {
      .steps-grid { grid-template-columns: repeat(3, 1fr); }
    }

    .step-box {
      background: var(--gray-50);
      border: 1px solid var(--gray-200);
      border-radius: var(--radius-md);
      padding: 18px 16px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .step-box:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
      border-color: var(--primary);
    }
    .step-icon-box {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
    .icon-blue { background: var(--primary-light); color: var(--primary-dark); }
    .icon-orange { background: var(--accent-light); color: var(--accent-hover); }
    .icon-green { background: var(--emerald-light); color: var(--emerald-dark); }

    .step-box h4 {
      font-size: 0.95rem;
      font-weight: 800;
      color: var(--dark);
      margin-bottom: 4px;
    }
    .step-box p {
      font-size: 0.8rem;
      color: var(--gray-500);
      line-height: 1.45;
    }

    .action-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      max-width: 500px;
      margin: 0 auto;
    }
    @media (min-width: 520px) {
      .action-group { flex-direction: row; }
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-weight: 800;
      border-radius: var(--radius-md);
      transition: all 0.2s ease;
      text-align: center;
      font-size: 0.95rem;
      padding: 13px 22px;
      width: 100%;
      border: none;
      user-select: none;
      min-height: 48px;
    }
    .btn:active { transform: scale(0.97); }

    .btn-orange {
      background-color: var(--accent);
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(249, 115, 22, 0.35);
    }
    .btn-orange:hover {
      background-color: var(--accent-hover);
      box-shadow: 0 6px 20px rgba(249, 115, 22, 0.45);
    }

    .btn-outline {
      background: #ffffff;
      color: var(--gray-700);
      border: 1.5px solid var(--gray-300);
    }
    .btn-outline:hover {
      background: var(--gray-50);
      color: var(--dark);
      border-color: var(--gray-400);
    }

    .thankyou-footer {
      padding: 18px 0;
      text-align: center;
      font-size: 0.75rem;
      color: var(--gray-500);
      border-top: 1px solid var(--gray-200);
      background-color: #ffffff;
    }
  </style>
</head>
<body>

  <!-- 1. TOP BAR -->
  <div class="ghl-topbar">
    <div class="container">
      <div class="topbar-inner">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="dispatch-badge">
            <span class="pulse-dot"></span>
            Live Dispatch
          </span>
          <span style="color: #cbd5e1; font-weight: 600;">Priority service scheduled for Buford &amp; Hall County.</span>
        </div>

        <div style="display: flex; align-items: center; gap: 8px;">
          <span>24/7 Immediate Help:</span>
          <a href="tel:7709677910" style="color: #ffffff; font-weight: 900;">📞 (770) 967-7910</a>
        </div>
      </div>
    </div>
  </div>

  <!-- 2. HEADER -->
  <header class="thankyou-header">
    <div class="container">
      <div class="header-inner">
        <a href="#" class="brand-logo">
          <div class="brand-icon-box">❄️</div>
          <div>
            <div class="brand-name">APEX<span>AIR</span></div>
            <div class="brand-sub">Heating &amp; Air Solutions</div>
          </div>
        </a>

        <div class="funnel-step-badge">
          <span>✓</span>
          <span>Step 3 of 3: Booking Confirmed</span>
        </div>

        <div class="header-phone">
          <span class="phone-label">Direct Dispatch Desk</span>
          <a href="tel:7709677910" class="phone-num">
            <span>📞</span> (770) 967-7910
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- 3. MAIN CONFIRMATION CARD -->
  <main class="thankyou-main">
    <div class="ambient-bg-glow"></div>

    <div class="container">
      <div class="thankyou-card">
        
        <div class="success-icon-badge">✓</div>

        <div class="badge-pill">
          <span>✨</span>
          <span>Appointment Reserved &amp; Voucher Applied</span>
        </div>

        <h1 class="thankyou-title">
          You're All Set! Booking Confirmed.
        </h1>

        <p class="thankyou-sub">
          We've received your service request. Your arrival window details and <strong>$25 voucher confirmation</strong> have been sent to your email.
        </p>

        <!-- 3 Crisp Next Steps -->
        <div class="steps-grid">
          <div class="step-box">
            <div class="step-icon-box icon-blue">✉️</div>
            <h4>1. Check Your Inbox</h4>
            <p>An automated confirmation email with your arrival time window has been sent.</p>
          </div>

          <div class="step-box">
            <div class="step-icon-box icon-orange">🚐</div>
            <h4>2. Tech On-The-Way Alert</h4>
            <p>Your technician will notify you with their photo and GPS ETA 20 minutes prior.</p>
          </div>

          <div class="step-box">
            <div class="step-icon-box icon-green">🔧</div>
            <h4>3. Upfront Quote &amp; Fix</h4>
            <p>You'll receive a 100% written quote to approve before any repair work starts.</p>
          </div>
        </div>

      </div>
    </div>
  </main>

  <!-- 4. FOOTER -->
  <footer class="thankyou-footer">
    <div class="container">
      <p>Apex Air Solutions • GA Master HVAC Lic #HVAC-98231 • 100% Satisfaction Guarantee • 24/7 Dispatch: (770) 967-7910</p>
    </div>
  </footer>

</body>
</html>`;

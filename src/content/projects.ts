export type Slot = {
  alt: string;
  caption: string;
  more?: string[];
};

export type Project = {
  slug: string;
  product: string;
  client?: string;
  url?: string;
  title: string;
  domain: string;
  years: string;
  role: string;
  summary: string;
  context: string;
  highlights: string[];
  stack: string[];
  media: { cover: Slot; shots: Slot[] };
};

export function coverPath(slug: string) {
  return `/work/${slug}/cover.jpg`;
}

export function thumbPath(slug: string) {
  return `/work/${slug}/thumb.jpg`;
}

export function shotPath(slug: string, index: number, variant = 1) {
  const extra = variant > 1 ? `-${variant}` : '';
  return `/work/${slug}/shot-${index + 1}${extra}.jpg`;
}

export const projects: Project[] = [
  {
    slug: 'grid-access-platform',
    product: 'TPA (Third Party Access) Platform',
    client: 'Provincial Electricity Authority (PEA)',
    title: 'Grid Access Platform',
    domain: 'Energy',
    years: '2026',
    role: 'Frontend lead for the applicant portal, back-office developer, Go backend contributor',
    summary:
      "A state utility's platform that opens its power grid to third parties for direct energy trading, from site inspection to contract signing, energy plans and billing.",
    context:
      'Energy producers and buyers use the portal to register, request connection-point inspections, sign contracts digitally and submit how much power they will send and receive. Utility staff review and approve every step in a separate back office. The domain is regulated and document-heavy, so most screens are long, validated forms, status-driven tables and printable PDFs.',
    highlights: [
      "Built the applicant portal's multi-step request wizards, including map-based site pinning with Google Maps and a final digital-signature step.",
      'Grid-service requests that pair sellers (generation) with buyers (load) and show loss-adjusted energy totals as the user edits quantities.',
      'Monthly and daily grid-usage plans: template download, plan upload and per-plan status tracking.',
      'A balance calendar that flags days where planned generation and load do not match, with a 15-minute Gen vs Load chart and table for each day.',
      'In the back office, built the kick-off request module end to end, the digital-signature approval flow with an in-app PDF viewer, and the contract approver workflow.',
      'A PDF template editor with page management, rich-text editing and live preview, plus status-aware print and download menus across modules.',
      'Go services: watermark and caption options for generated PDFs, Thai tax ID validation, and date-range and contract-number filters.',
    ],
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Redux Toolkit / RTK Query',
      'NextAuth + Keycloak',
      'Radix UI',
      'TanStack Table',
      'React Hook Form',
      'pdf.js',
      'ApexCharts',
      'Go (Echo, GORM)',
    ],
    media: {
      cover: {
        alt: 'Platform home page introducing PEA Third Party Access and the four steps to join: register, request grid service, sign the contract, start using the grid',
        caption:
          'Applicant portal home: what the platform is for and the four steps to join.',
      },
      shots: [
        {
          alt: 'Registration form for a new participant',
          caption:
            'Register: participants sign up with their details before they can request anything.',
        },
        {
          alt: 'Step 1 of a four-step connection-point inspection request: applicant details, project and generator or load selection',
          caption:
            'Site inspection: a four-step request covering applicant details, the connection-point site, review, then DigiSign.',
        },
        {
          alt: 'Bar chart and table comparing generation and load in 15-minute intervals',
          caption:
            'Grid-usage plan: generation against load in 15-minute intervals for one day.',
        },
        {
          alt: 'Grid-service contract in an in-app PDF viewer with DigiSign identity confirmation',
          caption:
            'Contract: the generated agreement in an in-app PDF viewer, signed with DigiSign and approved in the back office.',
        },
      ],
    },
  },
  {
    slug: 'property-back-offices',
    product: 'PEACE',
    client: 'Peace and Living',
    title: 'Property Management Back Office',
    domain: 'Real estate',
    years: '2023 - 2026',
    role: 'Frontend developer on the back office, Go and gRPC API contributor',
    summary:
      'The admin console Peace and Living uses to run its residential projects, paired with an app for residents.',
    context:
      'Admin teams use the back office to manage units and residents, publish news, handle repairs and parcels, run privileges and events, chat with residents, and report across many projects at once.',
    highlights: [
      'Cross-project dashboards: units, handovers, active users, resident-type breakdowns, repair reports by date range and downloadable summaries.',
      'Resident chat on Sendbird with custom channels, search, paginated history and browser push notifications through Firebase Cloud Messaging.',
      'A parcel module with barcode scanning, and an events module built end to end: Go APIs for admin and mobile, registration, QR codes and date-window validation.',
      'Content tools: banners with publish rules and deep links, rich-text news with image cropping and client-side compression, approval and expiry.',
      'Unit, unit-plan and resident management with CSV and Excel import templates and exports.',
      'Roles and permissions, configurable app menus, light and dark mode, Thai and English.',
      'Go and gRPC microservice APIs for consents, phone directories, project clusters, unit requests and an aggregator service.',
    ],
    stack: [
      'React 18',
      'React-admin',
      'MUI',
      'Vite',
      'TypeScript',
      'ApexCharts',
      'Sendbird',
      'Firebase',
      'Socket.IO',
      'Go (Echo, gRPC)',
      'PostgreSQL',
      'KrakenD',
    ],
    media: {
      cover: {
        alt: 'PEACE dashboard with project, unit, imported-resident and active-user counts, a per-project chart of logins and handed-over units, and resident types',
        caption:
          'Portfolio dashboard: projects, units handed over, residents imported and active users across every project.',
      },
      shots: [
        {
          alt: 'Resident chat inbox listing conversations by unit with a search box',
          caption:
            'Resident chat: one inbox per project, searchable, with paginated history and browser push notifications.',
        },
        {
          alt: 'Dashboard for a single project',
          caption:
            'Project dashboard: the same figures narrowed to one project.',
        },
        {
          alt: 'News editor with rich text, image cropping and publish settings',
          caption:
            'News and banners: rich-text editing, image cropping, publish rules and expiry.',
        },
        {
          alt: 'Unit and resident list with CSV and Excel import',
          caption:
            'Units and residents: management screens with CSV and Excel import templates and exports.',
        },
      ],
    },
  },
  {
    slug: 'parts-pricing-system',
    product: 'CPS',
    client: 'Toyota Daihatsu Engineering & Manufacturing (TDEM)',
    title: 'Parts Pricing and Approval System',
    domain: 'Automotive',
    years: '2024',
    role: 'Full-stack developer, mostly backend',
    summary:
      "An internal system for a regional automotive manufacturer's pricing team to calculate, simulate and approve part prices for domestic and export markets.",
    context:
      'Pricing staff upload cost data, run simulations, then submit prices for approval. Behind the screens, batch jobs recalculate prices across hundreds of thousands of part records, so correctness under concurrency and the time each run takes mattered as much as the UI.',
    highlights: [
      'Built the Excel reporting engine: on-demand report generation, a download monitor filtered by role, and report bookmarks. A proof of concept for file generation cut one report from 46 seconds to 6.',
      'Implemented the domestic selling price calculation with a submit and approve flow and sequenced revisions.',
      'Tuned batch jobs with chunked processing behind a configurable chunk size, bulk upserts and set-based queries instead of row-by-row saves.',
      'Wrapped approval and price-calculation flows in database transactions and added concurrency checks so parallel runs could not leave partial data.',
      'Built part cost structure, exchange rate, markup and seller services, using big.js for exact decimal arithmetic.',
      'Wrote unit and end-to-end tests for the report and cost-structure modules, and added role-based log monitoring when the system moved to microservices.',
    ],
    stack: [
      'NestJS',
      'TypeORM',
      'MySQL',
      'exceljs',
      'big.js',
      'Jest',
      'React 18',
      'Vite',
      'MUI X DataGrid',
      'TanStack Query',
      'React Hook Form + Zod',
      'CASL',
    ],
    media: {
      cover: {
        alt: 'Price maintenance screen with buying-price revisions for one part in THB and USD',
        caption:
          "Price maintenance: every buying-price revision for a part, in THB and USD. Recreated from the project's screens and wireframes with sample data.",
      },
      shots: [
        {
          alt: 'Domestic selling price simulation: upload or select target parts, then run the simulation',
          caption:
            "Price simulation: pick target parts by upload or filter, then simulate the new selling prices. Recreated from the project's screens and wireframes with sample data.",
        },
        {
          alt: 'Submit and approval queue with job numbers, revisions, part counts and status',
          caption:
            "Submit and approve: price jobs wait here with their revision and part count until approved or rejected. Recreated from the project's screens and wireframes with sample data.",
        },
        {
          alt: 'On-demand Excel download monitor listing generated reports and their status',
          caption:
            "Report monitor: on-demand Excel reports, their generation status and downloads. Recreated from the project's screens and wireframes with sample data.",
        },
      ],
    },
  },
  {
    slug: 'resident-line-app',
    product: 'PROUD Residential',
    client: 'PROUD Real Estate',
    title: 'Resident App on LINE',
    domain: 'Real estate',
    years: '2024 - 2026',
    role: 'Frontend developer',
    summary:
      'A resident-facing web app that runs inside LINE, letting residents pay bills, book facilities, redeem privileges, request repairs and track parcels.',
    context:
      'Residents open the app from a LINE chat, sign in with LINE or email, verify their home, then use it for day-to-day services. Because it runs in an in-app browser on every kind of phone, flows had to stay short and recover cleanly from failed payments and logins.',
    highlights: [
      'A privilege and coupon system: membership tiers, bookmarks, redemption by QR scan, a personal coupon wallet and a share flow.',
      'Facility booking with continuous time-slot selection, check-in and cancellation.',
      'Bill payment with QR payment generation and clear failure and maintenance states.',
      'A home-service marketplace with service listings, ratings and reviews with photos.',
      'Repair requests with video upload, parcel tracking and Thai and English content.',
      'LINE login and visitor pre-registration hand-off with explicit error handling.',
    ],
    stack: [
      'Next.js 14',
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'next-intl',
      'LINE LIFF',
      'html5-qrcode',
      'Docker',
      'AWS',
      'GitLab CI',
    ],
    media: {
      cover: {
        alt: 'Resident app screens inside LINE',
        caption: 'Home, bills and privileges, running inside LINE.',
      },
      shots: [
        {
          alt: 'Coupon wallet and QR redemption screens',
          caption: 'Coupon wallet and QR redemption.',
        },
        {
          alt: 'Facility booking with time-slot selection',
          caption: 'Facility booking with continuous time slots.',
        },
      ],
    },
  },
  {
    slug: 'luxury-property-website',
    product: "Christie's International Real Estate Thailand",
    url: 'https://www.christiesrealestatethailand.com',
    title: 'Luxury Property Website',
    domain: 'Real estate',
    years: '2025 - 2026',
    role: 'Lead frontend developer and CMS developer',
    summary:
      'A trilingual website for a luxury real estate brand: map-based property search, rich listing pages, editorial content and lead forms backed by a headless CMS.',
    context:
      'I built the frontend from the first commit and most of the CMS model behind it. Buyers search listings on a map in English, Thai or Chinese, while the sales team receives enquiries by email with campaign tracking attached.',
    highlights: [
      'Layout, navigation and multilingual routing for three languages.',
      'Property search with a list and map view, Google Maps marker clustering, price and size range sliders, filters, sorting and fuzzy-match suggestions.',
      'Listing pages with gallery and lightbox, facilities, nearby places, virtual tour, sharing and unit conversion.',
      'Lead forms with consent capture and UTM tracking, plus HTML email notifications.',
      'Strapi content model, a custom single-query search endpoint and Excel export for the sales team.',
      'Docker and GitLab CI deployments to development, UAT and production, and framework upgrades for security fixes.',
    ],
    stack: [
      'Next.js',
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'next-intl',
      'Google Maps',
      'Framer Motion',
      'Swiper',
      'Fuse.js',
      'Strapi',
      'PostgreSQL',
      'Docker',
    ],
    media: {
      cover: {
        alt: 'Property search with a list beside a clustered map',
        caption: 'Map search with marker clustering and filters.',
      },
      shots: [
        {
          alt: 'Listing detail page with gallery and facilities',
          caption: 'Listing detail: gallery, facilities and nearby places.',
        },
        {
          alt: 'Sell with Us page: a form for owners and agents to submit a property, with property and contact sections',
          caption:
            'Sell with Us: owners and agents submit a property to list, and the sales team gets it by email.',
        },
      ],
    },
  },
  {
    slug: 'condominium-launch-website',
    product: 'Seven 9 Eight',
    title: 'Condominium Launch Website',
    domain: 'Real estate marketing',
    years: '2025 - 2026',
    role: 'Frontend developer and CMS developer',
    summary:
      'A pre-launch marketing and exclusive-access registration site for a Bangkok residential project, with scroll-driven storytelling and CMS-managed content.',
    context:
      'The project started as a single registration landing page. I grew it into the full marketing site while keeping every section editable by the marketing team in the CMS.',
    highlights: [
      'Scroll-driven sections and text-reveal animation with GSAP ScrollTrigger.',
      'CMS-driven 360-degree room videos per room type, a floor and unit plan slider and a filterable gallery.',
      'Registration with social login and reCAPTCHA in English, Thai and Chinese.',
      'Strapi schema for the project, units, gallery, floors, room types, news and videos.',
      'A Docker and GitLab CI pipeline, and a move to static export.',
    ],
    stack: [
      'Next.js 15',
      'React 19',
      'Tailwind CSS 4',
      'GSAP',
      'Motion',
      'TanStack Query',
      'Zustand',
      'next-intl',
      'Strapi',
      'Docker',
    ],
    media: {
      cover: {
        alt: 'Opening section of the launch website',
        caption: 'Opening section with scroll-driven animation.',
      },
      shots: [
        {
          alt: 'Floor and unit plan slider',
          caption: 'Floor and unit plan slider managed from the CMS.',
        },
        {
          alt: 'Exclusive-access registration form',
          caption: 'Registration with social login.',
        },
      ],
    },
  },
  {
    slug: 'indoor-maps-and-kiosks',
    product: 'Venue indoor maps',
    client: 'Jungceylon, EM District, Asiatique, QSNCC',
    title: 'Indoor Maps and Wayfinding Kiosks',
    domain: 'Retail and venues',
    years: '2022, 2025',
    role: 'Frontend developer',
    summary:
      'A white-label indoor map for shopping malls, a convention centre and trade shows, running on phones and wall-mounted kiosks.',
    context:
      "Visitors find shops, promotions and events, then get a route to them across floors. The same codebase is themed per venue and switches between a mobile layout and a kiosk mode with idle reset and QR hand-off to the visitor's phone.",
    highlights: [
      'Indoor map rendering: levels, walls, unit markers and labels, floor switching and fly-to animation.',
      'Shortest-path wayfinding that follows floor changes, drawn and framed with Turf.',
      'Search with category and floor filters and A to Z sorting, built on reusable list components.',
      'A full venue theme for a resort-island mall: directory, tourist privileges, promotions, events and new shops.',
      'Department-store kiosk and mobile layouts, added in 2025.',
    ],
    stack: [
      'React 18',
      'MUI',
      'Maptalks',
      'Three.js',
      'Turf',
      'pathfinding',
      'i18next',
    ],
    media: {
      cover: {
        alt: 'Portrait kiosk screen showing the ground-floor mall map with a you-are-here marker, a floor switcher and directory shortcuts',
        caption:
          'Kiosk home: the floor map with a you-are-here marker, floor switcher and directory shortcuts.',
      },
      shots: [
        {
          alt: 'Kiosk map zoomed in with a route drawn from the kiosk to the nearest restroom',
          caption:
            'Wayfinding: the shortest route from the kiosk to the nearest restroom, drawn on the map.',
        },
      ],
    },
  },
  {
    slug: 'access-and-parking',
    product: 'SABAI VMS, PlatePass and PEACE VMS',
    client: 'Supalai, Peace and Living',
    title: 'Visitor and Parking Access',
    domain: 'Real estate, smart buildings',
    years: '2022 - 2026',
    role: 'Go backend developer, then back-office developer',
    summary:
      'Gate access for residential projects: car pre-registration, e-stamps, gate transactions, blacklists, parking subscriptions and reports.',
    context:
      'I first built the visitor-management service in Go, then worked on two later back offices that security and juristic staff use to watch gates, manage resident cars and bill parking.',
    highlights: [
      'Go visitor-management APIs: master data, car pre-registration, car history, e-stamps and gate transaction updates, with SQL models and stored procedures.',
      'API gateway routes and project-level access checks.',
      'A parking console with car requests and image preview, resident car logs, payment status, and parking-payment and visitor reports with Excel export.',
      'Bootstrapped a branded visitor-management back office for another developer from the shared code base.',
    ],
    stack: [
      'Go (Echo, gRPC)',
      'PostgreSQL',
      'Socket.IO',
      'KrakenD',
      'React 18',
      'React-admin',
      'MUI',
      'Firebase',
    ],
    media: {
      cover: {
        alt: 'Parking console listing resident cars and gate transactions',
        caption: 'Parking console: resident cars, requests and gate activity.',
      },
      shots: [
        {
          alt: 'Visitor parking report with summary and export',
          caption: 'Visitor parking report with Excel export.',
        },
      ],
    },
  },
];

export type SmallProject = {
  title: string;
  product: string;
  years: string;
  description: string;
  stack: string[];
};

export const otherWork: SmallProject[] = [
  {
    title: 'HR and manpower planning system',
    product: 'SDO',
    years: '2026',
    description:
      'Manpower-plan screens, an approval workflow with file upload and status updates, and report exports.',
    stack: ['Next.js', 'Redux-Saga', 'styled-components'],
  },
  {
    title: 'Data privacy compliance platform',
    product: 'Themis',
    years: '2025',
    description:
      'Settings screens, consent and cookie-consent reports with export, and reusable tree-select components.',
    stack: ['React 19', 'Fluent UI', 'TanStack Query'],
  },
  {
    title: 'Condominium online booking back office',
    product: 'KLOS (Frasers Property)',
    years: '2024',
    description:
      'Bookings, floor plans, unit imports, receipts and payment cancellation for an online unit-booking site.',
    stack: ['React-admin', 'MUI', 'Vite'],
  },
  {
    title: 'Browser game feature UI',
    product: 'Torn City',
    years: '2022',
    description:
      "Prototyped a team-mission feature, then ported it into the game's React monorepo with dark mode and live data.",
    stack: ['React', 'styled-components', 'Lottie'],
  },
  {
    title: 'Car leasing corporate quotations',
    product: 'BMW Leasing Thailand',
    years: '2022',
    description:
      'Data model, CMS page and a serverless function that generates quotation PDFs for corporate sales.',
    stack: ['Laravel', 'AWS Lambda', 'pdfkit'],
  },
  {
    title: 'Dealer area-marketing map',
    product: 'A.P. Honda',
    years: '2022',
    description:
      'Fixes to sales-report filters and translations on an internal map of dealers and competitors.',
    stack: ['Next.js', 'Google Maps'],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectsUsing(tools: readonly string[]) {
  const patterns = tools.map((tool) => {
    const base = tool
      .replace(/\s*\(.*\)$/, '')
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`^${base}(?![\\w.])`, 'i');
  });
  return projects.filter((project) =>
    project.stack
      .flatMap((entry) => entry.split(/\s+[/+]\s+/))
      .some((entry) => patterns.some((pattern) => pattern.test(entry))),
  );
}

export const profile = {
  name: 'Pongsakorn Sornpetch',
  shortName: 'Pongsakorn',
  role: 'Frontend-focused Full-Stack Developer',
  roleLines: ['Frontend-focused', 'Full-Stack Developer'],
  stackLine: ['4+ years', 'React', 'Next.js', 'TypeScript', 'NestJS', 'Go'],
  location: 'Samut Prakan, Thailand',
  email: 'pongsakorn.sornpetch@gmail.com',
  phone: '+66 97 071 7717',
  phoneHref: 'tel:+66970717717',
  cvPath: '/pongsakorn-sornpetch-cv.pdf',
  intro:
    'I build production web applications and the back-office systems behind them, mostly in React, Next.js and TypeScript, with backend work in NestJS and Go when a feature needs it.',
  about: [
    'For more than four years I have worked on software that operations teams rely on every day: grid-access workflows for an energy utility, pricing and approval engines for an automotive manufacturer, and the admin consoles, resident apps and gate systems that run residential projects.',
    'Most of my time goes into the frontend: multi-step forms, data-heavy tables, dashboards, approval flows and reusable components. I am comfortable following a feature into the API and database, which is where a lot of the performance work in my projects ended up.',
  ],
  greeting: "I'm Pongsakorn.",
  headline: 'I build the business systems operations teams rely on every day.',
  summary:
    '4+ years shipping client systems in energy, automotive, real estate and retail. React, Next.js and TypeScript on the front, NestJS and Go when a feature needs the backend too.',
  availability: 'Open to frontend and full-stack roles',
  portraitPath: '/me/me.png',
};

export type Experience = {
  company: string;
  title: string;
  period: string;
  summary: string;
};

export const experience: Experience[] = [
  {
    company: 'Forviz Co., Ltd.',
    title: 'Full-Stack Developer',
    period: 'Feb 2022 - Present',
    summary:
      'Develop and maintain production web applications, back-office systems and public websites across energy, automotive, real estate and retail clients, with a primary focus on frontend engineering and API integration.',
  },
  {
    company: 'Resolute Management Services',
    title: 'Full-Stack Developer',
    period: 'Sep 2021 - Jan 2022',
    summary:
      'Developed features for a real estate management system in PHP on an in-house framework, and supported clients with troubleshooting and requirement coordination.',
  },
  {
    company: 'Freelance',
    title: 'Web Developer',
    period: 'Oct 2021 - Dec 2021',
    summary:
      'Built a construction-progress tracking platform for a property appraisal company with Vue.js and Node.js/Express, covering daily project monitoring and report generation for 200+ active users.',
  },
];

export type SkillGroup = {
  group: string;
  blurb: string;
  items: string[];
  more: string[];
};

export const skills: SkillGroup[] = [
  {
    group: 'Frontend',
    blurb:
      'Where most of my time goes: multi-step forms, data-heavy tables, dashboards and approval flows.',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React-admin',
      'MUI',
    ],
    more: ['JavaScript', 'Vue.js', 'shadcn/ui', 'Radix UI'],
  },
  {
    group: 'State and data',
    blurb:
      'Keeping long, validated forms and busy screens in step with the API.',
    items: [
      'Redux Toolkit',
      'RTK Query',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
    more: ['Redux-Saga', 'next-intl'],
  },
  {
    group: 'Backend and APIs',
    blurb: 'Following a feature into the API when the screen needs it.',
    items: ['NestJS', 'Go (Echo)', 'gRPC', 'Node.js', 'REST'],
    more: ['Express', 'Strapi', 'Laravel', 'KrakenD'],
  },
  {
    group: 'Data and delivery',
    blurb:
      'The databases behind the screens, and the containers and pipelines that ship them.',
    items: ['PostgreSQL', 'MySQL', 'TypeORM', 'Docker', 'GitLab CI/CD'],
    more: ['AWS', 'Jest'],
  },
  {
    group: 'Integrations',
    blurb:
      'Maps, chat, push notifications, LINE and motion inside client products.',
    items: [
      'Google Maps',
      'Sendbird',
      'Firebase Cloud Messaging',
      'LINE LIFF',
      'Socket.IO',
    ],
    more: ['Maptalks', 'Three.js', 'GSAP', 'Motion', 'ApexCharts'],
  },
];

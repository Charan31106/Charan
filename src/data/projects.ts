export type ProjectCategory = 'ALL' | 'AI' | 'HARDWARE' | 'ROBOTICS' | 'WEB' | 'DATA' | 'SPACE' | 'ACCESSIBILITY';

export type ProjectStatus = 'LIVE' | 'CODE AVAILABLE' | 'PROTOTYPE' | 'HACKATHON PROJECT' | 'EXPLORATION';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory[];
  description: string;
  longDescription?: string;
  status: ProjectStatus;
  technologies: string[];
  architecture?: string[];
  github?: string;
  live?: string;
  featured: boolean;
  visualType: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 'smart-disaster-monitoring',
    title: 'Smart Disaster Monitoring',
    subtitle: 'Intelligent Environmental Sensing',
    category: ['AI', 'HARDWARE', 'DATA'],
    description: 'An intelligent disaster/environment monitoring system combining sensors, edge processing, communication and visualization.',
    longDescription: 'Architecture includes Sensors → ESP32 → Edge/TinyML → LoRa telemetry → Gateway → Cloud/Command Center → Alerts/Visualization.',
    status: 'LIVE',
    technologies: ['ESP32', 'TinyML', 'LoRa', 'Sensors', 'React', 'Node.js'],
    github: 'https://github.com/Charan31106/smart-disaster-monitoring',
    live: 'https://smart-disaster-monitoring.vercel.app/',
    featured: true,
    visualType: 'sensor-network',
    year: '2026',
  },
  {
    id: 'campus-twin',
    title: 'Campus Digital Twin',
    subtitle: 'Data-driven Campus Simulation',
    category: ['AI', 'DATA', 'WEB'],
    description: 'A campus digital twin for exploring campus conditions and simulating what-if scenarios.',
    longDescription: 'Built around the UNIFY → MODEL → ASK → SIMULATE → ACT methodology to analyze and visualize campus metrics.',
    status: 'LIVE',
    technologies: ['React', 'Data Visualization', 'Simulation Models'],
    github: 'https://github.com/Charan31106/campus-twin',
    live: 'https://campus-twin-umber.vercel.app/',
    featured: true,
    visualType: 'campus-visualization',
    year: '2026',
  },
  {
    id: 'debris-eye',
    title: 'DebrisEye',
    subtitle: 'Orbital Debris Risk Platform',
    category: ['SPACE', 'DATA', 'WEB'],
    description: 'An orbital debris and collision-risk analysis platform visualizing space environments.',
    longDescription: 'Utilizes TLE ingestion, SGP4 propagation, orbital mechanics, conjunction analysis, collision probability analysis, Monte Carlo, PostgreSQL, Redis, Express, FastAPI, WebSockets, Three.js, and Docker.',
    status: 'LIVE',
    technologies: ['Three.js', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker'],
    github: 'https://github.com/Charan31106/DebrisEye',
    live: 'https://debris-eye.vercel.app/',
    featured: true,
    visualType: 'orbital-visualization',
    year: '2026',
  },
  {
    id: 'agri-tech',
    title: 'Krishi-Sanjeevini',
    subtitle: 'Farmer Technology Platform',
    category: ['AI', 'WEB'],
    description: 'A Karnataka-focused farmer technology platform providing actionable agricultural insights.',
    longDescription: 'Features include Kannada + English support, voice interaction, AI assistance, crop disease analysis, mandi prices, marketplace, weather/sowing advice, soil NPK advisory, and government schemes.',
    status: 'LIVE',
    technologies: ['React', 'AI', 'Voice Interaction', 'Data APIs'],
    github: 'https://github.com/Charan31106/AGRI_TECH',
    live: 'https://agri-tech-omega.vercel.app/',
    featured: true,
    visualType: 'agriculture-interface',
    year: '2026',
  },
  {
    id: 'synapse-control',
    title: 'Synapse Control',
    subtitle: 'Accessibility Control Interface',
    category: ['ACCESSIBILITY', 'AI', 'WEB'],
    description: 'An accessibility-focused control interface integrating speech and smart-home controls.',
    longDescription: 'Incorporates AAC, TTS, speech recognition, switch scanning, smart-home controls, high contrast, dyslexic typography, colorblind correction, large cursor, and WebAudio.',
    status: 'LIVE',
    technologies: ['React', 'WebAudio', 'Speech Recognition', 'TTS'],
    github: 'https://github.com/Charan31106/synapse-control',
    live: 'https://synapse-control-two.vercel.app/',
    featured: true,
    visualType: 'accessibility-interface',
    year: '2026',
  },
  {
    id: 'vvce-connect',
    title: 'VVCE Connect',
    subtitle: 'AI-driven Campus Utility',
    category: ['WEB', 'AI'],
    description: 'AI-driven faculty locator and campus utility for the VVCE community.',
    status: 'LIVE',
    technologies: ['React', 'AI Integration'],
    live: 'https://vvceconnect-bay.vercel.app/',
    featured: false,
    visualType: 'campus-interface',
    year: '2026',
  },
  {
    id: 'mysuru-insider',
    title: 'Mysuru Insider',
    subtitle: 'Decentralized Tourism Platform',
    category: ['WEB'],
    description: 'A decentralized/local tourism platform promoting hidden destinations and local artisans in Mysuru.',
    status: 'LIVE',
    technologies: ['React', 'Maps API'],
    live: 'https://mysuruinsider.netlify.app/',
    featured: false,
    visualType: 'map-interface',
    year: '2026',
  },
  {
    id: 'thermoguard',
    title: 'ThermoGuard / ThermoSpark',
    subtitle: 'Thermal Protection System',
    category: ['HARDWARE'],
    description: 'Thermal protection system designed to detect electronic overheating and respond with alerts/protection mechanisms.',
    status: 'HACKATHON PROJECT',
    technologies: ['Sensors', 'Microcontrollers', 'Circuit Design'],
    featured: false,
    visualType: 'thermal-sensor',
    year: '2025',
  },
  {
    id: 'line-follower',
    title: 'Autonomous Line-Follower',
    subtitle: 'Robotics Prototype',
    category: ['HARDWARE', 'ROBOTICS'],
    description: 'An autonomous robotics prototype utilizing IR sensors for path navigation.',
    longDescription: 'Built from scratch with Arduino Uno, L298N motor driver, TCRT5000 IR sensors, custom chassis, two BO motors, and 18650 battery setup.',
    status: 'PROTOTYPE',
    technologies: ['Arduino Uno', 'L298N', 'TCRT5000 IR', 'Motors'],
    featured: false,
    visualType: 'robotics-path',
    year: '2025',
  }
];

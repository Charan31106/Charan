export type EvidenceCategory = 'hackathon' | 'hardware' | 'activity' | 'certificate';

export interface EvidenceItem {
  id: string;
  category: EvidenceCategory;
  title: string;
  subtitle?: string;
  type: string; // e.g. "HACKATHON", "HARDWARE PROTOTYPE", "EVENT RECORD"
  year?: string;
  description?: string;
  image?: string; // Optional image URL
  status: 'asset-pending' | 'available';
  tags?: string[];
  featured?: boolean;
}

export const evidenceData: EvidenceItem[] = [
  // HACKATHONS
  {
    id: 'databricks-campus-hackathon',
    category: 'hackathon',
    title: 'Databricks Campus Hackathon',
    type: 'HACKATHON',
    year: '2026',
    status: 'asset-pending',
    tags: ['ENGINEERING SPRINT'],
  },
  {
    id: 'fusionx1',
    category: 'hackathon',
    title: 'FusionX1.0',
    type: 'HACKATHON',
    year: '2026',
    status: 'asset-pending',
    tags: ['TEAM BUILD'],
  },
  {
    id: 'hacksprint6',
    category: 'hackathon',
    title: 'Hacksprint6.0',
    type: 'HACKATHON',
    year: '2026',
    status: 'asset-pending',
    tags: ['EVENT RECORD'],
  },
  {
    id: 'thermospark-2026',
    category: 'hackathon',
    title: 'Thermospark-2026',
    type: 'HACKATHON',
    year: '2026',
    status: 'asset-pending',
    tags: ['TEAM BUILD'],
  },
  
  // HARDWARE
  {
    id: 'thermoguard',
    category: 'hardware',
    title: 'ThermoGuard',
    type: 'HARDWARE PROTOTYPE',
    description: 'A thermal protection concept developed to detect electronic overheating and respond with protective alerts/actions.',
    status: 'asset-pending',
    tags: ['PROTOTYPE LOG', 'PHYSICAL'],
    featured: true,
  },
  {
    id: 'autonomous-line-follower',
    category: 'hardware',
    title: 'Autonomous Line-Follower',
    type: 'ROBOTICS PROTOTYPE',
    description: 'A custom-built autonomous line-following robot developed using sensors, Arduino-based control, motor drivers and a custom chassis.',
    status: 'asset-pending',
    tags: ['Arduino Uno', 'L298N', 'TCRT5000', 'BO motors', '18650 cells', 'custom chassis'],
  },

  // ACTIVITIES
  {
    id: 'ivc-core',
    category: 'activity',
    title: 'Innovators & Visionaries Club',
    subtitle: 'CORE MEMBER',
    type: 'ENGINEERING ACTIVITY',
    description: 'Collaborating with student engineers to design and build autonomous and humanoid robotics projects.',
    status: 'asset-pending',
    tags: ['ROBOTICS', 'COMMUNITY'],
  },

  // CERTIFICATES
  {
    id: 'certificate-placeholder-1',
    category: 'certificate',
    title: 'Documentation Archive',
    type: 'ASSETS READY FOR DOCUMENTATION',
    description: 'Verified project documentation and hackathon certificates will be archived here.',
    status: 'asset-pending',
  }
];

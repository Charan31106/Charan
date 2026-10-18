export type EvidenceCategory = 'hackathon' | 'hardware' | 'activity' | 'certificate';

export interface HackathonEvidenceItem {
  id: string;
  title: string;
  date: string;
  organizer: string;
  location: string;
  achievement: string;
  type: string;
  certificateAsset: string;
}

export const hackathonEvidence: HackathonEvidenceItem[] = [
  {
    id: "databricks-2026",
    title: "Databricks Campus Hackathon",
    date: "Sept 1–3, 2026",
    organizer: "HackCulture & Databricks (Bengaluru Tech Week)",
    location: "BMSCE & RVCE, Bangalore",
    achievement: "Secured position among the Top 10% of participants.",
    type: "National Level Hackathon",
    certificateAsset: "/certificates/databricks-hackathon-2026.jpg"
  },
  {
    id: "fusionx-2026",
    title: "FusionX 1.0",
    date: "May 29–30, 2026",
    organizer: "IEEE PES & PELS Student Branch Chapters, VVCE",
    location: "Vidyavardhaka College of Engineering",
    achievement: "Active participation and hardware/software integration.",
    type: "Hackathon",
    certificateAsset: "/certificates/fusionx-2026.jpg"
  },
  {
    id: "hacksprint-6",
    title: "Hacksprint 6.0",
    date: "May 22–23, 2026",
    organizer: "P.E.S. College of Engineering, Mandya",
    location: "PESCE, Mandya",
    achievement: "Successfully completed 24-hour hackathon.",
    type: "24-Hour National Level Hackathon",
    certificateAsset: "/certificates/hacksprint-6-2026.jpg"
  },
  {
    id: "thermospark-2026",
    title: "THERMOSPARK-2026",
    date: "April 18, 2026",
    organizer: "Dept. of Mechanical Engineering, VVCE",
    location: "Vidyavardhaka College of Engineering",
    achievement: "Completed 9-Hour college-level hackathon.",
    type: "9-Hour College-Level Hackathon",
    certificateAsset: "/certificates/thermospark-2026.jpg"
  }
];

export interface EvidenceItem {
  id: string;
  category: EvidenceCategory;
  title: string;
  subtitle?: string;
  type: string; // e.g. "HACKATHON", "HARDWARE PROTOTYPE", "EVENT RECORD"
  year?: string;
  date?: string;
  organizer?: string;
  location?: string;
  achievement?: string;
  description?: string;
  image?: string; // Certificate or asset image URL
  certificateAsset?: string;
  status: 'asset-pending' | 'available';
  tags?: string[];
  featured?: boolean;
}

export const evidenceData: EvidenceItem[] = [
  // HACKATHONS
  {
    id: 'databricks-2026',
    category: 'hackathon',
    title: 'Databricks Campus Hackathon',
    subtitle: 'HackCulture & Databricks (Bengaluru Tech Week)',
    type: 'National Level Hackathon',
    year: '2026',
    date: 'Sept 1–3, 2026',
    organizer: 'HackCulture & Databricks (Bengaluru Tech Week)',
    location: 'BMSCE & RVCE, Bangalore',
    achievement: 'Secured position among the Top 10% of participants.',
    description: 'Secured position among the Top 10% of participants at Bengaluru Tech Week national-level hackathon organized by HackCulture & Databricks at BMSCE & RVCE, Bangalore.',
    image: '/certificates/databricks-hackathon-2026.jpg',
    certificateAsset: '/certificates/databricks-hackathon-2026.jpg',
    status: 'available',
    tags: ['TOP 10%', 'NATIONAL LEVEL', 'DATABRICKS', 'BANGALORE'],
    featured: true,
  },
  {
    id: 'fusionx-2026',
    category: 'hackathon',
    title: 'FusionX 1.0',
    subtitle: 'IEEE PES & PELS Student Branch Chapters, VVCE',
    type: 'Hackathon',
    year: '2026',
    date: 'May 29–30, 2026',
    organizer: 'IEEE PES & PELS Student Branch Chapters, VVCE',
    location: 'Vidyavardhaka College of Engineering',
    achievement: 'Active participation and hardware/software integration.',
    description: 'Active participation and hardware/software integration in hackathon conducted by IEEE PES & PELS Student Branch Chapters at Vidyavardhaka College of Engineering.',
    image: '/certificates/fusionx-2026.jpg',
    certificateAsset: '/certificates/fusionx-2026.jpg',
    status: 'available',
    tags: ['IEEE PES/PELS', 'HARDWARE/SOFTWARE', 'VVCE'],
  },
  {
    id: 'hacksprint-6',
    category: 'hackathon',
    title: 'Hacksprint 6.0',
    subtitle: 'P.E.S. College of Engineering, Mandya',
    type: '24-Hour National Level Hackathon',
    year: '2026',
    date: 'May 22–23, 2026',
    organizer: 'P.E.S. College of Engineering, Mandya',
    location: 'PESCE, Mandya',
    achievement: 'Successfully completed 24-hour hackathon.',
    description: 'Successfully completed 24-hour national-level hackathon conducted by P.E.S. College of Engineering, Mandya.',
    image: '/certificates/hacksprint-6-2026.jpg',
    certificateAsset: '/certificates/hacksprint-6-2026.jpg',
    status: 'available',
    tags: ['24-HOUR', 'NATIONAL LEVEL', 'PESCE'],
  },
  {
    id: 'thermospark-2026',
    category: 'hackathon',
    title: 'THERMOSPARK-2026',
    subtitle: 'Dept. of Mechanical Engineering, VVCE',
    type: '9-Hour College-Level Hackathon',
    year: '2026',
    date: 'April 18, 2026',
    organizer: 'Dept. of Mechanical Engineering, VVCE',
    location: 'Vidyavardhaka College of Engineering',
    achievement: 'Completed 9-Hour college-level hackathon.',
    description: 'Completed 9-Hour college-level hackathon organized by the Department of Mechanical Engineering at Vidyavardhaka College of Engineering.',
    image: '/certificates/thermospark-2026.jpg',
    certificateAsset: '/certificates/thermospark-2026.jpg',
    status: 'available',
    tags: ['9-HOUR', 'MECHANICAL DEPT', 'VVCE'],
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
    id: 'cert-databricks-2026',
    category: 'certificate',
    title: 'Databricks Campus Hackathon Certificate',
    subtitle: 'Top 10% — Certificate of Appreciation',
    type: 'VERIFIED CREDENTIAL',
    year: '2026',
    date: 'Sept 1–3, 2026',
    organizer: 'HackCulture & Databricks (Bengaluru Tech Week)',
    location: 'BMSCE & RVCE, Bangalore',
    achievement: 'Secured position among the Top 10% of participants.',
    description: 'Official Certificate of Appreciation for outstanding participation in the Databricks Campus Hackathon and securing a position among the Top 10% of participants, held at BMSCE and RVCE, Bangalore.',
    image: '/certificates/databricks-hackathon-2026.jpg',
    certificateAsset: '/certificates/databricks-hackathon-2026.jpg',
    status: 'available',
    tags: ['TOP 10%', 'VERIFIED', 'DATABRICKS'],
    featured: true,
  },
  {
    id: 'cert-fusionx-2026',
    category: 'certificate',
    title: 'FusionX 1.0 Certificate',
    subtitle: 'Certificate of Participation',
    type: 'VERIFIED CREDENTIAL',
    year: '2026',
    date: 'May 29–30, 2026',
    organizer: 'IEEE PES & PELS Student Branch Chapters, VVCE',
    location: 'Vidyavardhaka College of Engineering',
    achievement: 'Active participation and hardware/software integration.',
    description: 'Official Certificate of Participation in FusionX 1.0 Hackathon held on 29th and 30th May 2026, organized by IEEE PES & PELS Student Branch Chapters at VVCE.',
    image: '/certificates/fusionx-2026.jpg',
    certificateAsset: '/certificates/fusionx-2026.jpg',
    status: 'available',
    tags: ['IEEE PES/PELS', 'VERIFIED', 'VVCE'],
  },
  {
    id: 'cert-hacksprint-6',
    category: 'certificate',
    title: 'Hacksprint 6.0 Certificate',
    subtitle: 'Certificate of Participation',
    type: 'VERIFIED CREDENTIAL',
    year: '2026',
    date: 'May 22–23, 2026',
    organizer: 'P.E.S. College of Engineering, Mandya',
    location: 'PESCE, Mandya',
    achievement: 'Successfully completed 24-hour national hackathon.',
    description: 'Official Certificate of Participation in Hacksprint 6.0, a 24-hours National Level Hackathon conducted by P.E.S. College of Engineering, Mandya on 22nd and 23rd May 2026.',
    image: '/certificates/hacksprint-6-2026.jpg',
    certificateAsset: '/certificates/hacksprint-6-2026.jpg',
    status: 'available',
    tags: ['24-HOUR', 'VERIFIED', 'PESCE'],
  },
  {
    id: 'cert-thermospark-2026',
    category: 'certificate',
    title: 'THERMOSPARK-2026 Certificate',
    subtitle: 'Certificate of Participation',
    type: 'VERIFIED CREDENTIAL',
    year: '2026',
    date: 'April 18, 2026',
    organizer: 'Dept. of Mechanical Engineering, VVCE',
    location: 'Vidyavardhaka College of Engineering',
    achievement: 'Completed 9-Hour college-level hackathon.',
    description: 'Official Certificate of Participation in THERMOSPARK-2026, 9-Hour College-Level Hackathon organized by the Department of Mechanical Engineering, Vidyavardhaka College of Engineering on 18 April, 2026.',
    image: '/certificates/thermospark-2026.jpg',
    certificateAsset: '/certificates/thermospark-2026.jpg',
    status: 'available',
    tags: ['9-HOUR', 'VERIFIED', 'VVCE'],
  }
];

export interface JourneyNode {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  domain: string;
}

export const journeyTimeline: JourneyNode[] = [
  {
    id: 'foundation',
    number: '01',
    title: 'FOUNDATION',
    subtitle: 'Learning how systems work.',
    description: 'Built the academic foundation that led toward engineering, electronics, mathematics, and structured problem solving.',
    tags: ['Rainbow Public School (86.4%)', 'BGS PU College (96%)', 'VVCE — B.E. ECE (2029)'],
    domain: 'PHYSICAL / ACADEMIC',
  },
  {
    id: 'experimentation',
    number: '02',
    title: 'EXPERIMENTATION',
    subtitle: 'Turning concepts into hardware.',
    description: 'Started moving beyond theory by building physical systems, experimenting with sensors, microcontrollers, motors, and real-world inputs.',
    tags: ['Arduino', 'ESP32', 'Sensors', 'Circuit Design', 'Robotics'],
    domain: 'HARDWARE / SENSE',
  },
  {
    id: 'system-building',
    number: '03',
    title: 'SYSTEM BUILDING',
    subtitle: 'Connecting hardware, software and real-world problems.',
    description: 'Began combining software with engineering problems, moving from isolated prototypes toward complete systems.',
    tags: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'Smart Disaster Monitoring', 'VVCE Connect'],
    domain: 'SOFTWARE / CONNECT',
  },
  {
    id: 'intelligence',
    number: '04',
    title: 'INTELLIGENCE',
    subtitle: 'Making systems understand and respond.',
    description: 'Started integrating AI, data, simulation, and intelligent interfaces into engineering systems.',
    tags: ['AI', 'Data Systems', 'Computer Vision', 'Digital Twins', 'Campus Digital Twin', 'Krishi-Sanjeevini'],
    domain: 'INTELLIGENCE / COMPUTE',
  },
  {
    id: 'direction',
    number: '05',
    title: 'ENGINEERING DIRECTION',
    subtitle: 'Building systems that connect technology to reality.',
    description: 'Moving toward multidisciplinary engineering where hardware, software, AI, robotics, and real-world constraints meet.',
    tags: ['Databricks Campus Hackathon', 'FusionX1.0', 'Hacksprint6.0', 'Thermospark-2026', 'IVC — CORE MEMBER', 'MULTIDISCIPLINARY SYSTEMS'],
    domain: 'SYSTEMS / DECIDE',
  }
];

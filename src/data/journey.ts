export interface JourneyNode {
  id: string;
  title: string;
  subtitle?: string;
  type: 'education' | 'focus' | 'milestone' | 'current';
  description?: string;
}

export const journeyTimeline: JourneyNode[] = [
  {
    id: 'school',
    title: 'Rainbow Public School',
    subtitle: '10th — 86.4%',
    type: 'education',
  },
  {
    id: 'pu',
    title: 'BGS PU College',
    subtitle: '2nd PU — 96%',
    type: 'education',
  },
  {
    id: 'vvce',
    title: 'Vidyavardhaka College of Engineering',
    subtitle: 'B.E. Electronics & Communication Engineering',
    type: 'education',
    description: 'Expected Graduation: 2029'
  },
  {
    id: 'ece',
    title: 'ECE Core Foundation',
    type: 'focus',
  },
  {
    id: 'robotics',
    title: 'Hardware & Robotics',
    type: 'focus',
  },
  {
    id: 'web',
    title: 'Web Development',
    type: 'focus',
  },
  {
    id: 'ai-data',
    title: 'AI & Data Systems',
    type: 'focus',
  },
  {
    id: 'hackathons',
    title: 'Hackathons & Competitions',
    type: 'milestone',
  },
  {
    id: 'ivc',
    title: 'Innovators & Visionaries Club',
    subtitle: 'Core Member',
    type: 'milestone',
  },
  {
    id: 'current',
    title: 'Building Complex Systems',
    type: 'current',
  }
];

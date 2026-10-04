export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'hardware',
    title: 'HARDWARE',
    skills: ['Arduino', 'ESP32', 'Circuit Design', 'Sensors', 'Robotics']
  },
  {
    id: 'software',
    title: 'SOFTWARE',
    skills: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'JavaScript', 'C/C++', 'Python']
  },
  {
    id: 'intelligence',
    title: 'INTELLIGENCE',
    skills: ['AI', 'TinyML', 'Computer Vision', 'Data Systems', 'Automation']
  },
  {
    id: 'tools',
    title: 'TOOLS',
    skills: ['GitHub', 'Vercel', 'MATLAB', 'AI Workflow Tools']
  }
];

export const skillRelationships: Record<string, string[]> = {
  'ESP32': ['Sensors', 'IoT', 'Edge Processing', 'Disaster Monitoring'],
  'React': ['Web', 'Data Visualization', 'Interactive UI'],
  'Python': ['AI', 'FastAPI', 'Data Systems', 'Automation'],
  'C/C++': ['Arduino', 'ESP32', 'Robotics', 'TinyML'],
  'AI': ['Computer Vision', 'Automation', 'TinyML', 'Data Systems'],
  'Sensors': ['Circuit Design', 'Robotics', 'ESP32', 'Arduino'],
  'Robotics': ['Sensors', 'C/C++', 'Arduino', 'Automation']
};

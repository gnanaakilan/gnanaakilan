// All content below is taken from Gnana Akilan's resume.
import {
  SiArcgis,
  SiOpenlayers,
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiDotnet,
  SiQgis,
  SiJupyter,
  SiGit,
} from 'react-icons/si';
import {
  LuServer,
  LuCloud,
  LuPuzzle,
  LuLayoutDashboard,
  LuGlobe,
  LuMap,
  LuNetwork,
  LuLayers,
  LuCodeXml,
  LuDatabase,
  LuSparkles,
  LuCode,
  LuSquareCode,
  LuRefreshCw,
  LuClipboardCheck,
  LuUsers,
  LuRocket,
  LuLightbulb,
  LuTrendingUp,
  LuTarget,
  LuZap,
  LuSearch,
  LuFileSpreadsheet,
  LuShieldCheck,
  LuHandshake,
  LuChartLine,
  LuWorkflow,
  LuBriefcase,
  LuAward,
} from 'react-icons/lu';

export const profile = {
  name: 'Gnana Akilan',
  title: 'Lead GIS Developer',
  subtitle: 'Full Stack Developer',
  email: 'gnanaakilan93@gmail.com',
  phone: '+91-9029233381',
  city: 'Mumbai, India',
  location: 'Mumbai 400017, Maharashtra, India',
  linkedin: 'https://www.linkedin.com/in/gnanaakilan',
  // Approximate centre of Mumbai PIN 400017
  coords: [19.0368, 72.8566],
  intro:
    'I turn spatial data into Web GIS applications that help utilities run their electric and water networks.',
  summary:
    'Lead GIS Developer with 9+ years of experience building and customizing Web GIS applications using ArcGIS Experience Builder, ArcGIS JS API, Enterprise and open-source technologies.',
  summary2:
    'I develop custom widgets, automate GIS workflows with Python (ArcPy), and deliver scalable, end-to-end solutions for utility domain projects.',
};

export const stats = [
  { value: '9+', label: 'Years of experience', icon: LuBriefcase },
  { value: '4+', label: 'State government clients', icon: LuAward },
  { value: '10+', label: 'Developers mentored', icon: LuUsers },
  { value: '80%', label: 'Faster map configuration', icon: LuZap },
];

export const services = [
  {
    icon: LuMap,
    title: 'Web GIS Applications',
    text: 'Interactive apps with ArcGIS Experience Builder, Web AppBuilder and the ArcGIS JS API.',
  },
  {
    icon: LuWorkflow,
    title: 'GIS Automation',
    text: 'Python (ArcPy) tools that validate data and configure web maps automatically.',
  },
  {
    icon: LuLayers,
    title: 'Enterprise GIS',
    text: 'Publishing services on ArcGIS Enterprise and Server with versioned PostgreSQL geodatabases.',
  },
  {
    icon: LuUsers,
    title: 'Team Leadership',
    text: 'Leading and mentoring developers from requirements through UAT and client demos.',
  },
];

export const skillGroups = [
  {
    name: 'GIS Platforms',
    color: '#0f9b8e',
    items: [
      { name: 'ArcGIS Enterprise', icon: SiArcgis },
      { name: 'ArcGIS Server', icon: LuServer },
      { name: 'ArcGIS Online', icon: LuCloud },
      { name: 'Experience Builder', icon: LuPuzzle },
      { name: 'Web AppBuilder', icon: LuLayoutDashboard },
      { name: 'GE Smallworld', icon: LuGlobe },
    ],
  },
  {
    name: 'Web Mapping',
    color: '#3b82f6',
    items: [
      { name: 'ArcGIS JS API', icon: LuMap },
      { name: 'OpenLayers', icon: SiOpenlayers },
      { name: 'GeoServer', icon: LuLayers },
      { name: 'REST Services', icon: LuNetwork },
    ],
  },
  {
    name: 'Languages & Frameworks',
    color: '#e76f51',
    items: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: SiPython },
      { name: 'C#', icon: LuCodeXml },
      { name: 'SQL', icon: LuDatabase },
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: '.NET Core', icon: SiDotnet },
      { name: 'Magik', icon: LuSparkles },
    ],
  },
  {
    name: 'Data & Tools',
    color: '#8b5cf6',
    items: [
      { name: 'ArcPy', icon: SiPython },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'QGIS', icon: SiQgis },
      { name: 'Jupyter', icon: SiJupyter },
      { name: 'VS Code', icon: LuSquareCode },
      { name: 'Git', icon: SiGit },
      { name: 'Agile', icon: LuRefreshCw },
      { name: 'UAT / SIT', icon: LuClipboardCheck },
    ],
  },
];

export const softSkills = [
  { name: 'Team Leadership & Mentoring', icon: LuUsers },
  { name: 'Adaptable to New Tech', icon: LuRocket },
  { name: 'Understands Business Needs', icon: LuLightbulb },
  { name: 'Continuous Learning', icon: LuTrendingUp },
  { name: 'Decision-Making & Ownership', icon: LuTarget },
];

export const experience = [
  {
    role: 'Lead GIS Developer',
    company: 'CS Tech AI',
    period: 'Nov 2019 – Present',
    current: true,
    highlights: [
      'Delivered Web GIS solutions for 4+ state government clients.',
      'Architected end-to-end GIS solutions for electric & water utilities.',
      'Built reporting, tracing and search modules that cut manual effort by 75%.',
      'Lead a team of 10+ developers and mentor them in GIS best practices.',
    ],
    more: [
      'Developed and customized ArcGIS Experience Builder widgets for project-specific needs.',
      'Automated data validation with Python (ArcPy), improving accuracy and reducing manual QA.',
      'Designed ArcGIS Dashboards and Web Maps for real-time utility data.',
      'Built an Excel-driven web map configuration tool, cutting setup time by 80%.',
      'Integrated services with the PM Gati Shakti initiative for cross-system data exchange.',
      'Published and managed services on ArcGIS Enterprise and ArcGIS Server.',
      'Worked with versioned PostgreSQL enterprise geodatabases.',
      'Supported UAT, SIT and client demonstrations.',
      'Developed and upgraded GE Smallworld GIS modules.',
    ],
  },
  {
    role: 'Software Engineer',
    company: '63 Moon Technologies',
    period: 'Nov 2018 – Nov 2019',
    highlights: [
      'Developed features for a real-time stock trading platform.',
      'Improved performance through code optimization and refined the UI/UX.',
    ],
  },
  {
    role: 'Senior Software Developer',
    company: 'Omkar Enterprises',
    period: 'Aug 2017 – Nov 2018',
    highlights: [
      'Developed GIS applications using ArcGIS Web AppBuilder and Web APIs.',
      'Implemented backend services for spatial data processing.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Reliance Energy',
    period: 'Jul 2016 – Aug 2017',
    highlights: [
      'Built web-based GIS applications using Dojo and ASP.NET.',
      'Designed custom map tools for spatial analysis and visualization.',
    ],
  },
];

export const projects = [
  {
    icon: LuNetwork,
    title: 'Utility Network Web GIS',
    text: 'End-to-end GIS for electric and water utilities, delivered to state government clients.',
    metric: '4+ state clients',
    color: '#0f9b8e',
  },
  {
    icon: LuSearch,
    title: 'Tracing, Search & Reporting',
    text: 'Custom Experience Builder widgets for network tracing, search and reports.',
    metric: '75% less manual effort',
    color: '#3b82f6',
  },
  {
    icon: LuFileSpreadsheet,
    title: 'Excel Web Map Configurator',
    text: 'A Python tool that sets up web maps straight from an Excel sheet.',
    metric: '80% faster setup',
    color: '#e76f51',
  },
  {
    icon: LuShieldCheck,
    title: 'ArcPy Data Validation',
    text: 'Automated checks that keep GIS data accurate with far less manual QA.',
    metric: 'Higher data accuracy',
    color: '#8b5cf6',
  },
  {
    icon: LuHandshake,
    title: 'PM Gati Shakti Integration',
    text: 'Service integrations enabling seamless geospatial data exchange across systems.',
    metric: 'National initiative',
    color: '#f4a261',
  },
  {
    icon: LuChartLine,
    title: 'Real-time Utility Dashboards',
    text: 'ArcGIS Dashboards and Web Maps for live visualization of utility data.',
    metric: 'Live monitoring',
    color: '#06b6d4',
  },
];

export const education = [
  {
    school: 'St. Andrews of Arts, Science & Commerce',
    degree: 'Bachelor of Information Technology',
    place: 'Mumbai, Maharashtra',
    period: '2013 – 2016',
  },
  {
    school: 'NIIT Institute',
    degree: 'P.G. in Software Engineering (Java)',
    place: 'Mumbai, Maharashtra',
    period: '2016',
  },
];

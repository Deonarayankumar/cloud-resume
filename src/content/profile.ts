export const profile = {
  name: 'Deonarayan Kumar',
  firstName: 'Deonarayan',
  title: 'DevOps Engineer',
  tagline: 'A DevOps Engineer',
  phone: '+91-8340520797',
  email: 'deonarayan0808@gmail.com',
  linkedin: 'https://linkedin.com/in/deonarayan-kumar-b73052186',
  github: 'https://github.com/Deonarayankumar',
  location: 'India',
};

export const heroIntro =
  'I am a DevOps Engineer with hands-on enterprise experience in CI/CD, release engineering, and cloud operations across AWS and Azure, currently working with Hexaware Technologies Limited.';

export const summary =
  'An experienced DevOps Engineer and technologist, I specialize in delivering stable, high-impact solutions across CI/CD automation, infrastructure as code, container orchestration, and observability. With expertise across Jenkins, Azure DevOps, Terraform, Docker, Kubernetes, and Python automation, I bring enthusiasm and dedication to every platform engineering challenge.';

export const stats = [
  { value: '2+', label: 'YEARS OF EXPERIENCE' },
  { value: '3+', label: 'ADVANCED PROJECTS' },
  { value: '50+', label: 'REPOS STANDARDISED' },
];

export const education = {
  degree: 'Bachelor of Technology, Computer Science Engineering',
  institution: 'Technocrats Institute of Technology',
  period: '2019 – 2023',
  detail: 'CGPA: 8.92 / 10',
};

export const skillIcons = [
  'Jenkins',
  'Azure DevOps',
  'Terraform',
  'Docker',
  'Kubernetes',
  'Python',
  'AWS',
  'Azure',
  'SonarQube',
  'JFrog',
  'Prometheus',
  'Grafana',
  'GitHub',
  'Linux',
  'Bash',
  'Octopus Deploy',
];

export const experience = [
  {
    company: 'Hexaware Technologies Limited',
    role: 'Cloud & DevOps Engineer',
    period: 'Oct 2023 – Present',
    location: 'India',
    engagements: [
      {
        client: 'AXA – Enterprise CI/CD & DevOps Platform',
        period: 'Jan 2025 – Present',
        highlights: [
          'Engineered and supported enterprise CI/CD pipelines and release workflows using Jenkins, Azure DevOps Pipelines, AWS CodeBuild and Octopus Deploy, supporting 10+ application teams.',
          'Automated build, deployment and operational workflows with Python and Jenkins pipeline development, reducing repetitive manual intervention and improving release consistency.',
          'Implemented software delivery governance using JFrog Artifactory policies, SonarQube quality gates, licence-compliance checks and standardised pipeline controls.',
          'Maintained approximately 95% SLA through proactive monitoring, incident troubleshooting, patch management, platform upgrades and Linux administration.',
          'Automated repository discovery and compliance checks, enabling 50+ codebases to adopt standardised CI/CD workflows and improving quality-scan coverage.',
          'Redesigned release workflows during Digital.ai deprecation and consolidated release management into Octopus Deploy, contributing to recurring licence savings.',
        ],
      },
      {
        client: 'Kirkland & Ellis – Azure Cloud Migration',
        period: 'Jan 2024 – Dec 2024',
        highlights: [
          'Supported Azure cloud migration using Terraform-based Infrastructure as Code (IaC), provisioning repeatable Linux virtual machines, networking and storage resources.',
          'Applied Terraform to improve configuration consistency and reduce manual environment provisioning effort under senior engineering guidance.',
          'Supported observability implementation with Prometheus and Grafana, including metrics, alert thresholds and performance troubleshooting.',
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: 'Multi-Service Python CI/CD Pipeline',
    repo: 'devops-e2e-python-pipeline',
    description:
      'End-to-end delivery platform with FastAPI API and background worker services, Jenkins shared library, SonarQube quality gates, and JFrog artifact promotion.',
    stack: ['Python', 'Jenkins', 'JFrog', 'SonarQube', 'Docker'],
    gradient: 'from-blue-900/40 to-cyan-900/20',
    link: 'https://github.com/Deonarayankumar/devops-e2e-python-pipeline',
  },
  {
    name: 'Modular Terraform Azure Platform',
    repo: 'devops-e2e-terraform-azure',
    description:
      'Reusable Terraform modules for network, app, and monitoring with dev/staging/prod environments, Checkov gates, and Azure DevOps approvals.',
    stack: ['Terraform', 'Azure', 'Checkov', 'Key Vault'],
    gradient: 'from-violet-900/40 to-purple-900/20',
    link: 'https://github.com/Deonarayankumar/devops-e2e-terraform-azure',
  },
  {
    name: 'Helm-Based AKS Delivery',
    repo: 'devops-e2e-k8s-delivery',
    description:
      'Containerised API deployed to AKS via Helm with environment overlays, HPA, health probes, and automated rollback workflows.',
    stack: ['AKS', 'Helm', 'Docker', 'Azure DevOps'],
    gradient: 'from-emerald-900/40 to-teal-900/20',
    link: 'https://github.com/Deonarayankumar/devops-e2e-k8s-delivery',
  },
];

export const certifications = [
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
  },
  {
    name: 'PCEP – Certified Entry-Level Python Programmer',
    issuer: 'Python Institute',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

export const profile = {
  name: 'Deonarayan Kumar',
  firstName: 'Deonarayan',
  title: 'DevOps Engineer',
  tagline: 'A DevSecOps Enthusiast',
  headline: 'Building reliable CI/CD platforms at scale',
  roleLine: 'DevOps Engineer | DevSecOps Enthusiast | Based in India',
  phone: '+91-8340520797',
  email: 'deonarayan0808@gmail.com',
  linkedin: 'https://www.linkedin.com/in/deonarayan-kumar8',
  github: 'https://github.com/Deonarayankumar',
  location: 'India',
  resumeUrl: '/resume.pdf',
};

export const clients = ['Hexaware', 'AXA', 'Kirkland & Ellis'];

export const heroIntro =
  'I partner with enterprise teams to design and operate CI/CD platforms, cloud infrastructure, and release workflows that improve delivery speed without sacrificing reliability, security, or governance.';

export const summary =
  'An experienced DevOps Engineer and technologist, I specialize in delivering stable, high-impact solutions across CI/CD automation, infrastructure as code, container orchestration, and observability. With expertise across Jenkins, Azure DevOps, Terraform, Docker, Kubernetes, and Python automation, I bring enthusiasm and dedication to every platform engineering challenge.';

export const aboutNarrative = {
  enterprise:
    'On the enterprise side: at Hexaware I support AXA with enterprise CI/CD and release engineering across Jenkins, Azure DevOps, AWS CodeBuild, and Octopus Deploy — enabling 10+ application teams, standardising delivery for 50+ repositories, and maintaining approximately 95% SLA through proactive platform operations.',
  cloud:
    'On the cloud migration side: I supported Kirkland & Ellis with Azure infrastructure provisioning through Terraform, repeatable Linux VM builds, networking, storage, and observability with Prometheus and Grafana under senior engineering guidance.',
};

export const stats = [
  { value: '3', label: 'Years of experience' },
  { value: '5+', label: 'Projects completed' },
  { value: '10+', label: 'Application teams supported' },
];

export const projectCategories = ['All', 'CI/CD', 'Cloud / IaC', 'Kubernetes'] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const upskillGoals = [
  {
    title: 'AI-Integrated DevSecOps Practices',
    detail:
      'Embed AI-assisted threat detection, automated compliance checks, and intelligent pipeline guardrails into CI/CD workflows — bridging DevOps velocity with security-by-design.',
    tags: ['AI/ML', 'DevSecOps', 'Pipeline Automation', 'Security Gates'],
    icon: '🛡️',
  },
  {
    title: 'Advanced DevOps Certifications',
    detail:
      'Pursue industry-recognised credentials to validate deep platform expertise and stay aligned with enterprise cloud standards.',
    tags: ['CKA', 'Azure DevOps Engineer Expert', 'AWS DevOps Engineer', 'Terraform Associate'],
    icon: '🎓',
  },
];

export const education = {
  degree: 'Bachelor of Technology, Computer Science Engineering',
  institution: 'Technocrats Institute of Technology',
  period: '2019 – 2023',
  detail: 'CGPA: 8.92 / 10',
};

export const experience = [
  {
    company: 'Hexaware Technologies Limited',
    role: 'Cloud & DevOps Engineer',
    period: 'Oct 2023 – Present',
    location: 'India',
    logoLabel: 'HEXAWARE',
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
    gradient: 'from-blue-900/60 to-blue-800/30',
    link: 'https://github.com/Deonarayankumar/devops-e2e-python-pipeline',
    category: 'CI/CD' as const,
    badge: 'Shipped',
    client: 'Portfolio showcase',
  },
  {
    name: 'Modular Terraform Azure Platform',
    repo: 'devops-e2e-terraform-azure',
    description:
      'Reusable Terraform modules for network, app, and monitoring with dev/staging/prod environments, Checkov gates, and Azure DevOps approvals.',
    stack: ['Terraform', 'Azure', 'Checkov', 'Key Vault'],
    gradient: 'from-indigo-900/60 to-blue-900/30',
    link: 'https://github.com/Deonarayankumar/devops-e2e-terraform-azure',
    category: 'Cloud / IaC' as const,
    badge: 'Enterprise',
    client: 'Azure platform engineering',
  },
  {
    name: 'Helm-Based AKS Delivery',
    repo: 'devops-e2e-k8s-delivery',
    description:
      'Containerised API deployed to AKS via Helm with environment overlays, HPA, health probes, and automated rollback workflows.',
    stack: ['AKS', 'Helm', 'Docker', 'Azure DevOps'],
    gradient: 'from-sky-900/60 to-blue-800/30',
    link: 'https://github.com/Deonarayankumar/devops-e2e-k8s-delivery',
    category: 'Kubernetes' as const,
    badge: 'Shipped',
    client: 'Kubernetes delivery platform',
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
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

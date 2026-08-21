export const profile = {
  name: 'Deonarayan Kumar',
  title: 'DevOps Engineer',
  tagline: 'CI/CD · Automation · Kubernetes',
  phone: '+91-8340520797',
  email: 'deonarayan0808@gmail.com',
  linkedin: 'https://linkedin.com/in/deonarayan-kumar',
  github: 'https://github.com/Deonarayankumar',
  location: 'India',
};

export const summary =
  'DevOps Engineer with hands-on enterprise experience in CI/CD, release engineering, Infrastructure as Code (IaC), cloud operations, container orchestration, automation, observability and Linux administration across AWS and Azure. Experienced with Jenkins, Azure DevOps, AWS CodeBuild, Octopus Deploy, Terraform, Docker, Kubernetes, Python, SonarQube, JFrog Artifactory, Prometheus, Grafana and CloudWatch. Supported 10+ application teams, standardised delivery for 50+ repositories, maintained approximately 95% SLA and contributed to release-platform consolidation and recurring licence savings.';

export const education = {
  degree: 'Bachelor of Technology, Computer Science Engineering',
  institution: 'Technocrats Institute of Technology',
  period: '2019 – 2023',
  detail: 'CGPA: 8.92 / 10',
};

export const skillGroups = [
  {
    category: 'DevOps / CI/CD',
    skills: [
      'Jenkins',
      'Azure DevOps Pipelines',
      'AWS CodeBuild',
      'Octopus Deploy',
      'Release Engineering',
    ],
  },
  {
    category: 'Infrastructure as Code',
    skills: ['Terraform', 'Chef', 'Infrastructure Provisioning'],
  },
  {
    category: 'Containers',
    skills: ['Docker', 'Kubernetes', 'HPA', 'Liveness/Readiness Probes'],
  },
  {
    category: 'Automation',
    skills: ['Python', 'Bash Shell Scripting', 'Pipeline Automation'],
  },
  {
    category: 'Artifact / Quality',
    skills: ['JFrog Artifactory', 'SonarQube', 'Quality Gates'],
  },
  {
    category: 'Observability',
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'AWS CloudWatch'],
  },
  {
    category: 'Cloud',
    skills: ['AWS', 'Microsoft Azure'],
  },
  {
    category: 'Systems / SCM',
    skills: ['Linux (RHEL/Ubuntu)', 'Windows Server', 'Git', 'GitHub'],
  },
];

export const experience = [
  {
    company: 'Hexaware Technologies Limited',
    role: 'Cloud & DevOps Engineer',
    period: 'Oct 2023 – Present',
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
      'End-to-end delivery platform with FastAPI API and background worker services, Jenkins shared library, SonarQube quality gates, JFrog artifact promotion, and Azure App Service deployment.',
    stack: ['Python', 'FastAPI', 'Jenkins', 'JFrog', 'SonarQube', 'Docker', 'Azure'],
    highlights: [
      'Two-service architecture with shared pipeline library for build, scan, and promote stages.',
      'JFrog dev-to-prod artifact promotion with Trivy image scanning.',
      'Post-deploy smoke tests and documented rollback procedures.',
    ],
    link: 'https://github.com/Deonarayankumar/devops-e2e-python-pipeline',
  },
  {
    name: 'Modular Terraform Azure Platform',
    repo: 'devops-e2e-terraform-azure',
    description:
      'Reusable Terraform modules for network, app, and monitoring layers with dev/staging/prod environments, Checkov security gates, and Azure DevOps approval workflows.',
    stack: ['Terraform', 'Azure', 'Checkov', 'Azure DevOps', 'Key Vault'],
    highlights: [
      'Multi-environment IaC with plan artifacts on PR and gated applies on main.',
      'Consistent tagging schema and Key Vault secret references.',
      'Drift detection script for operational visibility.',
    ],
    link: 'https://github.com/Deonarayankumar/devops-e2e-terraform-azure',
  },
  {
    name: 'Helm-Based AKS Delivery',
    repo: 'devops-e2e-k8s-delivery',
    description:
      'Containerised API deployed to AKS via Helm with dev/staging/prod value overlays, HPA, health probes, staging/prod approval gates, and automated rollback.',
    stack: ['AKS', 'Helm', 'Docker', 'Azure DevOps', 'ACR'],
    highlights: [
      'Helm chart with environment-specific overlays and ingress configuration.',
      'Azure DevOps pipeline: build → push ACR → Helm upgrade with smoke tests.',
      'Documented rollback runbook for failed deployments.',
    ],
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
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

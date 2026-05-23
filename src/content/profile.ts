export const profile = {
  name: 'Deonarayan',
  title: 'Cloud DevOps Engineer',
  location: 'Remote',
  summary:
    'Cloud DevOps engineer focused on CI/CD automation, Kubernetes delivery, and infrastructure as code across Azure and AWS.',
  email: 'deonarayan@example.com',
  linkedin: 'https://linkedin.com/in/deonarayan',
  github: 'https://github.com/deonarayan',
};

export const skills = [
  'Azure DevOps',
  'Jenkins',
  'Kubernetes',
  'Terraform',
  'Docker',
  'Python',
  'Bash',
  'SonarQube',
  'JFrog Artifactory',
  'GitHub Actions',
  'AWS',
  'Prometheus',
];

export const experience = [
  {
    role: 'Cloud DevOps Engineer',
    company: 'Portfolio Labs',
    period: '2024 — Present',
    highlights: [
      'Designed multi-stage CI/CD pipelines with quality gates and artifact promotion',
      'Managed AKS workloads with Kustomize overlays for dev/staging/prod',
      'Authored Terraform modules for repeatable Azure landing zones',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'Platform Team',
    period: '2022 — 2024',
    highlights: [
      'Migrated Jenkins jobs to declarative pipelines with shared libraries',
      'Implemented observability stack with Prometheus and Grafana dashboards',
      'Reduced deployment lead time by 40% through pipeline parallelization',
    ],
  },
];

export const projects = [
  {
    name: 'devops-cicd-tools-lab',
    description: 'Jenkins + Azure DevOps + JFrog + SonarQube integration with Flask sample app.',
    stack: ['Jenkins', 'Azure DevOps', 'JFrog', 'SonarQube', 'Python'],
    link: 'https://github.com/deonarayan/devops-cicd-tools-lab',
  },
  {
    name: 'devops-kubernetes-lab',
    description: 'Kustomize-based K8s delivery with dev/staging overlays and smoke tests.',
    stack: ['Kubernetes', 'Kustomize', 'Nginx Ingress'],
    link: 'https://github.com/deonarayan/devops-kubernetes-lab',
  },
  {
    name: 'devops-azure-lab',
    description: 'Terraform modules for Azure networking and App Service deployment.',
    stack: ['Azure', 'Terraform'],
    link: 'https://github.com/deonarayan/devops-azure-lab',
  },
  {
    name: 'devops-e2e-k8s-delivery',
    description: 'Helm-based AKS delivery pipeline with automated rollback.',
    stack: ['AKS', 'Helm', 'Azure DevOps'],
    link: 'https://github.com/deonarayan/devops-e2e-k8s-delivery',
  },
];

import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
import {
  SiDocker,
  SiGithub,
  SiGrafana,
  SiGnubash,
  SiJenkins,
  SiJfrog,
  SiKubernetes,
  SiLinux,
  SiPrometheus,
  SiPython,
  SiSonarqubecloud,
  SiTerraform,
} from 'react-icons/si';
import { VscAzure, VscAzureDevops } from 'react-icons/vsc';

export type SkillItem = {
  name: string;
  Icon: IconType;
  color: string;
};

export const skills: SkillItem[] = [
  { name: 'Jenkins', Icon: SiJenkins, color: '#D24939' },
  { name: 'Azure DevOps', Icon: VscAzureDevops, color: '#0078D4' },
  { name: 'Terraform', Icon: SiTerraform, color: '#7B42BC' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'Azure', Icon: VscAzure, color: '#0078D4' },
  { name: 'SonarQube', Icon: SiSonarqubecloud, color: '#4E9BCD' },
  { name: 'JFrog', Icon: SiJfrog, color: '#40BE46' },
  { name: 'Prometheus', Icon: SiPrometheus, color: '#E6522C' },
  { name: 'Grafana', Icon: SiGrafana, color: '#F46800' },
  { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
  { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
  { name: 'Bash', Icon: SiGnubash, color: '#4EAA25' },
];

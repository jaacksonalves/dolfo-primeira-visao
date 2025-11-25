import { LucideIcon } from 'lucide-react';

export interface MethodStep {
  letter: string;
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ChecklistItem {
  text: string;
  checked: boolean;
}
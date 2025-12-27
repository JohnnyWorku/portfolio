import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface SkillMetric {
  name: string;
  value: number;
  fullMark: number;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: 'award' | 'badge' | 'certificate';
  link?: string;
}
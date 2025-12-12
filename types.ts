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
  price?: string;
  description: string;
  features: string[];
  recommended?: boolean;
}
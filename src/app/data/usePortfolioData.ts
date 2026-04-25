import { useState, useEffect } from 'react';
import type { PortfolioData } from './types';

const FALLBACK: PortfolioData = {
  profile: {
    name: 'Tu Nombre',
    title: 'Full Stack Developer',
    photo: '',
    description: 'Construyo productos digitales que combinan diseño y tecnología. Especializado en aplicaciones web de alto rendimiento y experiencias de usuario que realmente importan.',
    badges: ['React', 'TypeScript', 'Python', 'FastAPI', 'Tailwind'],
    stats: { years: 5, projects: 30, companies: 8 },
    availableText: 'Disponible para proyectos',
  },
  projects: [
    {
      title: 'Dashboard Analytics',
      category: 'Data',
      image: '',
      problem: 'El equipo tardaba horas en generar reportes manuales.',
      solution: 'Plataforma de visualización en tiempo real con Power BI.',
      result: '-60% tiempo de reportes. Adoptado por todo el equipo.',
      tags: ['Power BI', 'SQL', 'Python'],
      demoUrl: '',
      githubUrl: '',
    },
  ],
  experience: [
    {
      company: 'Tu Empresa',
      role: 'Senior Developer',
      period: '2022 — Presente',
      description: 'Desarrollé soluciones de alto impacto para clientes enterprise en LATAM.',
    },
  ],
  contact: {
    email: 'tu@email.com',
    linkedin: '',
    github: '',
    twitter: '',
  },
};

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/portfolio-data/data.json')
      .then(r => {
        if (!r.ok) throw new Error('No data.json');
        return r.json();
      })
      .then((d: PortfolioData) => setData(d))
      .catch(() => setData(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  return { data: data ?? FALLBACK, loading };
}

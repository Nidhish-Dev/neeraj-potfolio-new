import React from 'react';
import ProjectCard from './ProjectCard';

// Define the type for each project object
interface Project {
  name: string;
  tags: string[];
  bgImage: string;
  link: string;
}

// Define the props type for ProjectCard component (for reference, unchanged)
interface ProjectCardProps {
  name: string;
  tags: string[];
  bgImage: string;
  link: string;
}

const Projects: React.FC = () => {
  const projectData: Project[] = [
    {
      name: 'Fashion Trend Analyzer',
      tags: ['UX Research', 'UI Design', 'Mobile App', 'Data visualization'],
      bgImage: '/MM.png',
      link: '/projects/modamuse',
    },
    {
      name: 'Accommodation App',
      tags: ['UX Research', 'UI Design', 'Branding', 'Mobile App'],
      bgImage: '/HH.png',
      link: '/projects/homehive',
    },
    {
      name: 'Meditation Monitoring',
      tags: ['Data Visualization', 'UX Research', 'Mobile App'],
      bgImage: '/MA.png',
      link: '/projects/zenify',
    },
    {
      name: 'Updating Soon',
      tags: ['Master Thesis', 'VR Application'],
      bgImage: '/VR.png',
      link: '/',
    },
  ];

  return (
    <section className="min-h-screen flex justify-center items-center py-20">
      <div className="w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              tags={project.tags}
              bgImage={project.bgImage}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
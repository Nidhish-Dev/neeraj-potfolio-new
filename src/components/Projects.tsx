import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  const projectData = [
    {
      name: 'Fashion Trend Analyzer',
      tags: ['UX Research', 'UI Design', 'Mobile App', 'Data visualization'],
      bgImage: '/MM.png',
      link: '/projects/modamuse'
    },
    {
      name: 'Accommodation App',
      tags: ['UX Research', 'UI Design', 'Branding', 'Mobile App'],
      bgImage: '/HH.png',
      link: '/projects/homehive'
    },

    {
      name: 'Meditation Monitoring',
      tags: ['Data Visualization', 'UX Research', 'Mobile App'],
      bgImage: '/MA.png',
      link: '/projects/zenify'
    },
     {
      name: 'Updating Soon',
      tags: ['Master Thesis', 'VR Application',],
      bgImage: 'VR.png',
      link: '/'
    },

  ]

  return (
    <div className="w-full px-10 py-20 flex flex-wrap justify-around gap-y-10">
      {projectData.map((project, index) => (
        <div key={index} className="w-full md:w-[45%] flex justify-center">
          <ProjectCard
            name={project.name}
            tags={project.tags}
            bgImage={project.bgImage}
            link={project.link}
          />
        </div>
      ))}
    </div>
  )
}

export default Projects

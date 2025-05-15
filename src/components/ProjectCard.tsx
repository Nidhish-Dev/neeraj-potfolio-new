import React from 'react'
import Link from 'next/link'

interface ProjectCardProps {
  name: string
  tags: string[]
  bgImage: string
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, tags, bgImage, link }) => {
  return (
    <Link href={link} passHref>
      <div
        className="relative w-[580px] h-[400px] rounded-4xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-300"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay with z-10 */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 54.81%)'
          }}
        />

        {/* Content on top with z-20 */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full px-6 text-center z-20">
          <div className="max-w-md w-full">
            <h3 className="text-4xl font-medium mb-4">{name}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {tags.map((tag, idx) => (
                <span key={idx} className="text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard

import React, { useState } from 'react';
import '../../styles/Experience.css';
import dimfund from '../../assets/images/logos/dimfund.png';
import dell from '../../assets/images/logos/dell.png';
import hmc from '../../assets/images/logos/hmc.png';
import shareventures from '../../assets/images/logos/sv.jpeg';
import planckton from '../../assets/images/logos/planckton.jpeg';
import pdorm from '../../assets/images/logos/p_ai.jpeg';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Dimensional Fund Advisors',
    years: 'Summer 2025',
    logo: dimfund,
  },
  {
    title: 'AI/ML Intern - Internal Complicance',
    company: 'Dell Technologies',
    years: 'Summer 2024',
    logo: dell,
  },
  {
    title: 'Undergraduate Researcher',
    company: 'Harvey Mudd College',
    years: '2024–2025',
    logo: hmc,
  },
  {
    title: 'Product + AI Fellow',
    company: 'Share Ventures',
    years: '2023',
    logo: shareventures,
  },
  {
    title: 'Software Intern',
    company: 'Planckton Data',
    years: 'Summer 2023',
    logo: planckton,
  },
  {
    title: 'Full Stack Developer',
    company: 'P-ai @ Claremont',
    years: '2022–2023',
    logo: pdorm,
  },
];

const Experience = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className='experience' id='experience'>
      <div className='experience_title'>
        <p>my past adventures ...</p>
      </div>

      <div className='experience_rows'>
        <div className='experience_header'>
          <span className='header_logo'></span>
        </div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className='experience_row'
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className={`row_role${hoverIndex === index ? ' active' : ''}`}>{exp.title.toUpperCase()}</div>
            <div className='row_logo'>
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className={`company_logo${hoverIndex === index ? ' visible' : ''}`}
                />
              )}
            </div>
            <div className='row_meta'>
              <div className='row_company'>{exp.company}</div>
              <div className='row_years'>{exp.years}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

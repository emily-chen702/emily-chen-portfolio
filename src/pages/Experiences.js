import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import workExperiences from '../assets/data/experiences';
import WorkExperienceItem from '../components/WorkExperienceItem.js';

const ExperienceStyles = styled.div`
  padding: 10rem 0;
  .sect {
    margin: 5rem 5rem;
    flex-wrap: wrap;
  }
  .sect_header {
    font-size: 3.6rem;
  }
  .container {
    margin: 0 0;
  }
`;

export default function Experiences() {
  return (
    <ExperienceStyles>
      <div className="container">
        <SectionTitle
          heading="Experiences"
          subheading="some of my past experiences"
        />
      </div>
      <div className="sect">
        <div className="sect_header">Work Experience</div>
        <div className="all_items">
          {workExperiences.map((item) => (
            <WorkExperienceItem
              position={item.position}
              company={item.company}
              responsibilities={item.responsibilities}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </ExperienceStyles>
  );
}

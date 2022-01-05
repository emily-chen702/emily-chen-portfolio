import React from 'react';
import styled from 'styled-components';
// import { FiMapPin } from 'react-icons/fi';
// import { IoMdBriefcase } from 'react-icons/io';
import PText from './PText';

/*
FiMapPin
IoMdBriefcase
*/

const WorkExperienceItemStyle = styled.div`
  .para {
    line-height: 2rem;
    padding: 1rem;
    margin: 1px 1px;
    max-width: 100%;
  }
  .items {
    flex-wrap: wrap;
  }
  .container {
    border-left: 3px solid white;
  }
  .experience-icon {
    svg {
      width: 3rem;
    }
  }
  icon-title {
    max-width: 300px;
    display: flex;
  }
  h2 {
    padding-bottom: 5px;
  }
  .responsibilities {
    margin-left: 4rem;
  }
`;

export default function WorkExperienceItem({
  position = 'Position',
  company = 'Company',
  responsibilities = ['responsibilities'],
  location = 'Location',
}) {
  return (
    <WorkExperienceItemStyle>
      <br />
      <h1>{position}</h1>
      <div className="icon-title">
        <h2>
          {/* <div className="experience-icon">
            <IoMdBriefcase />
          </div> */}
        </h2>
        <h2>
          <i>{company}</i>
        </h2>
      </div>
      <h2>
        {/* <div className="experience-icon">
          <FiMapPin />
        </div> */}
        {location}
      </h2>
      <ul className="responsibilities container">
        {responsibilities.map((item, index) => (
          <li>
            <div className="item" key={index}>
              <PText>{item}</PText>
              <br />
            </div>
          </li>
        ))}
      </ul>
    </WorkExperienceItemStyle>
  );
}

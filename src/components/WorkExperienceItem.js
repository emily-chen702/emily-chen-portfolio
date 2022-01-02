import React from 'react';
import styled from 'styled-components';
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
    max-width: 600px;
  }
  .items {
    flex-wrap: wrap;
  }
  .container {
    border-left: 3px solid white;
  }
`;

export default function WorkExperienceItem({
  position = 'Position',
  company = 'Company',
  responsibilities = ['responsibilities'],
}) {
  return (
    <WorkExperienceItemStyle>
      <br />
      <h1>
        {position} | <i> {company} </i>
      </h1>
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

import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const WorkExperienceItemStyle = styled.div`
  .para {
    line-height: 2rem;
    padding: 1rem;
  }
  .items {
    flex-wrap: wrap;
  }
`;

export default function WorkExperienceItem({
  position = 'Position',
  company = 'Company',
  responsibilities = ['responsibilities'],
}) {
  return (
    <WorkExperienceItemStyle>
      <h1> {position} </h1>
      <h2> {company} </h2>
      <div className="responsibilities">
        {responsibilities.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
            <br />
          </div>
        ))}
      </div>
    </WorkExperienceItemStyle>
  );
}

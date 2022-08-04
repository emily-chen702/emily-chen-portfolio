import React from 'react';
import {
  AiOutlineBranches,
  AiOutlineDotChart,
  AiOutlineExperiment,
} from 'react-icons/ai';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle
          heading="Skills"
          subheading="Technology I enjoy exploring"
        />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<AiOutlineBranches />}
            title="Machine Learning"
            desc="I have applied supervised machine learning algorithms in personal, class and professional projects in Python and Javascript."
          />
          <ServicesSectionItem
            icon={<AiOutlineDotChart />}
            title="Data Visualization"
            desc="I have used Tableau, Python, Iron Python, Spotfire, Javascript and HTML/CSS to make static, interactive and animated data visualizations."
          />
          <ServicesSectionItem
            icon={<AiOutlineExperiment />}
            title="Science Research"
            desc="I have completed research projects in the fields of biochemistry, bioengineering/ biomedical engineering, genetics and physics."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}

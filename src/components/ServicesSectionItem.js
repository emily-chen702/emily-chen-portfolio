import React from 'react';
import { AiOutlineBranches } from 'react-icons/ai';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Monserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
    line-height: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <AiOutlineBranches />,
  title = 'machine learning',
  desc = 'I have applied supervised machine learning algorithms in personal, class and professional projects in Python and Javascript.',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">
        {icon}
        <div className="servicesItem__title">{title}</div>
        <PText>{desc}</PText>
      </div>
    </ItemStyles>
  );
}

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 2.3rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.4em;
  }
`;

export default function PText({ children, btnLink = '' }) {
  return (
    <PStyle className="para">
      <Link className="button" to={btnLink} download>
        <p>{children}</p>
      </Link>
    </PStyle>
  );
}

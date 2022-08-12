import React from 'react';
import styled from 'styled-components';
import foods from '../assets/data/painting';
import SectionTitle from '../components/SectionTitle';
import PText from '../components/PText';

const PaintingStyle = styled.div`
  padding: 10rem 5rem;
  .painting__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .genericItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .blurb {
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .genericItem__img {
      height: 350px;
    }
  }
`;
export default function Paintings() {
  return (
    <PaintingStyle>
      <SectionTitle
        heading="Paintings"
        subheading="some of my artistic works"
      />
      <PText className="blurb">
        Over the pandemic, I got in touch with my creative side. Recognize some
        of the landscapes, sights of Boston, and memes I've painted :)
      </PText>
      <div className="painting__allItems">
        {foods.map((item) => (
          <img className="genericItem__img" src={item.img} alt="generic img" />
        ))}
      </div>
    </PaintingStyle>
  );
}

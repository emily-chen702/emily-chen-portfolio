import React from 'react';
import styled from 'styled-components';
import foods from '../assets/data/food';
import SectionTitle from '../components/SectionTitle';
import PText from '../components/PText';

const CookingStyle = styled.div`
  padding: 10rem 5rem;
  .cooking__allItems {
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
export default function Cooking() {
  return (
    <CookingStyle>
      <SectionTitle heading="Food" subheading="some of my culinary works" />
      <PText className="blurb">
        When I came to Northeastern, I finally had the freedom to cook for
        myself. Channeling my inner MasterChef, I've been able to understand the
        flavors that make up food in my culture in addition to exploring new
        recipies. Enjoy the pictures listed below of some of my more
        aestetically pleasing culinary works.
      </PText>
      <div className="cooking__allItems">
        {foods.map((item) => (
          <img className="genericItem__img" src={item.img} alt="generic img" />
        ))}
      </div>
    </CookingStyle>
  );
}

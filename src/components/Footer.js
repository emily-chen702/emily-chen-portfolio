import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 2rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      // inside first div
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
      line-height: 1.75rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <div className="footer__col__title">Emily Chen</div>
          <PText>
            I'm a machine learning engineer at Capital One based in New York
            City. I'm passionate about the application of large language models
            (LLMs) and recognizing when they can be used in place of traditional
            machine learning methods. I also enjoy making machine learning
            itself understandable to others regardless of if their background is
            technology.
          </PText>
        </div>
        <div className="footer__col__2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col__3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '(516) 350-7889',
                path: 'tel:5163507889',
              },
              {
                title: 'emily.chen2@capitalone.com',
                path: 'mailto:emily.chen2@capitalone.com',
              },
            ]}
          />
        </div>
        <div className="footer__col__4">
          <FooterCol
            heading="Social Media"
            links={[
              {
                title: 'LinkedIn',
                path: 'http://www.linkedIn.com',
              },
              {
                title: 'Facebook',
                path: 'http://www.facebook.com',
              },
              {
                title: 'Instagram',
                path: 'http://www.instagram.com',
              },
              {
                title: 'Twitter',
                path: 'http://www.twitter.com',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyles>
  );
}

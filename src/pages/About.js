import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about2.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ResumeDownload from '../assets/data/Chen_Emily_Resume_10-10.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  // allows left side to have a little more space than the right side
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: (--var-deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .para {
    line-height: 1.75rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p classNama="about__subheading">
              Hi, I am <span>Emily Chen</span>
            </p>
            <h2 className="about__heading">
              Student at Northeastern University Studying Data Science and
              Biochemistry
            </h2>
            <div className="about__info">
              <PText>
                I am a B.S. candidate in Data Science and Biochemistry with a
                minor in Mathematics at Northeastern University. I am passionate
                about science research and data science and I am looking for
                opportunities that combine the two.
                <br /> <br />I am currently on co-op at GenOne Technologyies, an
                engineering consulting company, as a Software Developer. At
                GenOne, I have focused on developing an Angular based
                NativeScript app that uses an iPhone sensor to sense the
                position of two 3D printed toys using machine learning methods
                (SVM and SVR). In addition, I am a reserach assistant at the
                Pinto Lab at Northeastern University.
                <br /> <br /> I am passionate about exploring the application of
                machine learning techniques in a scientific field. I am also
                interested in making the advancement of machine learning
                understandable to everyone, regardless of their background in
                technology.
              </PText>
            </div>
            <Button btnText="Download Resume" btnLink={ResumeDownload} />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Emily Chen img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem title="School" items={['Northeastern University']} />
            <AboutInfoItem
              title="Major"
              items={['Data Science and Biochemistry']}
            />
            <AboutInfoItem title="Minor" items={['Mathematics']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={[
                'JavaScript',
                'Tableau',
                'HTML',
                'CSS',
                'TypeScript',
                'Angular',
                'React',
              ]}
            />
            <AboutInfoItem title="BackEnd" items={['Python', 'SQL', 'Scala']} />
            <AboutInfoItem
              title="Software"
              items={['Git', 'Jupyter', 'AWS', 'Spark', 'Eclipse', 'Vim']}
            />
            <AboutInfoItem
              title="Lab Skills"
              items={[
                'autoclaving',
                'micropipeting',
                'bacteria cultures',
                'lyophilization',
                'sterilization techniques',
                'titration techniques',
                'plasmid amplification',
                'PCR',
                'flow cytometry',
                'pH meter',
              ]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Leadership</h1>
            <AboutInfoItem title="NUWIT" items={['Vice President']} />
            <AboutInfoItem
              title="DATA Club"
              items={['Director of Communications']}
            />
            <AboutInfoItem title="ASU" items={['Family Big']} />
            <AboutInfoItem title="NUSCI" items={['Writer']} />
            <AboutInfoItem title="Big Sister" items={['Mentor']} />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}

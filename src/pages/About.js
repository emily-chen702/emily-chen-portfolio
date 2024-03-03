import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-portrait.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ResumeDownload from '../assets/data/Chen_Emily_Resume_10-10.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  Button {
    max-width: 500px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 1.3rem;
  }
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
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem;
  }
  .items {
    display: flex;
    position: absolute;
    flex-wrap: wrap;
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
              Machine Learning Engineer at Capital One
            </h2>
            <div className="about__info">
              <PText>
                I am a Machine Learning Engineer at Capital One. I am passionate about 
                learning about the different applications of data science and machine 
                learning, and I am grateful for the opportunity to explore these 
                applications at a company that is consistently looking for ways to innovate.  
                <br /> <br /> I am currently part of Capital One's Machine
                Learning Development Program. I work on the HR Data Strategy Team, 
                whose goal is to find the most optimal ways to onboard data into 
                Capital One’s data warehouse. While helping with my team’s efforts, 
                I conduct exploratory data analysis, create proof of concepts for 
                the use of machine learning in our space and consult on machine 
                learning proposals. 
                <br /> <br /> My undergraduate degree was in data science and biochemistry, so
                I am passionate about exploring the application of machine learning techniques 
                in a scientific field. Another passion of mine is advocating for the ethics of 
                machine learning and making machine learning itself understandable to others 
                regardless of if their background is technology. 
              </PText>
            </div>
            <Button
              btnText="Download Resume"
              btnLink={ResumeDownload}
              target="_blank"
            />
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
              title="Cloud Tech"
              items={['AWS (s3, Diveplane)', 'Spark']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Leadership</h1>
            <AboutInfoItem
              title="DATA Club"
              items={[
                'President (2022-2023)',
                'Director of Communications (2019-2022)',
              ]}
            />
            <AboutInfoItem
              title="NUWIT"
              items={['Vice President (2021-2022)', 'PR Chair (2020-2021)']}
            />
            <AboutInfoItem title="ASU" items={['Family Head']} />
            <AboutInfoItem title="NUSCI" items={['Writer']} />
            <AboutInfoItem title="Big Sister" items={['Mentor']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Interests</h1>
            <div className="items">
              <div className="item">
                <PText> Volleyball </PText>
              </div>
              <div className="item">
                <PText> Brunch </PText>
              </div>
              <div className="item">
                <PText btnLink="/paintings"> Painting </PText>
              </div>
              <div className="item">
                <PText> Baking </PText>
              </div>
              <div className="item">
                <PText btnLink="/cooking"> Cooking </PText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}

import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
// import UTrackerImg from '../images/utracker.jpg';
// import GreenCtgImg from '../images/greenctg.jpg';
// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';
import DbImg from '../images/db-project.png';
import Tap1Img from '../images/tap-water-1.png';
import HeartDiseaseImg from '../images/heart.png';
import Tap2Img from '../images/tap-water-2.png';
import QuantumImg from '../images/quantum.png';
import DNAgeImg from '../images/dnage.png';
import PrintingImg from '../images/3dprinting.png';
import PoliticalImg from '../images/debates.png';
import CelluloseImg from '../images/cellulose.png';
import FuelsImg from '../images/energy.png';
import PositronImg from '../images/physics.png';
import CRISPRImg from '../images/crispr.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Northeastern Research Database',
    desc: 'Created a website using a SQL database for students to navigate and apply to research labs of all Northeastern colleges.',
    img: DbImg,
  },
  {
    id: uuidv4(),
    name: 'Advancing the Detection of Pollutants in Boston Drinking Water',
    desc: 'Collaborated with PhD candidate to utilize DNA sequencing and bioinformatics approaches to identify metabolic potential of comammox communities. Measure chlorine, phosphate, alkalinity and nitrogen species in tap water samples.',
    img: Tap1Img,
  },
  {
    id: uuidv4(),
    name: 'Predicting Coronary Heart Disease',
    desc: 'Utilized machine learning algorithms to predict if a given patient will develop heart disease using Python. Used Logistic Regression, Support Vector Classifier, K Nearest neighbor, Naïve Bayes and Decision Tree Classifier.',
    img: HeartDiseaseImg,
  },
  {
    id: uuidv4(),
    name: 'Visualizing Boston Tap Water',
    desc: 'Designed a website encoding a stacked bar chart, table and heatmap using Javascript (d3.js), HTML and CSS. Presented the website the Pinto lab at one of their lab meetings.',
    img: Tap2Img,
  },
  {
    id: uuidv4(),
    name: 'Using Quantum Computing to Make a Virtually Unhackable Internet',
    desc: 'I wrote an article looking at the use of quantum-computing to improve the security of the internet. The United States and China are both looking to implement this system to create a more efficient, secure internet.',
    img: QuantumImg,
  },
  {
    id: uuidv4(),
    name: 'DNAge of Consent',
    desc: 'I wrote an article exploring the use of data derived by 23andMe and the ethical measures that should be used to regulate it. A service that reveals so much of an individuals information must be regulated to preserve the privacy rights of its client.',
    img: DNAgeImg,
  },
  {
    id: uuidv4(),
    name: '3D Printing a Future in Medicine',
    desc: 'I wrote an article looking at the evolution of 3D printing, specifically in the medical domain. 3D printing organs revolutionizes the medical field by introducing the potential to create a personalized organ, decreasing the chance of rejection dramatically.  ',
    img: PrintingImg,
  },
  {
    id: uuidv4(),
    name: 'The Building Blocks of Political Debates',
    desc: 'I wrote an article to break down the structure of political debates. The art of argumentation commonly goes unnoticed in political debates, and this article looks to make that more apparent to its readers.',
    img: PoliticalImg,
  },
  {
    id: uuidv4(),
    name: 'Utilization of Salt Gradients to Improve the Cleaning Process of Bacterial Cellulose',
    desc: 'Investigated optimal methods to produce bacterial cellulose which could be used as artificial skin and blood vessels. •	Presented research findings at Long Island Science and Engineering Fair and received Honorable Mention in biochemistry and biomedical engineering.',
    img: CelluloseImg,
  },
  {
    id: uuidv4(),
    name: 'A Future After Fossil Fuels',
    desc: "I wrote an article addressing the world's use of fossil fuels and its effects on the environment and the economy. Fossil fuels are a nonrenewable resource, and at the rate we are using them, fossil fuels will not be a viable energy source in the future.",
    img: FuelsImg,
  },
  {
    id: uuidv4(),
    name: "Advancing the Treatment of Alzheimer's Disease through Positron Beam Therapy",
    desc: 'Collaborated with 6 other students to develop an experiment that investigates the potential use of a particle accelerator to explore the denaturation of beta-amyloid proteins that cause neurological deterioration in Alzheimer’s Disease.',
    img: PositronImg,
  },
  {
    id: uuidv4(),
    name: 'Using CRISPR/Cas9 to Correct a Mutation Causing Parkinson’s Disease',
    desc: 'Investigated the use of gene editing technology (CRISPR-Cas-9) to cure a strain of Parkinson’s disease in C. elegans and presented research findings to Stony Brook University faculty.',
    img: CRISPRImg,
  },
];

export default projects;

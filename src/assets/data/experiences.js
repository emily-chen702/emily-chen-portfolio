import { v4 as uuidv4 } from 'uuid';

const experiences = [
  {
    id: uuidv4(),
    position: 'Machine Learning Engineer',
    company: 'Capital One',
    location: 'McLean, VA',
    responsibilities: [
      'Create proof of concepts to ease the introduction of machine learning in my space.',
      'Giving demos on the use of neural networks and LLMs with HuggingFace and LangChain',
      'Consult on machine learning proposals',
    ],
  },
  {
    id: uuidv4(),
    position: 'Data Engineer',
    company: 'Pfizer',
    location: 'Andover, MA',
    responsibilities: [
      'Sort files from high throughput screening experiments by format.',
      'Create a tool to aggregate information from excel files into one excel sheet.',
      'Visualize aggregated data with Spotfire.',
    ],
  },
  {
    id: uuidv4(),
    position: 'Data Science and Insights Intern',
    company: "ALSAC/St. Jude Children's Hospital",
    location: 'Remote',
    responsibilities: [
      'Worked with Diveplane to create a simulated model of donor data.',
      'Assessed success of simulated model with exploratory data analysis (EDA) using Python (sklearn, matplotlib)',
      'Simulated model of donor data will be used to define and improve methods to acquire and maintain donors',
      'Created an image analysis tool (tensorflow) to see the relevance of specific St. Jude google image searches',
    ],
  },
  {
    id: uuidv4(),
    position: 'Software Developer',
    company: 'GenOne Technologies',
    location: 'Cambridge, MA',
    responsibilities: [
      'Develop an Angular based NativeScript app that uses an iPhone sensor to sense the position of two 3D printed toys using machine learning methods (SVM and SVR)',
      'Test and collect data from an iPhone sensor using HTTP requests',
      'Perform data analysis using Python (matplotlib and plotly) to evaluate the functionality of the app',
      'Develop a prototype of 2D app using PlayCanvas',
    ],
  },
  {
    id: uuidv4(),
    position: 'Research Assistant',
    company: 'Northeastern University',
    location: 'Boston, MA',
    responsibilities: [
      'Working with a Ph.D. candidate to utilize DNA sequencing and bioinformatics approaches to identify the metabolic potential of comammox communities',
      'Analyzed over 2000 flow cytometry plots',
      'Performed data collection and statistical analysis to make a website using R Shiny',
    ],
  },
  {
    id: uuidv4(),
    position: 'Data Science Intern',
    company: 'Signify Health',
    location: 'New York, NY',
    responsibilities: [
      'Formulate a novel model to represent heterogenous data in electronic health records using a 3d tensor.',
      'Developed perplexity-based probability models using Python and Scala to evaluate over 10,000 patients.',
      'Performed data aggregation using Spark and AWS',
      'Presented model and implementation to department and executives',
    ],
  },
  {
    id: uuidv4(),
    position: 'Research Assistant',
    company: 'Renasslaer Polytechnic Institute',
    location: 'Troy, NY',
    responsibilities: [
      'Investigated optimal methods to produce bacterial cellulose which could be used as artificial skin and blood vessels',
      'Presented research findings at Long Island Science and Engineering Fair and received Honorable Mention in biochemistry and biomedical engineering',
    ],
  },
  {
    id: uuidv4(),
    position: 'Research Assistant',
    company: 'North Shore University Hospital',
    location: 'Manhasset, NY',
    responsibilities: [
      'Worked with a radiation oncology resident to evaluate different therapies for prostate cancer patients and their effects on their mental health',
      'Trained 5 high school and undergraduate students on how to interpret doctors’ notes, MRI’s and conduct statistical analysis',
    ],
  },
];

export default experiences;

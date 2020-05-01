import project1 from '../assets/tictactoe.jpg';
import project2 from '../assets/calculator.jpg';
import project3 from '../assets/crypto.jpg';

const PROJECTS = [
  {
    id: 1,
    title: 'React App game Tic-tac-toe',
    description:
      'A React App I build, involving JS Webpack, React.js, states, SCSS, CSS Flexbox, MaterialUI',
    link: 'https://master.d15l0qm0qojwlr.amplifyapp.com/',
    linktext: 'Code on GitHub',
    githug: 'https://github.com/PovilasU/tic-tac-toe',
    image: project1,
  },
  {
    id: 2,
    title: 'React Redux Calculator',
    description:
      'A Calculator React App that I build from scratch using React-Redux and "Semantic-UI" framework',
    link: 'https://react-redux-calculator1.netlify.app/',
    linktext: 'Code on GitHub',
    githug: 'https://github.com/PovilasU/redux-calculator',
    image: project2,
  },
  {
    id: 3,
    title: 'Crypto currency website',
    description:
      'My unique project  for my university about crypto currencies using Amazon Web Services  ',
    link: 'https://povilas.s3-eu-west-1.amazonaws.com/index.html',
    linktext: '',
    image: project3,
    br: true,
  },
];

export default PROJECTS;

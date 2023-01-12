const header = {
  homepage: '',
  title: 'AD',
}

const about = {
  name: 'Abhisek Das',
  role: 'Back End Developer',
  description:
    `Seeking opportunity as a NodeJS developer where I will be able to utilize my strong development skills,
    educational background and ability to work well with people, which will allow me to grow personally and
    professionally. Proficient in technologies like NodeJS, REST API, JavaScript, MongoDB,ES6, Core JavaScript
    concepts like asynchronous programming, Package Managers like NPM.`,
  resume: ' will add the link ',
  social: {
    linkedin: 'http://www.linkedin.com/in/abhisek-das-293741169',
    github: 'https://github.com/dasabhisek96/',
  },
}

const projects = [
  {
    name: 'Parking Lot',
    description:`Created a user login and password,Stored the database of the register using MongoDB, Build using Rest API,Node.js and Express. \n Direct driver to parking lots using booking lots according to general and special categories with FIFO.\n If average no of parking slots booked then utilised the extension booking time for customer due to traffic control.\n If general parking is completed then general parking slots booking in queue
      `,
    stack: ['JavaScript', 'Node JS', 'Mongo DB', 'Rest API'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Weather App',
    description:
      `User enters the name of city and it will give weather of provided city.
      \n Secured API keys using env variables
      \n Build using Open Weather Map API
      `,
    stack: ['JavaScript', 'Node JS', 'Mongo DB', 'Rest API'],
    sourceCode: '',
    livePreview: '',
  },
]

const skills = [
  'C',
  'C++',
  'JavaScript',
  'Node JS',
  'Express JS',
  'Rest API',
  'Mongo DB',
  'MATLAB',
  'Autocad',
  'Solidworks',
  'CATIA',
  'Git',
]

const contact = {
  email: 'abhisek.das.96@gmail.com',
}

export { header, about, projects, skills, contact }

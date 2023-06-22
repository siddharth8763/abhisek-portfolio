const header = {
  homepage: "",
  title: "AD",
};

const about = {
  name: "Abhisek Das",
  role: "Back End Developer",
  description: `Experienced NodeJS backend developer with expertise in building scalable and secure applications. Proficient
  in server-side technologies and understanding of security best practices for web development, including
  authentication and authorization, encryption, and server hardening. Skilled in cloud platform deployment and
  agile software development methodologies. Strong communication and collaboration abilities with a
  demonstrated track record of success.`,
  resume:
    "https://drive.google.com/file/d/1Yl4hp7WFFKYEDNPyV2LWzTjmHxSRZpDw/view?usp=sharing",
  social: {
    linkedin: "http://www.linkedin.com/in/abhisek-das-293741169",
    github: "https://github.com/dasabhisek96/",
  },
};

const projects = [
  {
    name: "Social Media API",
    description: `Created a user Sign up, login and password,Stored the database of the register using MongoDB, Build using Rest
    API,Node.js and Express for real-time communication.
    Implemented user authentication and authorization using JWT tokens and OAuth.
    Worked closely with front-end developers to ensure seamless integration with React components.
    Deployed applications to Render(a hoisting platform).
    Participated in agile ceremonies like daily stand-ups, sprint planning, and retrospective meetings.
    Contributed to code`,
    stack: ["Node JS", "Express JS", "Mongo DB", "Rest API", "OAuth", "JWT"],
    sourceCode: "https://github.com/dasabhisek96/Social_Media",
    livePreview: "",
  },
  {
    name: "Bubbles App",
    description: `Created this simple game using Vanilla JavaScript and DOM manipulation techniques.In this game there are 4 circles and 4 arrows. On click of each circle, the corresponding arrow moves towards the circle and once it hits the circle, the color of the circle changes. On click of reset button arrows came back to their original places.`,
    stack: ["HTML5", "CSS3", "JavaScript"],
    sourceCode: "https://github.com/dasabhisek96/Bubble_App",
    livePreview: "",
  },
  {
    name: "Get Tech Hub",
    description: `Created a sign up and login API as part of a freelancing project. This API was developed using ExpressJS, NodeJS and MongoDB.`,
    stack: ["Node JS", "Express JS", "Mongo DB", "Rest API"],
    sourceCode: "https://github.com/dasabhisek96/Get_Tech_Hub",
    livePreview: "",
  },
];

const skills = [
  "C",
  "C++",
  "JavaScript",
  "Node JS",
  "Express JS",
  "Rest API",
  "JWT",
  "OAuth",
  "Mongo DB",
  "MATLAB",
  "Autocad",
  "Solidworks",
  "CATIA",
  "Git",
  "Java",
  "SQL",
  "Hibernate",
  "Springboot",
];

const contact = {
  email: "abhisek.das.96@gmail.com",
};

export { header, about, projects, skills, contact };

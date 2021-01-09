import { Project } from './Project';

export const MOCK_PROJECTS = [
  new Project({
    id: 1,
    name: "StoryTime Books",
    description: "Contributors: Seokwoo Ha, Ethan Hutchison, and myself\nInspiration: Semester project\nWhat it does: E-Commerce book store with admin dashboard\nHow I built it: Vue.js, Laravel backend, MySQL database running on AWS\nChallenges I ran into: All new technologies for me and my team; We were sent home shortly after the project began due to COVID-19; communication; Making the project fully in SPA design\nAccomplishments that I'm proud of: Great UI, fully functional, won best project in the class during presentation, all data is secure and protects from SQL Injection\nWhat's next for StoryTimeBooks: We have many features we hope to add in the future.",
    imageUrl: "/assets/StoryTime.PNG",
    techUsed: "Laravel, MySQL, Vue.js, JWT, AWS",
    gitRepo: "https://github.com/tmaasen/StoryTimeBooks/tree/master/StoryTimeBooks",
    isFinished: false
  }),
  new Project({
    id: 2,
    name: "Tic-Tac-Toe",
    description: "This is the first project I ever developed in the React framework.",
    imageUrl: "/assets/tictactoe.PNG",
    techUsed: "React.js",
    gitRepo: "https://github.com/tmaasen/Code-Projects/tree/master/Tic-Tac-Toe",
    isFinished: false
  }),
  new Project({
    id: 3,
    name: "Pictorial",
    description: "Our professor stated, 'I feel like I should appreciate art, but I don't know where to start.' That inspired us to create an app that would help users breakdown artwork into concepts they could understand such as moods and hues.\nWe built this as a mobile app so that users could take photos of artwork on their mobile device. Our app would analyze the photo you took and send you information on the hues in the painting.\nOne of the challenges we faced was trying to figure out the best way to upload a photo to our cloud storage. Currently our application cannot upload a live photo, but there is data on it from our google cloud bucket to show proof of concept.\nAnother challenge was determining the hues and analysis of those. Our app is extremely limited in the hex range it can analyze and provide, so we would like to expand that in the future.",
    imageUrl: "/assets/pictorial.jpg",
    techUsed: "Flutter, Dart",
    gitRepo: "https://github.com/Brian-Hofmann/Pictorial",
    isFinished: false
  }),
];

export default MOCK_PROJECTS;

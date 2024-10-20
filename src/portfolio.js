/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ashley NAKA",
  title: "Salut à tous, Je suis Ashley!",
  subTitle: emoji(
    "Une jeune étudiante dynamique et passionnée de data, de chiffres mais aussi de développement web et mobile 🚀. Ambitieuse de prétendre à des postes de data analyst, je suis ouverte à toutes nouvelles opportunités afin de gagner en expérience et affiner ma posture professionnelle "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1P8m3YRzg5rWrr11jKIi1YBO8lc2mefpy/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/H-ley",
  linkedin: "https://www.linkedin.com/in/ashley-naka/ ",
  gmail: "anaka.ir2026@esaip.org",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Compétences",
  subTitle: "Je suis assez confortable avec plusieurs langages, librairies ou frameworks dont : ",
  skills: [
    emoji(
      "⚡ Maîtrise des outils de design et de création visuelle dont Canva, Powerpoint, Excel"
    ),
    emoji("⚡ Bonne aptitude rédactionnelle avec Microsoft Word, Adobe Acrobat"),
    emoji(
      "⚡ Leadership naturel et aisance en gestion de projet avec des outils comme Trello"
    ),
    emoji(
      "⚡ Aisance orale"),
    emoji(
      "⚡ Autonomie et Rigueur"),
      emoji(
      "⚡ Adaptabilité et Compétitivité"),
    emoji(
      "⚡ Ouverture d'Esprit"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BME",
      logo: require("./assets/images/bme.png"),
      subHeader: "Spring Erasmus",
      duration: "Février 2024 - Juillet 2024",
    },
    {
      schoolName: "Esaip Saint-Barthélémy d'Anjou",
      logo: require("./assets/images/esaip.png"),
      subHeader: "Cycle Ingénieur Informatique et Réseaux Majeure Big Data",
      duration: "Septembre 2023 - Juillet 2026",
    },
    {
      schoolName: "Epitech",
      logo: require("./assets/images/epi.png"),
      subHeader: "Bachelor en Expertise des Technologies de l'Information",
      duration: "Septembre 2020 - Juillet 2023",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Bénévole",
      company: "Les Restos du Cœur",
      companylogo: require("./assets/images/rdc.png"),
      date: "Novembre 2024 – Aujourd'hui",
      desc: "Collecte de denrées alimentaires dans les grandes enseignes comme Lidl, Action, Carrefour pour les personnes en situation de précarité. Action de lutte contre la pauvreté et l'exclusion sur toutes ses formes"
    },
    {
      role: "Stagiaire professionnelle",
      company: "1020Technology",
      companylogo: require("./assets/images/1020.png"),
      date: "Mai 2023 – Août 2023",
      desc: "Assistance au service technique dans la conception des besoins des clients."
    },
    {
      role: "Alternante",
      company: "Mapcom Technology",
      companylogo: require("./assets/images/mapcom.png"),
      date: "Décembre 2022 – Mars 2023",
      desc: "Conception d'une application web de gestion de la paie des employés de l'entreprise.",
    },
    {
      role: "Stagiaire académique",
      company: "SiemTechnology",
      companylogo: require("./assets/images/siem.png"),
      date: "Août 2021 – Décembre 2021",
      desc: "Conception de trois sites web dynamiques (Gestion Hospitalière, E-commerce textile, E-learning)."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets",
  subtitle: "Quelques projets fun sur lesquels j'ai travaillé",
  projects: [
    {
      image: require("./assets/images/meteo.png"),
      projectName: "GroundHog",
      projectDesc: "Algorithme python permettant d'analyser des tendances météo",
      footerLink: [
        {
          name: "Visiter le projet sur Github",
          url: "https://github.com/H-ley/GroundHog"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/matchstick.png"),
      projectName: "Matchstick",
      projectDesc: "Reproduction du jeu des allumettes avec le language C",
      footerLink: [
        {
          name: "Visiter le projet sur Github",
          url: "https://github.com/H-ley/Matchstick"
        }
      ]
    },
    {
      image: require("./assets/images/irc.png"),
      projectName: "Internet Relay Chat",
      projectDesc: "Créer un chat entre personnes et rafraîchir en temps réel. Avec certaines commandes, nous pouvons créer, gérer une chaîne, voir tous les utilisateurs, etc.",
      footerLink: [
        {
          name: "Visiter le projet sur Github",
          url: "https://github.com/H-ley/Internet-Relay-Chat"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "J'adore écrire et partager certains moments de ma vie.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://budapestvista.wixsite.com/site/blog",
      title: "Why Budapest for an exchange semester ?",
      description:
        "Naviguez à travers ce blog sur mes aventures à Budapest en Hongrie pour mon séjour ERASMUS."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "CV",
  subtitle: "Vous pouvez jetter un œil à mon CV",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez-Moi ☎️"),
  subtitle:
    "Discuter sur un projet ou juste pour une prise de contact? Je suis ouverte à tout.",
  number: "+33 7 45 21 95 83",
  email_address: "anaka.ir2026@esaip.org"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

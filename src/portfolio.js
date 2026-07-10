/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Yoonmee Hwang",
  title: "Hi all, I'm Yoonmee",
  subTitle: emoji(
    "DevOps / Site Reliability Engineer 🚀 with 5 years operating Kubernetes at cloud-provider scale (NHN Cloud), now at Carnegie Mellon University building CI/CD platforms and ML experimentation infrastructure."
  ),
  resumeLink: "Yoonmee_Hwang_Resume.pdf", // served from public/ - replace with latest PDF before deploy
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/devotto", // TODO: replace
  linkedin: "https://www.linkedin.com/in/yoonmee-hwang/",
  gmail: "yoonmhwang@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "DEVOPS / SRE ENGINEER WHO KEEPS PRODUCTION BORING AND PIPELINES FAST",
  skills: [
    emoji(
      "⚡ Build and operate Kubernetes platforms at scale - 16 clusters, 130+ nodes, 2,300+ pods in production"
    ),
    emoji(
      "⚡ Design end-to-end CI/CD platforms (GitHub Actions, ArgoCD) with gated deploys, ephemeral environments, and OIDC-based auth"
    ),
    emoji(
      "⚡ Run observability stacks (Prometheus, Grafana, Loki, Jaeger) and tune them with benchmark-driven decisions"
    ),
    emoji(
      "⚡ Build reproducible ML experimentation infrastructure - PyTorch, Slurm/HPC, Weights & Biases"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Monitoring",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Terminal",
      fontAwesomeClassname: "fas fa-terminal"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Carnegie Mellon University",
      logo: require("./assets/images/cmuLogo.png"),
      subHeader: "Master of Software Engineering, School of Computer Science",
      duration: "August 2025 - December 2026 (expected)",
      desc: "GPA 3.9/4.0",
      descBullets: [
        "Coursework: Machine Learning in Production, Introduction to Deep Learning, Introduction to Machine Learning, Introduction to Computer Systems"
      ]
    },
    {
      schoolName: "Kyung Hee University",
      logo: require("./assets/images/khuLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "March 2015 - August 2020",
      desc: "GPA 3.73/4.3",
      descBullets: ["Merit-based scholarship, three semesters"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Infrastructure & Kubernetes",
      progressPercentage: "90%"
    },
    {
      Stack: "CI/CD & Automation",
      progressPercentage: "85%"
    },
    {
      Stack: "ML Infrastructure & Experimentation",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer / Site Reliability Engineer",
      company: "NHN Cloud",
      companylogo: require("./assets/images/nhncloudLogo.png"),
      date: "July 2020 - July 2025",
      desc: "Company-wide DevOps platform for NHN Cloud PaaS, a top-3 cloud provider in South Korea.",
      descBullets: [
        "Built and operated 16 Kubernetes clusters (130+ nodes, 2,300+ pods) and CI/CD pipelines serving 30+ teams",
        "Cut deployment task time by 83% and migrated 10 legacy products across 6 regions with zero incidents",
        "Raised Loki log throughput 52% via k6 benchmark-driven tuning; 2023 Employee of the Year"
      ]
    },
    {
      role: "Cloud Engineering Intern",
      company: "NHN",
      companylogo: require("./assets/images/nhnLogo.png"),
      date: "January 2020 - June 2020",
      desc: "HA infrastructure design for web services on the TOAST Cloud platform.",
      descBullets: [
        "Implemented Apache Tomcat clustering and MySQL replication",
        "Set up CI/CD pipelines and service monitoring"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Naver",
      companylogo: require("./assets/images/naverLogo.png"),
      date: "July 2019 - August 2019",
      desc: "Modernized Naver Shopping Admin pages, the internal tool for Korea's largest e-commerce search platform.",
      descBullets: [
        "Refactored legacy JSP pages to React, Node.js, GraphQL, and TypeScript",
        "Improved page performance with Apollo Client caching"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "INFRASTRUCTURE AND ML PLATFORMS I BUILT AT CARNEGIE MELLON",
  projects: [
    {
      image: require("./assets/images/troutwoodLogo.png"),
      projectName: "Financial Integration Service - Troutwood",
      projectDesc:
        "Serverless payroll-data ingestion platform on AWS (Lambda, SQS, DynamoDB, CDK). Built the end-to-end CI/CD platform on GitHub Actions: 14 of 17 workflows, gated deploys, per-branch ephemeral stacks, OIDC auth, and LocalStack integration tests.",
      footerLink: [
        {
          name: "Troutwood",
          url: "https://www.troutwood.com/"
        }
      ]
    },
    {
      image: require("./assets/images/movierecLogo.png"),
      projectName: "Movie Recommender System in Production",
      projectDesc:
        "Infrastructure and MLOps lead in a 5-person CMU team (17-645). Ran a movie recommender for a simulated 1M-user service on k3s with Helm, GitHub Actions CI/CD, and Prometheus, Grafana, and Loki monitoring. Cut timeout rate to 3.3% and cold-start latency to under 100ms (dev-measured)."
    },
    {
      image: require("./assets/images/mlplatformLogo.png"),
      projectName: "ML Experimentation Platform for Time-Series Anomaly Detection",
      projectDesc:
        "Independent study. Reproducible PyTorch experiment framework evaluating 5 model architectures across 200+ time-series datasets on a Slurm HPC cluster. Fail-fast screening cut a 17 GPU-hour benchmark to 1.3 GPU-hours, with 600+ runs tracked in Weights & Biases."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications and recognition along the way",

  achievementsCards: [
    {
      title: "Certified Kubernetes Application Developer (CKAD)",
      subtitle: "The Linux Foundation / CNCF, December 2023",
      image: require("./assets/images/ckadBadge.png"),
      imageAlt: "CKAD badge",
      footerLink: []
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      subtitle: "The Linux Foundation / CNCF, held 2022-2025",
      image: require("./assets/images/ckaBadge.png"),
      imageAlt: "CKA badge",
      footerLink: []
    },
    {
      title: "Employee of the Year",
      subtitle:
        "NHN Cloud Great Performance Awards 2023, for the DigiCert certificate-automation PoC",
      image: require("./assets/images/awardBadge.png"),
      imageAlt: "Award badge",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blog Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talk Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Looking for DevOps / Cloud / MLOps opportunities. My inbox is always open.",
  email_address: "yoonmhwang@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
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

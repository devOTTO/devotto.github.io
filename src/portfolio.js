/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yoonmee Hwang",
  title: "Hi all, I'm Yoonmee",
  subTitle: emoji(
    "DevOps / Site Reliability Engineer 🚀 with 5 years operating Kubernetes at cloud-provider scale (NHN Cloud), now at Carnegie Mellon University building CI/CD platforms and ML experimentation infrastructure."
  ),
  resumeLink: "Yoonmee_Hwang_Resume.pdf", // served from public/ — replace with latest PDF before deploy
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
    "DEVOPS / SRE ENGINEER WHO KEEPS PRODUCTION BORING — AND PIPELINES FAST",
  skills: [
    emoji(
      "⚡ Build and operate Kubernetes platforms at scale — 16 clusters, 130+ nodes, 2,300+ pods in production"
    ),
    emoji(
      "⚡ Design end-to-end CI/CD platforms (GitHub Actions, ArgoCD) with gated deploys, ephemeral environments, and OIDC-based auth"
    ),
    emoji(
      "⚡ Run observability stacks (Prometheus, Grafana, Loki, Jaeger) and tune them with benchmark-driven decisions"
    ),
    emoji(
      "⚡ Build reproducible ML experimentation infrastructure — PyTorch, Slurm/HPC, Weights & Biases"
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
      skillName: "Golang",
      fontAwesomeClassname: "fas fa-code"
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
      logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Carnegie_Mellon_University_wordmark.svg",
      subHeader: "Master of Software Engineering, School of Computer Science",
      duration: "August 2025 - December 2026 (expected)",
      desc: "GPA 3.9/4.0",
      descBullets: [
        "Coursework: Machine Learning in Production, Introduction to Deep Learning, Introduction to Machine Learning, Introduction to Computer Systems"
      ]
    },
    {
      schoolName: "Kyung Hee University",
      logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Kyung_Hee_University_Logo.svg",
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
      companylogo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_NHN_Corporation_(2024).svg",
      date: "July 2020 – July 2025",
      desc: "Top-3 cloud service provider in South Korea. Built and operated the company-wide DevOps platform for NHN Cloud PaaS products.",
      descBullets: [
        "Built and operated 16 Kubernetes clusters (130+ nodes, 2,300+ pods) and CI/CD pipelines serving 30+ teams with ArgoCD, Jenkins, Keycloak, and Harbor",
        "Cut deployment task time by 83% by redesigning ArgoCD with the App of Apps pattern and ApplicationSet",
        "Migrated 10 legacy products to Kubernetes across 6 regions with zero production incidents",
        "Raised Loki log throughput 52% and cut write failures 74% via k6 benchmark-driven tuning",
        "Led a certificate-automation PoC with DigiCert HQ, cutting costs 20% — 2023 Employee of the Year"
      ]
    },
    {
      role: "Cloud Engineering Intern",
      company: "NHN",
      companylogo: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_NHN_Corporation_(2024).svg",
      date: "January 2020 – June 2020",
      desc: "Designed HA infrastructure for web services on the TOAST Cloud platform — Apache Tomcat clustering, MySQL replication, CI/CD, and monitoring."
    },
    {
      role: "Software Engineering Intern",
      company: "Naver",
      companylogo: "https://commons.wikimedia.org/wiki/Special:FilePath/Naver_logo_initial.svg",
      date: "July 2019 – August 2019",
      desc: "Refactored Naver Shopping Admin pages from legacy JSP to React, Node.js, GraphQL, and TypeScript with Apollo Client caching."
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
      projectName: "Financial Integration Service — Troutwood",
      projectDesc:
        "Serverless payroll-data ingestion platform on AWS (Lambda, SQS, DynamoDB, CDK). Designed the end-to-end CI/CD platform on GitHub Actions — 14 of 17 workflows, 6 solo: gated deploys, cdk diff previews, per-branch ephemeral stacks, GitHub OIDC auth, LocalStack integration-test CI, and gitleaks secret scanning.",
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
        "CMU ML in Production (17-645), 5-person team — Infrastructure & MLOps lead. Operated a recommender for a simulated 1M-user streaming service on k3s: Helm-deployed FastAPI inference + 4 ML CronJobs, GitHub Actions CI/CD (92% of pipeline commits), full Prometheus/Grafana/Loki observability with 5 dashboards, and co-built A/B testing infrastructure. Cut timeout rate ~15-20% to 3.3% and cold-start ~2s to <100ms (dev-measured)."
    },
    {
      image: require("./assets/images/mlplatformLogo.png"),
      projectName: "ML Experimentation Platform for Time-Series Anomaly Detection",
      projectDesc:
        "Independent Study. Versioned, reproducible experiment framework (PyTorch + Slurm + Weights & Biases) evaluating 5 model architectures across 200+ multivariate time-series datasets — fail-fast screening cut a 17 GPU-hour benchmark to 1.3 GPU-hours; 600+ tracked runs with offline-to-online sync for air-gapped HPC nodes."
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
      subtitle: "The Linux Foundation / CNCF — held 2022-2025",
      image: require("./assets/images/ckaBadge.png"),
      imageAlt: "CKA badge",
      footerLink: []
    },
    {
      title: "Employee of the Year",
      subtitle:
        "NHN Cloud Great Performance Awards 2023 — for the DigiCert certificate-automation PoC",
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
    "Looking for DevOps / Cloud / MLOps opportunities — my inbox is open.",
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

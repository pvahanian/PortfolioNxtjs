const jimmerosityStack = [
  { name: "Gatsby", techUsed: "/assets/Gatsby.svg" },
  { name: "React", techUsed: "/assets/React2svg.svg" },
  { name: "Figma", techUsed: "/assets/Figma.svg" },
  { name: "Chakra", techUsed: "/assets/chakra.svg" },
  { name: "Ghost", techUsed: "/assets/ghostsvg.svg" },
  { name: "GraphQL", techUsed: "/assets/graphql.svg" },
];

const slackerTechnologyStack = [
  { name: "Firebase", techUsed: "/assets/Firebase.svg" },
  { name: "React", techUsed: "/assets/React2svg.svg" },
  { name: "Figma", techUsed: "/assets/Figma.svg" },
  { name: "Material UI", techUsed: "/assets/MaterialUI.svg" },
];

const robotTechnologyStack = [
  { name: "React", techUsed: "/assets/React2svg.svg" },
  { name: "TypeScript", techUsed: "/assets/Typescriptlogo.svg" },
];

const clutchTechnologyStack = [
  { name: "Redux", techUsed: "/assets/Redux.svg" },
  { name: "Firebase", techUsed: "/assets/Firebase.svg" },
  { name: "React", techUsed: "/assets/React2svg.svg" },
  { name: "Figma", techUsed: "/assets/Figma.svg" },
];

const ewbTechnologyStack = [
  { name: "Redux", techUsed: "/assets/Redux.svg" },
  { name: "React", techUsed: "/assets/React2svg.svg" },
  { name: "Figma", techUsed: "/assets/Figma.svg" },
  { name: "Material UI", techUsed: "/assets/MaterialUI.svg" },
];

const projects = [
  {
    id: 0,
    name: <strong className="bold">Jimmerosity</strong>,
    shortDescription: "Non-Profit Anti Bullying Platform",
    description: (
      <>
        <p>
          Jimmerosity is an anti-bullying platform developed by the Fredette
          Family Foundation. Its goal is to promote anti-bullying techniques to
          teachers and students.
        </p>
        <p>
          It was created with{" "}
          <strong className="bold">
            Gatsby, Chakra-UI, Ghost, and GraphQL
          </strong>{" "}
          and prototyped in <strong className="bold">Figma</strong>.
        </p>
      </>
    ),
    bannerImage: "/assets/JimmerSite1.png",
    images: ["/assets/JimmerSite1.png", "/assets/Joinpage.png", "/assets/Dash.png"],
    siteLink: "https://choosekindness.life/",
    githubRepo: "https://github.com/agyin3/jimmerosity",
    roles: <p>Front-End and Designer</p>,
    technologies: jimmerosityStack,
    color: "grey",
  },
  {
    id: 1,
    name: <strong className="bold">Slacker</strong>,
    shortDescription: "Real-Time Messaging application",
    description: (
      <>
        <p>
          Slacker is a chat messaging application designed with Firebase
          and Firebase Authentication. It was prototyped in{" "}
          <strong className="bold">Figma</strong>.
        </p>
      </>
    ),
    bannerImage: "/assets/Slackerpreviews.png",
    images: ["/assets/Slackerpreviews.png", "/assets/figmaslack.png"],
    siteLink: "https://myslackerclone.vercel.app/",
    githubRepo: "https://github.com/pvahanian/mySlackerClone",
    roles: <p>Front-End, Back-End, and Designer</p>,
    technologies: slackerTechnologyStack,
    color: "grey",
  },
  {
    id: 2,
    name: <strong className="bold">Robot Challenge</strong>,
    shortDescription: "Robot TypeScript Challenge",
    description: (
      <>
        <p>
          A refactor of a failed coding challenge to create a cleaner, more
          effective solution. The project involved breaking down logic into
          testable functions and implementing TypeScript interfaces.
        </p>
      </>
    ),
    bannerImage: "/assets/Robotpreview.png",
    images: ["/assets/Robotpreview.png"],
    siteLink: "https://toy-robot-two.vercel.app/",
    githubRepo: "https://github.com/pvahanian/ToyRobotv2",
    roles: <p>Front-End</p>,
    technologies: robotTechnologyStack,
    color: "grey",
  },
  {
    id: 3,
    name: <strong className="bold">EWB 211</strong>,
    shortDescription: "UX Design and Accessibility Update",
    description: (
      <>
        <p>
          Improved user experience for 211info.org, focusing on accessibility
          and usability. The goal was to make it easier for people to find
          resources before becoming homeless.
        </p>
        <p>
          Designed and prototyped in{" "}
          <strong className="bold">Figma</strong>.
        </p>
      </>
    ),
    bannerImage: "/assets/211.png",
    images: ["/assets/211.png", "/assets/desktop211.png", "/assets/mobile211.png"],
    siteLink: "https://elastic-engelbart-deec3b.netlify.app/",
    githubRepo: "https://github.com/ewb-psu/shelter-project",
    roles: <p>UX and Front-End</p>,
    technologies: ewbTechnologyStack,
    color: "grey",
  },
  {
    id: 4,
    name: <strong className="bold">Clutch</strong>,
    shortDescription: "Interactive Sports Social Media Platform",
    description: (
      <>
        <p>
          A platform for athletes and fans to share and reward highlights of
          their favorite athletes.
        </p>
        <p>
          Designed and prototyped in{" "}
          <strong className="bold">Figma</strong>.
        </p>
      </>
    ),
    bannerImage: "/assets/ComingSoon.png",
    images: [
      "/assets/ClutchMobile1.png",
      "/assets/ClutchRecording.png",
      "/assets/ClutchMobileStats.png",
    ],
    siteLink: "https://colorlib.com/etc/cs/comingsoon_04/index.html",
    githubRepo: "https://github.com/pvahanian/clutchpv",
    roles: <p>Front-End</p>,
    technologies: clutchTechnologyStack,
    color: "grey",
  },
];

export default projects;

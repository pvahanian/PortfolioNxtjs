import sitepreview from "./assets/Slackerpreviews.png"
import jimmerSite from "./assets/JimmerSite1.png"
import robotpreview from "./assets/Robotpreview.png"
import ghostLogo from "./assets/ghostsvg.svg"
import graphql from "./assets/graphql.svg"
import firebaseName from "./assets/Firebase.svg"
import reactName from "./assets/React2svg.svg"
import redux from "./assets/Redux.svg"
import figma from "./assets/Figma.svg"
import dash from "./assets/Dash.png"
import materialui from "./assets/MaterialUI.svg"
import charka from "./assets/chakra.svg"
import Gatsby from "./assets/Gatsby.svg"
import ewb from "./assets/211.png"
import figmamobile from "./assets/mobile211.png"
import figmadesktop from "./assets/desktop211.png"
import figmaslack from "./assets/figmaslack.png"
import joinpage from "./assets/Joinpage.png"
import ClutchMobile from "./assets/ClutchMobile1.png"
import ClutchMobileStats from "./assets/ClutchMobileStats.png"
import ClutchRecording from "./assets/ClutchRecording.png"
import comingSoon from "./assets/ComingSoon.png"
import typescriptLogo from "./assets/Typescriptlogo.svg"

const jimmerosityStack = [
  { name: "Gatsby", techUsed: Gatsby },
  { name: "React", techUsed: reactName },
  { name: "Figma", techUsed: figma },
  { name: "Chakra", techUsed: charka },
  { name: "Ghost", techUsed: ghostLogo },
  { name: "GraphQL", techUsed: graphql },
]

const slackerTechnologyStack = [
  { name: "Firebase", techUsed: firebaseName },
  { name: "React", techUsed: reactName },
  { name: "Figma", techUsed: figma },
  { name: "Material Ui", techUsed: materialui },
]
const robotTechnologyStack = [
  { name: "React", techUsed: reactName },
  { name: "TypeScript", techUsed: typescriptLogo },
]
const clutchTechnologyStack = [
  { name: "Redux", techUsed: redux },
  { name: "Firebase", techUsed: firebaseName },
  { name: "React", techUsed: reactName },
  { name: "Figma", techUsed: figma },
]
const ewbTechnologyStack = [
  { name: "Redux", techUsed: redux },
  { name: "React", techUsed: reactName },
  { name: "Figma", techUsed: figma },
  { name: "Material Ui", techUsed: materialui },
]

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
        <br />
        <p>
          My responsibilities on this project were to create the design using
          Figma and then create the landing pages for choosekindness.life. I
          also design the dashboard element and created its components.
        </p>
        <br />
        <p>
          The site is being used at{" "}
          <a href="https://choosekindness.life/">choosekindness.life</a>. You
          can view figma mockups of the site{" "}
          <a href="https://www.figma.com/file/fkC5TZPeUYYxRze6N3x5Gk/Jimmerosity-Copy?node-id=71%3A3242">
            here.
          </a>{" "}
          Or view some of the images below.
          <p>
            <br />
            It was created with{" "}
            <strong className="bold">
              Gatsby, Chakra-UI, Ghost and GraphQL
            </strong>{" "}
            and prototyped in <strong className="bold">Figma</strong>.
          </p>
        </p>
        <br></br>
      </>
    ),
    bannerImage: jimmerSite,
    images: [jimmerSite, joinpage, dash],

    siteLink: "https://choosekindness.life/",
    githubRepo: "https://github.com/agyin3/jimmerosity",
    roles: <p>Front-End and Designer</p>,
    technologies: jimmerosityStack,
    color: "grey",
  },
  {
    id: 1,
    name: <strong className="bold">S{"</>"}acker</strong>,
    shortDescription: "RealTime Messaging application",
    description: (
      <>
        <p>
          S{"</>"}acker is a chat messaging application that was designed with
          the intention of learning how to use{" "}
          <strong className="bold">Firebase</strong> and
          <strong className="bold"> Firebase Authentication</strong>
        </p>
        <br></br>
        <p>
          It was created and prototyped in{" "}
          <strong className="bold">Figma</strong>.
        </p>
      </>
    ),
    bannerImage: sitepreview,
    images: [sitepreview, figmaslack],
    siteLink: "https://myslackerclone.vercel.app/",
    githubRepo: "https://github.com/pvahanian/mySlackerClone",
    roles: <p>Front-End, Back-End and Designer</p>,
    technologies: slackerTechnologyStack,
    color: "grey",
  },
  {
    id: 2,
    name: <strong className="bold">Robot Challenge</strong>,
    shortDescription: "Robot Typescript Challenge",
    description: (
      <>
        <p>
          Robot Challenge is a refactor project on a failed coding challenge.
          The original code worked but failed to be clean and effective so we
          decided to make the best possible version of the Robot challenge.
        </p>
        <br></br>
        <p>
          We asked teachers, mentors and anyone that had constructive feedback.
          They told us it was unorganized, difficult to understand and not DRY.
          After listening to them here is what we did:
        </p>
        <br></br>
        <ul>
          <li>
            Break up all logic out into smaller, easily testable
            functions/components.
          </li>
          <li>
            Effectively make a Typescript interface to handle our Robot
            information in an object.
          </li>
          <li>
            Add comments and explanations for other programers that view this
            code.
          </li>
        </ul>
      </>
    ),
    bannerImage: robotpreview,
    images: [robotpreview],
    siteLink: "https://toy-robot-two.vercel.app/",
    githubRepo: "https://github.com/pvahanian/ToyRobotv2",
    roles: <p>Front-End</p>,
    technologies: robotTechnologyStack,
    color: "grey",
  },
  {
    id: 3,
    name: <strong className="bold">EWB 211</strong>,
    shortDescription: "Update the UX design and accessability",
    description: (
      <>
        <p>
          The original concept of this design was to allow for realtime tracking
          of available shelter beds in the greater Portland, OR area.
          Unfortunately we quickly learned that, due to shelters regularly
          operating at full capacity, we needed to change our project. After
          speaking with 211info.org, we offered to improve their user experience
          when searching for services online.
        </p>
        <br></br>
        <p>
          The goal is to make it easier for people to find the resources they
          need before becoming homeless.
        </p>
        <br></br>
        <p>
          It was designed and prototyped in{" "}
          <strong className="bold">Figma</strong>.
        </p>
      </>
    ),
    bannerImage: ewb,
    images: [ewb, figmadesktop, figmamobile],
    siteLink: "https://elastic-engelbart-deec3b.netlify.app/",
    githubRepo: "https://github.com/ewb-psu/shelter-project",
    roles: <p>UX and Front-End</p>,
    technologies: ewbTechnologyStack,
    color: "grey",
  },
  {
    id: 4,
    name: <strong className="bold">Clutch</strong>,
    shortDescription: "Interactive sports social media platform",
    description: (
      <>
        <p>
          The concept of this application revolves around athletes and fans.
          Both users of the platform contributing highlights of their favorite
          athletes.
        </p>
        <br></br>
        <p>
          The goal is to reward athletes for their highlights and achievements.
          While also rewarding the fans that take the best highlights.
        </p>
        <br></br>
        <p>
          It was designed and prototyped in{" "}
          <strong className="bold">Figma</strong>.
        </p>
      </>
    ),
    bannerImage: comingSoon,
    images: [ClutchMobile, ClutchRecording, ClutchMobileStats],
    siteLink: "https://colorlib.com/etc/cs/comingsoon_04/index.html",
    githubRepo: "https://github.com/pvahanian/clutchpv",
    roles: <p>Front-End</p>,
    technologies: clutchTechnologyStack,
    color: "grey",
  },
]

export default projects

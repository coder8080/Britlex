import Speaking from "../../assets/speaking.png"
import Writing from "../../assets/writing.png"
import Reading from "../../assets/reading.png"
import Listening from "../../assets/listening.png"

const SKILLS_DATA = [
  {
    id: "1",
    img: Speaking,
    title: "speaking",
    description: [
      `Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only.`,
      `Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners.`,
    ],
    horizontal: false,
  },
  {
    id: "2",
    img: Writing,
    title: "writing",
    description: [
      `One of the most important and extensive areas of natural science, the science that studies substances, also their composition.`,
    ],
    horizontal: false,
  },
  {
    id: "3",
    img: Reading,
    title: "reading",
    description: [
      `Perception and response actions of the user resulting from the use and/or upcoming use of the product, system or service.`,
    ],
    horizontal: false,
  },
  {
    id: "4",
    img: Listening,
    title: "listening",
    description: [
      `Here you can find activities to practise your listening skills. Listening will help you to improve your understanding.`,
    ],
    horizontal: true,
  },
]

export default SKILLS_DATA

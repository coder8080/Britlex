import SelfStudy from '../../assets/self-study.png'
import OnlineClasses from '../../assets/online-classes.png'
import PersonalTuition from '../../assets/personal-tuition.png'

const STUDY_PLANS_DATA = [
  {
    id: '1',
    img: SelfStudy,
    title: 'Self-study online course',
    description:
      'Start learning English online in live classes with qualified EC teachers and students from all over the world.',
    price: '5.99',
    period: 'month',
  },
  {
    id: '2',
    img: OnlineClasses,
    title: 'Live online classes',
    description:
      'Interactive group classes with expert teachers. Free 7-day trial.',
    price: '12.99',
    period: 'month',
  },
  {
    id: '3',
    img: PersonalTuition,
    title: 'Personal Tuition',
    description:
      'Online one-to-one English tutoring – enjoy our first session for only $1.',
    price: '20.99',
    period: 'month',
  },
]

export default STUDY_PLANS_DATA

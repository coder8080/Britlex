import StudyPlan from '../study-plan/study-plan.component'
import STUDY_PLANS_DATA from './study-plans.data'
import './study-plans.styles.scss'

const StudyPlans = () => (
  <div className="study-plans">
    {STUDY_PLANS_DATA.map(({ id, ...plan }) => (
      <StudyPlan key={id} {...plan} />
    ))}
  </div>
)

export default StudyPlans

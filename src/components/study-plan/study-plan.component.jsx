import PriceBadge from '../price-badge/price-badge.component'
import './study-plan.styles.scss'

const StudyPlan = ({ img, title, description, price, period }) => (
  <div className="study-plan">
    <div className="image-container">
      <img src={img} alt="Illustration" />
    </div>
    <h3>{title}</h3>
    <p className="description">{description}</p>
    <div className="price-container">
      <PriceBadge price={price} period={period} />
    </div>
  </div>
)

export default StudyPlan

import './price-badge.styles.scss'

const PriceBadge = ({ price, period }) => (
  <div className="price-badge">
    <span className="price">£{price}</span>
    <span className="period">per {period}</span>
  </div>
)

export default PriceBadge

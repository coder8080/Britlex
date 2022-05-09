import Button from '../button/button.component'
import './skill-card.styles.scss'

const SkillCard = ({ img, title, description, horizontal, className }) => (
  <div
    className={`skill-card ${className ?? ''} ${
      horizontal ? 'horizontal' : ''
    }`}
  >
    <div className="img-container">
      <img src={img} alt={title} />{' '}
    </div>
    <div className="text-container">
      <h3>{title}</h3>
      {description.map((paragraph, i) => (
        <p key={i} className="paragraph">
          {paragraph}
        </p>
      ))}
      <Button>Learn more</Button>
    </div>
  </div>
)

export default SkillCard

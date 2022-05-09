import Languages from '../../assets/languages.png'
import Button from '../../components/button/button.component'
import LightBulb from '../../assets/light-bulb.png'
import AboutUs from '../../assets/about-us.png'
import ContactUs from '../../assets/contact-us.png'
import SkillCard from '../../components/skill-card/skill-card.component'
import StudyPlans from '../../components/study-plans/study-plans.component'
import Input from '../../components/input/input.component'
import SKILLS_DATA from './skills-data'
import './homepage.styles.scss'

const HomePage = () => (
  <div className="homepage container">
    <section className="section learn-languages">
      <div className="card">
        <div className="heading-container">
          <h1>Learn any foreign language</h1>
          <img src={LightBulb} className="light-bulb" alt="Light Bulb" />
        </div>
        <p className="description">
          With our teachers who write a program for each student, you will be
          able to make your first sketch after the first lesson.
        </p>
        <div className="button-container">
          <Button big={true}>Get started</Button>
        </div>
      </div>
      <div className="image-container">
        <img src={Languages} alt="Learn Languages" />
      </div>
    </section>
    <section className="section skills">
      <div className="title-container">
        <h2>Skills</h2>
      </div>
      <div className="skills-grid">
        {SKILLS_DATA.map(({ id, ...skill }) => (
          <SkillCard key={id} {...skill} className={skill.title} />
        ))}
      </div>
    </section>
    <section className="section about-us">
      <div className="title-container">
        <h2>About us</h2>
      </div>
      <div className="card">
        <p className="description">
          The model offers a framework for discussing problems related to the
          user's experience, as well as possible ways and means of solving them.
          Application development begins at the top level (strategy), where the
          future software product is described quite abstractly from the point
          of view of the expectations of both users and the customer.
        </p>
        <div className="data">
          <div className="data-fragment">
            <span className="number">800</span>
            <span className="explanation">Pupils</span>
          </div>
          <div className="data-fragment">
            <span className="number">18</span>
            <span className="explanation">Teachers</span>
          </div>
          <div className="data-fragment">
            <span className="number">6</span>
            <span className="explanation">Foreign languages</span>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={AboutUs} alt="About Us" />
      </div>
    </section>
    <section className="section pricing">
      <div className="title-container">
        <h2>Pricing</h2>
      </div>
      <StudyPlans />
    </section>
    <section className="section contact-us">
      <div className="title-container">
        <h2>Contact us</h2>
      </div>
      <div className="image-container">
        <img src={ContactUs} alt="Contact Us" />
      </div>
      <div className="card">
        <p className="description">
          Discover your current English level by taking our free online English
          test.Sign up to our newsletter for learning tips and free resources
        </p>
        <div className="input-container">
          <Input type="text" placeholder="Enter Your E-mail" />
          <Button className="big-radius">Subscribe</Button>
        </div>
      </div>
    </section>
  </div>
)

export default HomePage

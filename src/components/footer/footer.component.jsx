import Logo from '../logo/logo.component'
import './footer.styles.scss'

const Footer = () => (
  <div className="container">
    <div className="footer">
      <Logo />
      <span className="links">
        <span className="link">Terms and Conditions</span>
        <span className="divider">&nbsp;•&nbsp;</span>
        <span className="link">Privacy Policy</span>
        <span className="divider">&nbsp;•&nbsp;</span>
        <span className="link">Cookie Policy</span>
      </span>
    </div>
  </div>
)

export default Footer

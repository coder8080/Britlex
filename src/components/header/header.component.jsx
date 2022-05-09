import Button from '../button/button.component'
import Logo from '../logo/logo.component'
import './header.styles.scss'

const Header = () => (
  <div className="header">
    <nav className="nav container">
      <a href="/" className="logo-container">
        <Logo />
      </a>
      <div className="menu">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Skills</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Pricing</li>
          <li className="nav-item">Contacts</li>
        </ul>
        <Button className="talk-button outline">Let's Talk</Button>
      </div>
    </nav>
  </div>
)

export default Header

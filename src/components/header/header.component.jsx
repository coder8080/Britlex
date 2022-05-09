import { useState } from 'react'
import Button from '../button/button.component'
import Logo from '../logo/logo.component'
import Cross from '../../assets/cross.svg'
import Menu from '../../assets/menu-icon.svg'
import './header.styles.scss'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu((prev) => !prev)
  return (
    <div className="header">
      <div
        className={`dimming ${showMenu ? 'active' : ''}`}
        onClick={toggleMenu}
      />
      <nav className="nav container">
        <div className="logo-container">
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className={`menu ${showMenu ? 'active' : ''}`}>
          <div className="menu-logo-container">
            <Logo />
          </div>
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Skills</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">Contacts</li>
          </ul>
          <Button className="talk-button outline">Let's Talk</Button>
          <div className="close-menu" onClick={toggleMenu}>
            <img src={Cross} alt="Close" />
          </div>
        </div>
        <div className="open-menu" onClick={toggleMenu}>
          <img src={Menu} alt="Open Menu" />
        </div>
      </nav>
    </div>
  )
}

export default Header

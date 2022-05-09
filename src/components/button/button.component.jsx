import './button.styles.scss'

const Button = ({ children, className, big, ...props }) => (
  <a className={`btn ${className ?? ''} ${big ? 'big' : ''}`} {...props}>
    {children}
  </a>
)

export default Button

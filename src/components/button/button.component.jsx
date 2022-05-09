import './button.styles.scss'

const Button = ({ children, className, big, ...props }) => (
  <button className={`btn ${className ?? ''} ${big ? 'big' : ''}`} {...props}>
    {children}
  </button>
)

export default Button

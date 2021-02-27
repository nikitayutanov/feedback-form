import './Button.css';

function Button(props) {
  const { type = 'button', className = '', value, ...attrs } = props;

  return (
    <button type={type} className={`button ${className}`} {...attrs}>
      {value}
    </button>
  );
}

export default Button;

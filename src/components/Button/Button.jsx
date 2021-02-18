import './Button.css';

function Button(props) {
  const { type = 'button', className = '', value } = props;

  return (
    <button type={type} className={`button ${className}`}>
      {value}
    </button>
  );
}

export default Button;

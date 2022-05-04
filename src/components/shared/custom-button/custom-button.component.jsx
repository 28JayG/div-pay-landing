import './custom-button.styles.scss';

const CustomButton = ({ children, color = 'gradient', ...rest }) => (
  <button className={`custom-button ${color}`}>Join Now</button>
);

export default CustomButton
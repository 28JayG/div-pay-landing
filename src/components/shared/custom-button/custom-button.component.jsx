import Loader from '../loader/loader.component';
import './custom-button.styles.scss';

const CustomButton = ({ children, color = 'gradient', loading, ...rest }) => (
  <button className={`custom-button ${color}`}>
    {loading ? <Loader size='button' /> : children}
  </button>
);

export default CustomButton;

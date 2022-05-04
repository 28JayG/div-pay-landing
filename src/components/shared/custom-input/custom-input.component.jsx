import './custom-input.styles.scss'

const CustomInput = ({ label, ...rest }) => (
  <div className='input-container'>
    <label htmlFor='fullName' className='input-label'>
      {label}
    </label>
    <input className='ci-input' {...rest} />
  </div>
);

export default CustomInput;

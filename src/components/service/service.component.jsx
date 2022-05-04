import './service.styles.scss';

const Service = ({ icon, heading, text }) => (
  <div className='service'>
    <div className='s-icon-wrap'>
      <img src={icon} alt='' />
    </div>
    <h5 className='s-heading'>{heading}</h5>
    <p className='s-text'>{text}</p>
  </div>
);

export default Service;

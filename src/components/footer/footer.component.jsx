import CustomButton from 'components/shared/custom-button/custom-button.component';
import MaxWidthContainer from 'components/shared/max-width-container/max-width-container.component';

import './footer.styles.scss';

const Footer = () => (
  <footer className='footer'>
    <MaxWidthContainer>
      <div className='footer-content'>
        <div className='brand-logo-wrapper'>
          <img src='' alt='' className='brand-logo' />
        </div>
        <div className='footer-cta'>
          <p className='catch-phrase'>Be part of our community</p>
          <CustomButton color='white'>Join Now</CustomButton>
        </div>
      </div>
    </MaxWidthContainer>
  </footer>
);

export default Footer;

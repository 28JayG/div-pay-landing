import heroImage from 'assets/images/hero-img.png';

import CustomButton from 'components/shared/custom-button/custom-button.component';
import GradientText from 'components/shared/gradient-text/gradient-text.component';
import MaxWidthContainer from 'components/shared/max-width-container/max-width-container.component';

import './hero.styles.scss';

const Hero = () => {
  return (
    <MaxWidthContainer>
      <div className='h-row'>
        <div>
          <GradientText>A defi buy now pay later solution</GradientText>
          <p className='h-description'>
            Divpay enables users to make payments in crypto tokens and later
            break the payment in multiple small installmanents and pay later not
            only that it helps you track and manage ypur expenses
          </p>
          <CustomButton>join now</CustomButton>
        </div>

        <div className='h-img-wrapper'>
          <img src={heroImage} alt='div pay app' className='h-img' />
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default Hero;

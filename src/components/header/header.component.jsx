import MaxWidthContainer from 'components/shared/max-width-container/max-width-container.component';

import brandLogo from 'assets/images/logo.png';

import './header.styles.scss';

const Header = () => {
  return (
    <header className='nav-wrapper'>
      <MaxWidthContainer>
        <div className='nav'>
          <div className='brand-logo-wrapper'>
            <img src={brandLogo} alt='div pay' className='brand-logo' />
          </div>
          <button className='header-join-button'>join waiting list</button>
        </div>
      </MaxWidthContainer>
    </header>
  );
};

export default Header;

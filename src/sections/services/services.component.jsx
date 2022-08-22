import shopIcon from 'assets/icons/shop.svg';
import cardsIcon from 'assets/icons/cards.svg';
import favChart from 'assets/icons/favorite-chart.svg';

import Service from 'components/service/service.component';
import MaxWidthContainer from 'components/shared/max-width-container/max-width-container.component';

import './services.styles.scss';

const services = [
  {
    iconURI: shopIcon,
    heading: 'shop',
    text: 'Use divpay network to shop with merchants from various indusries',
  },
  {
    iconURI: cardsIcon,
    heading: 'Pay Later',
    text: 'Split your crypto payments into multiple small installments and pay later ',
  },
  {
    iconURI: favChart,
    heading: 'Monitor expenses',
    text: 'We help you track and manage expenses so you are always aware',
  },
];

const Services = () => (
  <MaxWidthContainer>
    <section className='serv-section'>
      <h4 className='ss-heading'>SERVICES</h4>
      <div className='ss-content'>
        <div>
          <h5 className='dp-intro-heading'>What is divpay</h5>
          <p className='dp-intro'>
            We are the first Buy now pay later decentralised platform in India
          </p>
        </div>

        <div className='ss-services'>
          {services.map(({ iconURI, heading, text }) => (
            <Service key={heading} icon={iconURI} heading={heading} text={text} />
          ))}
        </div>
      </div>
    </section>
  </MaxWidthContainer>
);

export default Services;

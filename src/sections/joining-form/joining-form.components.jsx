import { useState } from 'react';

import CustomButton from 'components/shared/custom-button/custom-button.component';
import CustomInput from 'components/shared/custom-input/custom-input.component';
import MaxWidthContainer from 'components/shared/max-width-container/max-width-container.component';

import './joining-form.styles.scss';

const JoiningForm = () => {
  const [state, setState] = useState({
    fullName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setState((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(state);
  };

  return (
    <MaxWidthContainer>
      <section id='jf-form' className='jf-wrapper'>
        <div className='jf-img-wrapper'>
          <img src='' alt='form' />
        </div>
        <div>
          <h5 className='jf-heading'>Join the waitinglist</h5>
          <h4 className='jf-sub-tilte'>Be part of our community</h4>
          <form className='jf' onSubmit={onSubmit}>
            <CustomInput
              label='Full Name'
              id='fullName'
              required
              placeholder='Your Name'
              onChange={handleChange}
            />
            <CustomInput
              required
              label='Email'
              id='email'
              type='email'
              placeholder='Your Email'
              onChange={handleChange}
            />
            <CustomButton type='submit'>Join Now</CustomButton>
          </form>
        </div>
      </section>
    </MaxWidthContainer>
  );
};

export default JoiningForm;

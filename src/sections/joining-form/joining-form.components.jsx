import { useState } from 'react';

import clipboardImage from 'assets/images/clipboard.png';
import { addMailToFirebase } from 'services/mails.services';

import CustomButton from 'components/shared/custom-button/custom-button.component';
import CustomInput from 'components/shared/custom-input/custom-input.component';
import MaxWidthContainer from 'components/shared/max-width-container/max-width-container.component';

import './joining-form.styles.scss';

const defaultMailState = {
  fullName: '',
  email: '',
};

const JoiningForm = () => {
  const [state, setState] = useState(defaultMailState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setState((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      setLoading(true);
      await addMailToFirebase(state);
      setState(defaultMailState);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <MaxWidthContainer>
      <section id='jf-form' className='jf-wrapper'>
        <div className='jf-img-wrapper'>
          <img src={clipboardImage} alt='clipboard' />
        </div>
        <div>
          <h5 className='jf-heading'>Join the waitinglist</h5>
          <h4 className='jf-sub-tilte'>Be part of our community</h4>
          <form className='jf' onSubmit={handleSubmit}>
            <CustomInput
              label='Full Name'
              id='fullName'
              required
              placeholder='Your Name'
              value={state.fullName}
              onChange={handleChange}
            />
            <CustomInput
              required
              label='Email'
              id='email'
              type='email'
              value={state.email}
              placeholder='Your Email'
              onChange={handleChange}
            />
            <CustomButton loading={loading} type='submit'>
              Join Now
            </CustomButton>
          </form>
        </div>
      </section>
    </MaxWidthContainer>
  );
};

export default JoiningForm;

import Footer from 'components/footer/footer.component';
import Header from 'components/header/header.component';
import Hero from 'components/hero/hero.component';
import JoiningForm from 'sections/joining-form/joining-form.components';
import Services from 'sections/services/services.component';

import './App.scss';

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header />
        <Hero />
        <Services />
        <JoiningForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;

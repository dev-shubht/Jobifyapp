/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
           🚀 Jobify – <span>Track jobs.</span> Land faster.
          </h1>
          <p>
           Tired of messy spreadsheets and endless tabs? With Jobify, managing your job search has never been easier. Track every application, organize interviews, and stay on top of your career goals — all in one sleek, powerful dashboard.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;

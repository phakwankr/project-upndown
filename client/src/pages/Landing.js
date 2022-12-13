import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav 
          className='nav-landing'>
        </nav>

        <div className='container-page'>

          {/* info */}
          <div className='info'>
            <h1>
              Exercise <span>tracking</span> app
            </h1>
            <p>
            Register now and push yourself to the next level
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login / Register
            </Link>
          </div>
          <img src={main} alt='landing-img' className='main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;

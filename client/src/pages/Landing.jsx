import React from 'react'
// import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg'
// import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import { Logo } from '../components';
const Landing = () => {
    return (
        <Wrapper>
            <nav>
               <Logo/>

            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        job <span>tracking</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate natus adipisci animi impedit facilis in nam eligendi sed error? Laudantium veritatis quod adipisci delectus magnam. Dolorum repellendus ipsam quam laborum.
                        Sapiente neque sunt magnam doloremque modi eligendi praesentium aspernatur minus culpa necessitatibus! Dignissimos excepturi vitae soluta iusto amet voluptates perspiciatis recusandae laudantium repudiandae delectus temporibus eius reprehenderit, voluptatum dolores modi.
                        Dignissimos accusamus ut fuga esse.

                    </p>
                    <Link to='/register' className='btn register-link'>
                        Register
                    </Link>
                    <Link to='/login' className='btn'>
                        Login / Demo User
                    </Link>
                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    );
};



export default Landing

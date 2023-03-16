import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom'; 

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
            <div className='info'>
                <h1>
                    job<span>tracking</span> app
                </h1>
                <p>I'm baby paleo fam cloud bread, chia helvetica bruh austin raclette polaroid meggings. Pug distillery fam, stumptown yes plz food truck shoreditch. Typewriter drinking vinegar normcore, ennui narwhal pok pok before they sold out. Humblebrag salvia tacos lomo, occupy tousled kinfolk locavore leggings waistcoat tote bag art party vinyl 3 wolf moon readymade.</p>
                <Link to='/register' className='btn btn-hero'>
                    Login/register
                </Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
    </Wrapper>
  )
}



export default Landing;

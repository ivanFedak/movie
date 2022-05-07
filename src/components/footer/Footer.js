
import {Link} from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import bg from '../../assets/img/footer-bg.jpg';

import './footer.sass';

const Footer = () => {

    return(
        <div className='footer' style={{backgroundImage:`url(${bg})`}}>
            <div className='footer__container _container'>
                <div className="footer__logo logo">
                    <img src={logo} alt="logo"/>
                    <Link to="/">tMovies</Link>
                </div>
                <div className="footer__menus">
                    <div className="footer__menu">
                        <Link to='/'>Home</Link>
                        <Link to='/'>Contact us</Link>
                        <Link to='/'>Term of services</Link>
                        <Link to='/'>About us</Link>
                    </div>
                    <div className="footer__menu">
                        <Link to='/'>Live</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Premium</Link>
                        <Link to='/'>Pravacy police</Link>
                    </div>
                    <div className="footer__menu">
                        <Link to='/'>You must watch</Link>
                        <Link to='/'>Recent release</Link>
                        <Link to='/'>Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Footer;
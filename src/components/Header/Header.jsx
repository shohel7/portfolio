import React, {useRef, useEffect} from 'react';
import { Container } from 'reactstrap';
import './Header.css';

const navLinks = [
    {
        display: 'Home',
        url: '#home'
    },
    {
        display: 'About',
        url: '#about'
    },
    {
        display: 'Services',
        url: '#services'
    },
    {
        display: 'Portfolio',
        url: '#portfolio'
    },
    {
        display: 'Contact',
        url: '#contact'
    },
]

const Header = () => {

    // for scroll code
    const headerRef = useRef(null);
     useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('header__shrink');
            }
            else{
                headerRef.current.classList.remove('header__shrink');
            }
        });
        return () => {
            window.removeEventListener('scroll');
        };
     }, []);

     const handleClick = (e) => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 70,
        });
     };
    return <header className='header' ref={headerRef}>
            <Container>
                <div className="navigation d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h5>shohel</h5>
                    </div>

                    <div className="nav__menu">
                      <ul className="nav__list">
                         {
                           navLinks.map((item, index) => <li className="nav__item">
                           <a href={item.url} onClick={handleClick}>{item.display}</a>
                           </li>)
                            
                         }
                      </ul>
                  </div>

                  <div className="nav__right d-flex align-items-center gap-4">
                    <button className="btn">Let's Talk</button>
                    <span className='mobile__menu'><i class='ri-menu-5-line'></i></span>
                  </div>
                  
                </div>

                
            </Container>
        </header>

};

export default Header;
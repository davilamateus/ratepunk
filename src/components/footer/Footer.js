import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Footer.css'
import { Icon } from '@iconify/react';


const Footer = () => {

    const navigate = useNavigate();
    const [pageActive, setPageActive ] = useState('');
    
    useEffect(()=>{
        setPageActive(window.location.pathname.split('/')[1])
    },[navigate])

  return (
    <div className='footer-div'>
        <div className='footer-container'>
            <div className="footer-about">
                <img src="assets/logo.svg" alt="Ratepunk Logo" />
                <p className="footer-about-text">
                Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!
                </p>
                <p className="copyright">© 2021 Ratepunk. All Rights Reserved.</p>
            </div>
            <div className="footer-quick-links">
                <h3>QUICK LINKS</h3>
                <nav>
                    <ul>
                        <li>
                            <Link className={pageActive == 'prices'? 'menuActive':''} to={'/prices'}>Price Comparison</Link>
                        </li>
                        <li >
                            <Link className={pageActive == ''? 'menuActive':''} to={'/'}>Chrome Extension</Link>
                        </li>
                        <li>
                            <Link className={pageActive == 'works'? 'menuActive':''} to={'/works'}>How It Works</Link>
                        </li>
                        <li>
                            <Link className={pageActive == 'blog'? 'menuActive':''} to={'/blog'}>Ratepunk Blog</Link>
                        </li>
                        <li>
                            <Link className={pageActive == 'policy'? 'menuActive':''} to={'/policy'}>Privacy Policy</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer-contact">
                <div className="contact-email">
                    <h3>CONTACT</h3>
                    <div>
                        <Icon icon="carbon:email" />
                        <p>hi@ratepunk.com</p>
                    </div>
                </div>
                <div className="contact-social">
                     <h3>SOCIAL</h3>
                     <div>
                            <a href="https://www.instagram.com/ratepunk/">
                                <img src="assets/instagram.svg" alt="Instagram icon" />
                            </a>
                            <a href="https://www.facebook.com/r8punk/">
                                <img src="assets/facebook.svg" alt="Facebook icon" />
                            </a>
                            <a href="https://www.linkedin.com/company/ratepunk/">
                                <img src="assets/linkedin.svg" alt="Linkedin icon" />
                            </a>
                            <a href="https://mobile.twitter.com/rate_punk">
                                 <img src="assets/twitter.svg" alt="Twitter icon" />
                            </a>
                            <a href="https://www.tiktok.com/@ratepunk">
                                <img src="assets/tiktok.svg" alt="Tiktok icon" />
                            </a>
                     </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
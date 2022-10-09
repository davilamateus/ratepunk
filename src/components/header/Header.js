import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    const [pageActive, setPageActive ] = useState('');
    
    useEffect(()=>{
        setPageActive(window.location.pathname.split('/')[1])
    },[navigate])


  return (
    <header className='header-div'>
        <div className="header-container">
            <div className="logo">
                <img src="/assets/logo.svg" alt="Logo RatePunk" />
            </div>
            <nav className="menu">
                <ul>
                    <li className={pageActive == '' ? 'menuActive' : ''}> <Link to={'/'}>Chrome Extension</Link></li>
                    <li className={pageActive == 'prices' ? 'menuActive' : ''}> <Link to={'/prices'}>Prince Comparison</Link></li>
                    <li className={pageActive == 'blog' ? 'menuActive' : ''}> <Link to={'/blog'}>Blog</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
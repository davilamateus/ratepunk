import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [pageActive, setPageActive ] = useState('');
    const [menuOpened, setMenuOpened] = useState(false);
    
    useEffect(()=>{
        setPageActive(window.location.pathname.split('/')[1]);
        setMenuOpened(false);
    },[navigate]);

    function menuAction(){
        if(menuOpened ===  true){
            setMenuOpened(false);
        } else{
            setMenuOpened(true);
        }
    }


  return (
    <header className='header-div'>
        <div className="header-container">  
            <div className="logo">
                <Link to={'/'}>
                     <img src="/assets/logo.svg" alt="Logo RatePunk" />
                </Link>
            </div>
            <nav className="menu">
                <ul>
                    <li className={pageActive == '' ? 'menuActive' : ''}> <Link to={'/'}>Chrome Extension</Link></li>
                    <li className={pageActive == 'prices' ? 'menuActive' : ''}> <Link to={'/prices'}>Prince Comparison</Link></li>
                    <li className={pageActive == 'blog' ? 'menuActive' : ''}> <Link to={'/blog'}>Blog</Link></li>
                </ul>
            </nav>
        </div>
        <div className={`header-container-mobile ${menuOpened == true ? 'menuOpened' :''}`}>
            <div className="mobileTop">
                <div className="logo">
                        <Link to={'/'}>
                            <img src="/assets/logo.svg" alt="Logo RatePunk" />
                        </Link>
                    </div>
                <div onClick={()=>{menuAction()}} className="menuHamburguer">
                    {menuOpened == false? 
                    <img src="./assets/menu.svg" alt="Menu" />
                    : 
                    <img src="./assets/close.svg" alt="Menu" />
                    }
                </div>
            </div>
            <nav className="menuMobile">
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

export default Header;
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Newletter from './pages/newletter';
import Header from './components/header/Header';
import Page404 from './pages/page404'
import Footer from './components/footer/Footer'

const router = () => {
  return (
      <BrowserRouter>
        <Header/>
            <Routes>
                <Route element={<Newletter/>}  path={'/'}/>
                <Route element={<Page404/>}  path={'/prices'}/>
                <Route element={<Page404/>}  path={'/blog'}/>
                <Route element={<Page404/>}  path={'/policy'}/>
                <Route element={<Page404/>}  path={'/works'}/>
            </Routes>
            <Footer/>
      
    </BrowserRouter>
  )
}

export default router
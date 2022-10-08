import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Newletter from './pages/newletter';
import Header from './components/header/Header';
import Page404 from './pages/page404'

const router = () => {
  return (
      <BrowserRouter>
        <Header/>
            <Routes>
                <Route element={<Newletter/>}  path={'/'}/>
                <Route element={<Page404/>}  path={'/prices'}/>
                <Route element={<Page404/>}  path={'/blog'}/>
            </Routes>
      
    </BrowserRouter>
  )
}

export default router
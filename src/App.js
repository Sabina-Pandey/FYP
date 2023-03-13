import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import SingleProduct from './components/SingleProduct';
import Shoping from './components/Shoping';
import Designer from './components/Designer';
import Log from './components/Log';
import Login from './components/Login';
import Cart from './components/Cart';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';


const App = () => {



  return (



    <BrowserRouter>

      <Routes>

        {/* <GlobalStyle /> */}

        {/* <Route path='/' element={<App/>}/>   */}

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/shoping' element={<Shoping />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/designer' element={<Designer />} />
        <Route path='/log' element={<Log />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/' element={<Login/>}/> */}
      </Routes>

    </BrowserRouter>

  );

}

export default App;

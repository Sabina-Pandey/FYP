import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Shoping from './components/Shoping';
import Designer from './components/Designer';
import Log from './components/Log';
import Login from './components/Login';
import CartList from './components/CartList';
import ShoeList from './components/ShoeList';
import Shop from './components/Shop';


// import { ThemeProvider } from 'styled-components';
// import { GlobalStyle } from './components/GlobalStyle';


const App = () => {



  return (



    <BrowserRouter>

      <Routes>

        {/* <GlobalStyle /> */}

        {/* <Route path='/' element={<App/>}/>   */}

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shoping' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/designer' element={<Designer />} />
        <Route path='/log' element={<Log />} />
        <Route path='/cart/shoeItem.product_name' element={<CartList />} />
        {/* <Route path='/' element={<Login/>}/> */}
      </Routes>

    </BrowserRouter>

  );

}

export default App;

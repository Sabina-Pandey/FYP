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
        <Route path='/shoping' element={<Shoping />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/designer' element={<Designer />} />
        <Route path='/log' element={<Log />} />
        <Route path='/cart' element={<CartList />} />
        {/* <Route path='/' element={<Login/>}/> */}
      </Routes>

    </BrowserRouter>

  );

}

export default App;

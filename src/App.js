import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import theme from './theme/index';
import Header from './components/Header';
import ShoppingCart from './pages/ShoppingCart';
import PDFRender from './pages/PDFRender';
import { BadgeProvider } from './contexts/BadgeContext';
import DetailProduct from './pages/DetailProduct';
import Footer from './components/Footer';
import Page404 from './pages/Page404';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BadgeProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/ordered' element={<PDFRender />} />
          <Route path='/detail/:idProduct' element={<DetailProduct />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </BadgeProvider>
    </ThemeProvider>
  );
};

export default App;

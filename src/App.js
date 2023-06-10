
import './App.css';
import './index.css';
import Header from './components/Header';
import ItemsMenu from './components/ItemsMenu';
import About from './components/About';
import Healthy from './components/Healthy';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';
import Icon from './components/Icon';
import ProductsList from './components/ProductsList';
import initialProducts from '../src/mocks/prodcuts.json';
import ProductsOfertas from '../src/mocks/ofertas.json';
import { HeaderMenu } from './components/headerMenu';

import Routes from './components/Routes';
import { useFilters } from './components/hooks/useFilters';


const App = () => {
  const [products] = useState(initialProducts)
  const {filterProducts}= useFilters()
  const filteredProducts = filterProducts(products.products)

  const FliteredOfertas=(ProductsOfertas.ofertas)
  return (
   
    <>

       <Header/>
       <Routes/>
       <Icon/>
        <ItemsMenu  products={FliteredOfertas}/>
        <HeaderMenu  />
        <ProductsList products={filteredProducts} />
        <About/>
        <Healthy/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </>
);
}

export default App;

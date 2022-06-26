import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import WomenClothes from './components/women/women.component'
import ChildrenClothes from './components/children/children.component'
import MenClothes from "./components/men/men.component";
import Home from "./components/home-page/home.component";
import SearchProduct from "./components/search-product/search-product.components";
import Cart from "./components/cart/cart.component";
import Liked from "./components/liked/liked.component";




const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}/>
          <Route path="women" element={<WomenClothes />}/>
          <Route path="men" element={<MenClothes />}/>
          <Route path="children" element={<ChildrenClothes />}/>
          <Route path="search" element={<SearchProduct />}/>
          <Route path="liked" element={<Liked />}/>
          <Route path="cart" element={<Cart />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

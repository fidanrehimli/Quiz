import { Form, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderBottom from "./layout/HeaderBottom";
import HeaderTop from "./layout/HeaderTop";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Promotion from "./pages/Promotion";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import Forms from "./pages/Forms";
import Homes from "./home/Homes";
import Gender from "./gender/Gender";
import Add from "./pages/Add";
import Shops from "./shop/Shops";
import Weeks from "./week/Weeks";
import Sellers from "./seller/Sellers";
import Card from "./card/Card";
import Blog from "./pages/Blog";
import Blogs from "./blog/Blogs";
import Letter from "./letter/Letter";
import Footer from "./footer/Footer";


function App() {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <Homes/>
      <Gender/>
      <Shops/>
      <Weeks/>
      <Sellers/>
      <Card/>
      <Blogs/>
      <Letter/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Promotion" element={<Promotion />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/" element={<Homes />} />
        <Route path="/Forms" element={<Forms />} />
      </Routes>
    </>
  );
}

export default App;

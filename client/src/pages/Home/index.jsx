import React, { useRef } from "react";
import ButtonCartCount from "../../components/common/ButtonCartCount";
import Footer from "../../components/common/Footer";
import Banner from "../../components/Home/Banner";
import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../redux/datas/foods";
import Header from "../../components/common/Header";

const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <div style={{ position: "relative", marginBottom: "100px" }}>
        <Header />
      </div>
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <ButtonCartCount />
    </div>
  );
};

export default Home;

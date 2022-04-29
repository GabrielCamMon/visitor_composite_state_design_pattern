import React, { useRef, useEffect, useState } from "react";
import ButtonCartCount from "../../components/common/ButtonCartCount";
import Footer from "../../components/common/Footer";
import Banner from "../../components/Home/Banner";
import Itens from "../../components/common/Itens";
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
      <div
        ref={menuRef}
        style={{ position: "relative", marginBottom: "100px" }}
      >
        <Header />
      </div>
      <Itens list={menuItemsData} />
      <Footer />
      <ButtonCartCount />
    </div>
  );
};

export default Home;

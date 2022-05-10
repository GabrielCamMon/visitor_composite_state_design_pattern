import React, { useRef, useEffect, useState } from "react";
import ButtonCartCount from "../../components/common/ButtonCartCount";
import Footer from "../../components/common/Footer";
import Banner from "../../components/Home/Banner";
import Itens from "../../components/common/Itens";
import { menuItemsData } from "../../redux/datas/foods";
import Header from "../../components/common/Header";
import selectorFood from "../../selectors/foods";

const Home = () => {
  const menuRef = useRef();
  const [type, setType] = useState("");

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleType = (type) => {
    setType(type);
  };
  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <div
        ref={menuRef}
        style={{ position: "relative", marginBottom: "100px" }}
      >
        <Header handleType={handleType} />
      </div>
      <Itens list={selectorFood(menuItemsData, type)} />
      <Footer />
      <ButtonCartCount />
    </div>
  );
};

export default Home;

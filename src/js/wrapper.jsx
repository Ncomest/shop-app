import React from "react";
import "../css/bodyHead.css";
import products from "./products";
import Sizewrap from "./size";
import { useState } from "react";
import RelatedProd from "./relatedProducts";
import { useEffect } from "react";

const Wrapper = ({ id }) => {
 /*
 Выбор ID продукта
 */

 // Используем состояние для хранения выбранного ID
 const [selectedId, setSelectedId] = useState(0);

 const handleSetSelectId = (id) => {
  setSelectedId(id);
  setCurrentTab(0);
  setCount(1);
  window.scrollTo(0, 0);
 };

 const curProduct = products.find((product) => product.id === selectedId);
 // Главная картинка, верное отображение
 useEffect(() => {
  if (curProduct) {
   setImageProduct(curProduct.image0);
  }
 }, [selectedId, curProduct]); // Включаем selectedId и curProduct в зависимости

 // Поиск продукта по ID

 // Кнопка выбора Desc Spec Rev
 const [currentTab, setCurrentTab] = useState(0);

 const handleTabClick = (tabIndex) => {
  setCurrentTab(tabIndex);
 };

 // Переменная количество единиц в корзину
 const [count, setCount] = useState(1);

 const handleIncrement = () => {
  setCount(count + 1);
 };

 const handleDecrement = () => {
  if (count > 1) {
   setCount(count - 1);
  }
 };

 //Добавить в корзину
 const [basketCount, setBasketCount] = useState(0);

 const handleAddBasket = () => {
  setBasketCount(parseInt(curProduct.sell * count) + basketCount);
 };

 const [imageProduct, setImageProduct] = useState(null);

 return (
  <div className="wrapp">
   <div className="topwrap">
    <div className="wrapName">{curProduct.gadget}</div>
    <p className="wrapNameText">Home / Product / Tv Collection</p>
   </div>
   <div className="shopDiv">
    <div className="shopBox">
     <svg
      className="ShopBoxImg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     >
      <path
       d="M0 2.25C0 2.05109 0.0790176 1.86032 0.21967 1.71967C0.360322 1.57902 0.551088 1.5 0.75 1.5H3C3.1673 1.50005 3.32978 1.55603 3.4616 1.65904C3.59342 1.76205 3.68701 1.90618 3.7275 2.0685L4.335 4.5H21.75C21.8601 4.5001 21.9689 4.52445 22.0685 4.57133C22.1682 4.6182 22.2563 4.68644 22.3266 4.77121C22.3969 4.85597 22.4477 4.95518 22.4753 5.06178C22.5029 5.16838 22.5068 5.27976 22.4865 5.388L20.2365 17.388C20.2043 17.5599 20.1131 17.7151 19.9786 17.8268C19.8442 17.9386 19.6749 17.9998 19.5 18H6C5.82515 17.9998 5.65585 17.9386 5.52137 17.8268C5.38688 17.7151 5.29567 17.5599 5.2635 17.388L3.015 5.4105L2.415 3H0.75C0.551088 3 0.360322 2.92098 0.21967 2.78033C0.0790176 2.63968 0 2.44891 0 2.25ZM4.653 6L6.6225 16.5H18.8775L20.847 6H4.653ZM7.5 18C6.70435 18 5.94129 18.3161 5.37868 18.8787C4.81607 19.4413 4.5 20.2044 4.5 21C4.5 21.7956 4.81607 22.5587 5.37868 23.1213C5.94129 23.6839 6.70435 24 7.5 24C8.29565 24 9.05871 23.6839 9.62132 23.1213C10.1839 22.5587 10.5 21.7956 10.5 21C10.5 20.2044 10.1839 19.4413 9.62132 18.8787C9.05871 18.3161 8.29565 18 7.5 18ZM18 18C17.2044 18 16.4413 18.3161 15.8787 18.8787C15.3161 19.4413 15 20.2044 15 21C15 21.7956 15.3161 22.5587 15.8787 23.1213C16.4413 23.6839 17.2044 24 18 24C18.7957 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21C21 20.2044 20.6839 19.4413 20.1213 18.8787C19.5587 18.3161 18.7957 18 18 18ZM7.5 19.5C7.89783 19.5 8.27936 19.658 8.56066 19.9393C8.84196 20.2206 9 20.6022 9 21C9 21.3978 8.84196 21.7794 8.56066 22.0607C8.27936 22.342 7.89783 22.5 7.5 22.5C7.10218 22.5 6.72065 22.342 6.43934 22.0607C6.15804 21.7794 6 21.3978 6 21C6 20.6022 6.15804 20.2206 6.43934 19.9393C6.72065 19.658 7.10218 19.5 7.5 19.5ZM18 19.5C18.3978 19.5 18.7794 19.658 19.0607 19.9393C19.342 20.2206 19.5 20.6022 19.5 21C19.5 21.3978 19.342 21.7794 19.0607 22.0607C18.7794 22.342 18.3978 22.5 18 22.5C17.6022 22.5 17.2206 22.342 16.9393 22.0607C16.658 21.7794 16.5 21.3978 16.5 21C16.5 20.6022 16.658 20.2206 16.9393 19.9393C17.2206 19.658 17.6022 19.5 18 19.5Z"
       fill="#ffffff"
      />
     </svg>
     <div className="priceBox">
      <p>${basketCount}</p>
     </div>
    </div>
   </div>
   <div className="botwrap">
    <div className="sideBar">
     <div /*style={{ border: "1px solid red" }}*/>
      <img
       style={{ height: "100px" }}
       src={curProduct.image1}
       alt="image1"
       onClick={() => {
        setImageProduct(curProduct.image1);
       }}
      />
     </div>
     <div>
      <img
       style={{ height: "100px" }}
       src={curProduct.image2}
       alt="image2"
       onClick={() => {
        setImageProduct(curProduct.image2);
       }}
      />
     </div>
     <div>
      <img
       style={{ height: "100px" }}
       src={curProduct.image3}
       alt="image3"
       onClick={() => {
        setImageProduct(curProduct.image3);
       }}
      />
     </div>
     <div>
      <img
       style={{ height: "100px" }}
       src={curProduct.image4}
       alt="image4"
       onClick={() => {
        setImageProduct(curProduct.image4);
       }}
      />
     </div>
    </div>
    <div className="mainImage">
     <img style={{ height: "500px" }} src={imageProduct} alt="mainImg" />
    </div>
    <div className="rightDiv">
     <p>Brand: {curProduct.brand}</p>
     <p>Model: {curProduct.model}</p>
     <p>Availability: {curProduct.availability}</p>
     <h2
      style={{
       textTransform: "uppercase",
       fontSize: "32px",
       fontWeight: "500",
      }}
     >
      {curProduct.model2}
     </h2>
     <ul>
      <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
      <li>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</li>
      <li>Hands-free Voice Control, Always Ready</li>
      <li>
       Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
      </li>
      <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
     </ul>
     <Sizewrap id={selectedId} />
     <p>USD(incl. of all taxes):</p>
     <div className="sellsBox">
      <div className="sellS">${curProduct.sell}</div>
      <del>
       <p
        style={{
         opacity: "0.5",
         fontSize: "24px",
         fontWeight: "500",
         textDecoration: "uppercase",
        }}
       >
        ${curProduct.oldsell}
       </p>
      </del>
     </div>
    </div>
   </div>
   <div
    className="selectAdd __flex"
    style={{ justifyContent: "space-between", paddingBottom: "80px" }}
   >
    <div style={{ padding: "0px 0px 0px 590px" }}>
     <p style={{ color: "#6f6f6f", fontSize: "15px" }}>{curProduct.model2}</p>
    </div>
    <div style={{}}>
     <div className="btnDivAdd __alCenter">
      <div className="__alCenter">
       <button onClick={handleDecrement} className="addOrDel">
        -
       </button>
       <p
        className="addNum"
        style={{
         fontSize: "32px",
         marginRight: "20px",
         fontWeight: "600",
        }}
       >
        {count}
       </p>
       <button onClick={handleIncrement} className="addOrDel">
        +
       </button>
      </div>
      <div className="btnDiv" style={{ paddingRight: "20px" }}>
       <button className="buyNow">Buy Now</button>
      </div>
      <div>
       <button onClick={handleAddBasket} className="addToCart">
        Add to Cart
       </button>
      </div>
     </div>
    </div>
   </div>
   <div className="botDiv">
    <h3
     style={{ color: currentTab === 0 ? "black" : "gray" }}
     className="curTab"
     onClick={() => handleTabClick(0)}
    >
     Description
    </h3>
    <h3
     style={{ color: currentTab === 1 ? "black" : "gray" }}
     className="curTab"
     s
     onClick={() => handleTabClick(1)}
    >
     Specification
    </h3>
    <h3
     style={{ color: currentTab === 2 ? "black" : "gray" }}
     className="curTab"
     onClick={() => handleTabClick(2)}
    >
     Reviews
    </h3>
   </div>
   <div className="DesContainer">
    <div>
     {currentTab === 0 && <p className="descrP">{curProduct.description}</p>}
    </div>
    <div>
     {currentTab === 1 && <p className="descrP">{curProduct.specification}</p>}
    </div>
    <div>
     {currentTab === 2 && <p className="descrP">{curProduct.reviews}</p>}
    </div>
    <RelatedProd handleSetSelectId={handleSetSelectId} />
   </div>
  </div>
 );
};

export default Wrapper;

import "../css/header.css";
import microHeader from "../image/microHeader.png";
import Frame from "../image/Frame.svg";
import heart from "../image/heart.svg";
import bi_cart from "../image/bi_cart.svg";
import { useState } from "react";

function Header({ setButtonPopup }) {
 const [menuList, setmenuList] = useState(false);
 const [langList, setLangList] = useState(false);
 const [money, setMoney] = useState(false);

 return (
  <div className="Header __global">
   <div className="topHeader">
    <div className="topHLeft">
     <p>Welcome to Needus & Get the best product</p>
    </div>
    <div className="topHRight">
     <div className="lang_list_main">
      <p>ENG</p>

      {langList && (
       <ul className="lang_list">
        <li>RU</li>
        <li>GR</li>
        <li>UK</li>
       </ul>
      )}
     </div>

     {langList ? (
      <p
       onClick={() => {
        setLangList(false);
       }}
      >
       ▲
      </p>
     ) : (
      <p
       onClick={() => {
        setLangList(true);
       }}
      >
       ▼
      </p>
     )}

     <p>|</p>

     <div className="lang_list_main">
      <p>USD </p>

      {money && (
       <ul className="lang_list">
        <li>RU</li>
        <li>KR</li>
        <li>EUR</li>
       </ul>
      )}
     </div>

     {money ? (
      <p
       onClick={() => {
        setMoney(false);
       }}
      >
       ▲
      </p>
     ) : (
      <p
       onClick={() => {
        setMoney(true);
       }}
      >
       ▼
      </p>
     )}
    </div>
   </div>
   <div className="middleHeader">
    <div className="logo">
     <p>Needus.</p>
    </div>
    <div className="search">
     <input type="text" placeholder="Search Products" />
    </div>
    <div className="categorySearch">
     <div>
      <ul>
       <li className="catgChoice">All Categories ▼</li>
      </ul>
     </div>
     <div className="searchclick">
      <img
       className="srchicon"
       src={Frame}
       alt="search"
       width="24"
       height="24"
      />
     </div>
    </div>
    <div className="profile">
     <div className="login">
      <p
       onClick={() => {
        setButtonPopup(true);
       }}
      >
       Login
      </p>
     </div>
     <div className="card">
      <img src={heart} alt="heart" />
      <img src={bi_cart} alt="put" />
     </div>
    </div>
   </div>
   <div className="mainHeader">
    <div className="categories">
     <div>
      <div className="catgcont">
       <span className="tire"></span>

       <p>All Categories</p>

       {menuList ? (
        <span onClick={() => setmenuList(false)}>▲</span>
       ) : (
        <span onClick={() => setmenuList(true)}>▼</span>
       )}
      </div>

      {menuList && (
       <ul className="categ__menu_list">
        <li className="categ__list">tv</li>
        <li className="categ__list">phone</li>
        <li className="categ__list">notebook</li>
        <li className="categ__list">table</li>
       </ul>
      )}
     </div>
    </div>
    <nav className="navBar">
     <div>
      <a href="#">home</a>
     </div>
     <div>
      <a href="#">about</a>
     </div>
     <div>
      <a href="#">product</a>
     </div>
     <div>
      <a href="#">pages</a>
     </div>
     <div>
      <a href="#">contact</a>
     </div>
    </nav>
    <div className="callBack">
     <div>
      <img src={microHeader} alt="micro" />
     </div>
     <div className="contUs">
      <div className="headerContact">countact us 24/7</div>
      <div className="headerPhone">+12012987481</div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Header;

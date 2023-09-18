import React from "react";
import Header from "./js/header";
import Wrapper from "./js/wrapper";
import Footer from "./js/footer";
import Popup from "./js/popup";
import { useState, useEffect } from "react";

function App() {
 //Кнопка вызова Popup
 const [buttonPopup, setButtonPopup] = useState(false);

 useEffect(() => {
  // Добавляем CSS класс при buttonPopup === true
  if (buttonPopup) {
   document.body.classList.add("no-scroll");
  } else {
   // Удаляем CSS класс при buttonPopup === false
   document.body.classList.remove("no-scroll");
  }

  // Очищаем эффект, когда компонент размонтируется
  return () => {
   document.body.classList.remove("no-scroll");
  };
 }, [buttonPopup]);

 return (
  <div>
   <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
   <Header setButtonPopup={setButtonPopup} />
   <Wrapper id={0} />
   <Footer />
  </div>
 );
}

export default App;

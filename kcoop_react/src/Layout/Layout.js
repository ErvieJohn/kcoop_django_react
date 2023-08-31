import { Outlet } from "react-router-dom";
import Header from "../screens/Header"; //  verify it's the correct path
import Footer from "../screens/Footer"; //  verify it's the correct path
import LoginModal from "../screens/Modal/LoginModal";
import React, { useState } from 'react';

import MessengerCustomerChat from "react-messenger-customer-chat";

const Layout = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal-login')
  } else {
    document.body.classList.remove('active-modal-login')
  }

  return (
    <>
      <Header currentModal={modal} modalToggle={toggleModal}/>

      {modal && (
      <LoginModal modalToggle={toggleModal}/>
    )}


      <Outlet />
      <Footer />

      <MessengerCustomerChat
          //pageId="195953314332304"
          pageId="103650635162558"
          appId="242024521859892"
          //htmlRef="<REF_STRING>"
        />
    </>
  );
};

export default Layout;

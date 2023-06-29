import { Outlet } from "react-router-dom";
import Header from "../screens/Header"; //  verify it's the correct path
import Footer from "../screens/Footer"; //  verify it's the correct path


import MessengerCustomerChat from "react-messenger-customer-chat";

const Layout = () => {
  return (
    <>
      <Header />
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

import { Outlet } from "react-router-dom";
import Header from "../screens/Header"; //  verify it's the correct path



const CMSLayout = () => {
  const [User, setUser] = useState(localStorage.getItem('USER'));

  function AuthLogout(){
    localStorage.removeItem('USER');
    let isLoggedIn = null;
    setUser(isLoggedIn);
  }


  return (
    <>
    {User ? (<>
        <Header />
        <Outlet />
        <p>{User}</p>
        <button onClick={AuthLogout}>logout</button>
    </>):(<>
        <Navigate replace to="/cms/login" />
    </>)}
      
    </>
  );
};

export default CMSLayout;

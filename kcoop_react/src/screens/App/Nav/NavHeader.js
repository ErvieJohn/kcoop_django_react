import React from 'react'

function NavHeader(props) {
    const toggleLogout= () =>{
        props.logout();
    }

  return (
    <div>
        <button onClick={toggleLogout}>LOGOUT</button>
    </div>
  )
}

export default NavHeader
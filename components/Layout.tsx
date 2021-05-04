import NavBar from "components/NavBar";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <NavBar/>

      {children}
    </div>
  )
}

export default Layout;

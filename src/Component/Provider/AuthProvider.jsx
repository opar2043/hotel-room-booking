
// import { createContext, useEffect, useState } from "react";
// export const AuthContex = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [drawerOpen, setDrawerOpen] = useState()

//   function openDrawer(){
//       setDrawerOpen(!false)
//   }



//   const obj = {
   
//     loading,
//     setLoading,
//     openDrawer,
//      setUser,
//      drawerOpen
//   };

//   return <AuthContex.Provider value={obj}>{children}</AuthContex.Provider>;
// };

// export default AuthProvider;











import { createContext, useState } from "react";
export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Global drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Global cart state
  const [cart, setCart] = useState([]);

  // Controls
  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const obj = {
    user,
    setUser,
    loading,
    setLoading,

    drawerOpen,
    openDrawer,
    closeDrawer,
    toggleDrawer,

    cart,
    setCart,
  };

  return <AuthContex.Provider value={obj}>{children}</AuthContex.Provider>;
};

export default AuthProvider;

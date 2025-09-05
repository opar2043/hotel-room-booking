
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
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




  const provider = new GoogleAuthProvider()




    function handleGoogle() {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  function handleLogout(){
    setLoading(true);
    return signOut(auth )
  }


  function handleRegister(email , pass){
      setLoading(true)
      return createUserWithEmailAndPassword(auth , email , pass)
  }

  function handleLogin(email , pass){
     setLoading(true)
     return signInWithEmailAndPassword(auth , email , pass)
  }

  function resetPass (email){
       setLoading(true)
       return sendPasswordResetEmail(auth, email)
  }

  
  useEffect(()=>{
     const unsub = onAuthStateChanged(auth , currentUser => {
          if(currentUser){
               setLoading(false)
               setUser(currentUser)
          }else{
               setLoading(true)
               setUser(null)
          }
     })

     return ()=> unsub()
  },[])

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

    handleGoogle ,
    handleLogout,
    handleRegister,
    resetPass,
    handleLogin
  };

  return <AuthContex.Provider value={obj}>{children}</AuthContex.Provider>;
};

export default AuthProvider;

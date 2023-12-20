import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // ======== Create New User =======
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // ====== update profile name =====
  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  // ========= login user =========
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google login Provider  ======
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // ==== logout ======
  const logOut = () => {
    return signOut(auth);
  };
  //  Auth on state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [user]);

  // call all function ======
  const authentication = {
    createUser,
    updateUser,
    loginUser,
    logOut,
    user,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

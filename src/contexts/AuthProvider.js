import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Register
  const createUser = (email, password) => {
    // setLoading(true);
    console.log("email", email);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Register
  //   Profile photo and name update
  const updateUser = (userInfo) => {
    console.log("userInfo", userInfo);
    return updateProfile(auth.currentUser, userInfo);
  };

  const logOut = () => {
    setLoading(true);
    // localStorage.removeItem("accessToken");
    return signOut(auth);
  };

  //   Login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = { user, loading, createUser, updateUser, signIn, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

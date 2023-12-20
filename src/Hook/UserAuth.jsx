import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const UserAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default UserAuth;

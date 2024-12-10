import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    location: "Jakarta, Indonesia",
    phone: "081234567890",
    email: "johndoe@example.com",
    profilePicture: "",
    subscription: "Paket Premium",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

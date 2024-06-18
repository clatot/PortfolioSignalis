import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("HOME");

  return (
    <NavigationContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);

import { useContext, createContext } from "react";

const nameProvider = createContext();

export function NameContext({ children }) {
    const UseName = "Patrick"
    const Email = "akpanumohdaniel@gmail.com"

  return (<nameProvider.Provider value={{UseName, Email}}>{children}</nameProvider.Provider>);
}

export function UseNameContext() {
  const context = useContext(nameProvider);

  if (!context) throw new Error("componet must be inside of name context");
  return context;
}

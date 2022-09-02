import React, { useState } from "react";
import { ContextType } from "../utils/interfaceDef";

export const contextObj = React.createContext<ContextType>({
  handleDrawerClose: () => {},
  handleDrawerOpen: () => {},
  open: false,
});

const ContextObjProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const value = {
    // drawerWidth: 240,
    open: open,
    handleDrawerOpen,
    handleDrawerClose,
  };

  return (
    <contextObj.Provider value={value}>{props.children}</contextObj.Provider>
  );
};

export default ContextObjProvider;

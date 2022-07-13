import { useState, createContext, useContext } from "react";

const Globaldata = createContext();

export const useCounter = () => useContext(Globaldata);

function GlobaldataProider(props) {
  
  const baseUrl = "https://localhost:7080/api"



  const value = { baseUrl };

  return (
    <Globaldata.Provider value={value}>{props.children}</Globaldata.Provider>
  );
}

export default GlobaldataProider;

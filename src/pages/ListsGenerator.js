import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/UI/NavBar";
import SubscribedTicketsList from "../components/SubscribedLists/SubscribedTicketsList";


const ListsGenerator = () => {
  return (
    <div>
      <Navbar />
      <SubscribedTicketsList />
      
    </div>
  );
};
export default ListsGenerator;

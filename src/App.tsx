import { useState } from "react";
import Modal from "react-modal";
import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard";
import Header from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";


Modal.setAppElement('#root')

export function App() {
  const[isNewTransactionModlOpen,
    setisNewTransactionModlOpen] = useState (false);

 function handleOpenisNewTransactionModlOpen(){
   setisNewTransactionModlOpen(true);
 }

 function handleCloseisNewTransactionModlOpen(){
   setisNewTransactionModlOpen(false);
 }
  return (
    <>
      <Header onOpeNewTransactionModal={handleOpenisNewTransactionModlOpen}/>
      <Dashboard/>
    
      <NewTransactionModal isOpen={isNewTransactionModlOpen} onRequestClose={handleCloseisNewTransactionModlOpen}/>    
      <GlobalStyle/>
    </>
  );
}

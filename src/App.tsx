import { useState } from "react";
import Modal from "react-modal";
import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard";
import Header from "./components/Header";


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
    
      <Modal 
      isOpen={isNewTransactionModlOpen}
      onRequestClose={handleCloseisNewTransactionModlOpen}
      >
        <h1>Nova transação</h1>
      </Modal>
      
      <GlobalStyle/>
    </>
  );
}

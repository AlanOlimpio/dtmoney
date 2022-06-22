import Modal from "react-modal";
import {Container, TransactionTypeContainer} from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface ModalProps{
  isOpen: boolean;
  onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen, onRequestClose}:ModalProps){

  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName='react-modal-overlay'
    className='react-modal-content'
    >
      <button 
      type="button" 
      onClick={onRequestClose}
      className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
      <h2>Nova transação</h2>

      <input 
      type="text" 
      name="title" 
      placeholder="Título"
      />
      
      <input 
      type="number" 
      name="valor" 
      placeholder="Valor"
      />
      <TransactionTypeContainer>
      <button
          type="button"
          >
          <img src={incomeImg} alt="Entrada" />
        </button>
        <button
          type="button"
          >
          <img src={outcomeImg} alt="Saida" />
        </button>
      </TransactionTypeContainer>
      <input 
      type="text" 
      name="category" 
      placeholder="Categoria"
      />
      
      <button type="submit">Cadastrar</button>
    
      </Container>
      
    </Modal>
    
  )
}
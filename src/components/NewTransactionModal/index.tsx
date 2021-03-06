import Modal from "react-modal";
import {Container, TransactionTypeContainer, RadioBox} from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { type } from "os";
import { api } from "../../services/api";

interface ModalProps{
  isOpen: boolean;
  onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen, onRequestClose}:ModalProps){
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit')

function handleCreateNewTransaction(event:FormEvent){
  event.preventDefault();

  const data ={
      title,
      category,
      value,
      type
  }

 //api.post('/transactions', data);

}

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

      <Container  onSubmit={handleCreateNewTransaction}>
      <h2>Nova transação</h2>

      <input 
      type="text" 
      name="title" 
      placeholder="Título"
      value={title}
      onChange={event => setTitle(event.target.value)}
      />
      
      <input 
      type="number" 
      name="valor" 
      placeholder="Valor"
      value={value}
      onChange={event => setValue(Number(event.target.value))}
      />
      <TransactionTypeContainer>
      <RadioBox
      type="button"
      onClick={()=>{ setType('deposit')}}
      isActive={ type === 'deposit'}
      isActiveColor='green'
      >
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </RadioBox>
        <RadioBox
        type="button"
        onClick={()=>{ setType('withdraw')}}
        isActive={ type === 'withdraw'}
        isActiveColor='red'
          >
          <img src={outcomeImg} alt="Saida" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>
      <input 
      type="text" 
      name="category" 
      placeholder="Categoria"
      value={category}
      onChange={event => setCategory(event.target.value)}
      />
      
      <button type="submit">Cadastrar</button>
    
      </Container>
      
    </Modal>
    
  )
}
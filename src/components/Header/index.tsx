import { useState } from 'react'
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpeNewTransactionModal:() => void;
}


export default function Header({onOpeNewTransactionModal}: HeaderProps){
  
  return (
    <Container>
       <Content>
      <img src={logoImg } alt="dt money" />
      <button type="button" onClick={onOpeNewTransactionModal}>
        Nova transação
      </button>
      
      </Content>
    </Container>
  )
}
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionsPropsInterface {
  id:string;
  title:string;
  amount:number;
  type:string;
  category:string;
  createdAt:string;
}

export function TransationsTable(){
  const [transaction, setTransaction] = useState<TransactionsPropsInterface[]>([]);
useEffect(()=> {
  api.get('transactions')
   .then(response => setTransaction(response.data.transactions))
},[]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th className="title">Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
         </tr>
        </thead>
        <tbody>
          {
            transaction.map( transaction => (
             
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>
                          {new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency: 'BRL'
                          }).format(transaction.amount)}
                        </td>
                        <td>{transaction.category}</td>
                        <td>
                           {new Intl.DateTimeFormat('pt-BR')
                           .format(new Date(transaction.createdAt))}</td>
                    </tr>
          
              ))
          }
          
         
        </tbody>
      </table>
    </Container>
    
  )
}
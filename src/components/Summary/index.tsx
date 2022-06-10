import icomeImg from '../../assets/income.svg';
import outcomeIMG from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from "./styles";

export function Summary(){
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeImg} alt="Entradas"/>
        </header>
        <strong>R$1000.00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIMG} alt="Entradas"/>
        </header>
        <strong>- R$500.00</strong>
      </div>
      <div className="highlight-background"> 
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Entradas"/>
        </header>
        <strong>R$500.00</strong>
      </div>
    </Container>
    
  )
}
import { useState } from "react";
import Filho from "../Filho/Filho";

import "./Pai.css";

const Pai = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const enviaAoFilho = () => {
    return count;
  };

  return (
    <div className="Pai">
      <div className="Conteudo-Pai">
        <h1>Componente Pai</h1>
        <h2>Contador {count}</h2>
        <button onClick={increment}> Adicionar </button>
      </div>
      {/* ENVIAR E RECEBER DADOS FILHO */}
      {/* <Filho handleReceber={enviaAoFilho} handleEnviar={increment} /> */}
      {/* SÓ ENVIAR DADOS AO FILHO */}
      <Filho handleReceber={enviaAoFilho} />
    </div>
  );
};

export default Pai;

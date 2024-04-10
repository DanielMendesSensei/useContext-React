import { useContext } from "react";
import Filho from "../Filho/Filho";
import { CountContext } from "../../../context/CountContext";

import "../../Pai/Pai.css";

const PaiContext = () => {
  // Precisamos extrair de themecontext, como ele vem de value e é um objeto, usamos as chaves
  const { count, increment } = useContext(CountContext);

  return (
    <div className="Pai">
      <div className="Conteudo-Pai">
        <h1>Componente Pai</h1>
        <h2>Contador {count}</h2>
        <button onClick={increment}> Adicionar </button>
      </div>
      <Filho />
    </div>
  );
};

export default PaiContext;

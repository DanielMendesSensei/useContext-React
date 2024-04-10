import { useContext } from "react";
import { CountContext } from "../../../context/CountContext";

const Filho = () => {
  // Precisamos extrair de Countcontext, como ele vem de value e é um objeto, usamos as chaves
  // const { count } = useContext(CountContext);
  const { count, increment } = useContext(CountContext);

  return (
    <div className="Filho">
      <h1>Componente Filho</h1>
      <h2>Recebi do pai {count} </h2>
      {/* E SE EU QUISESSE ENVIAR AO PAI COM useContext */}
      <button onClick={increment}>Enviar ao Pai</button>
    </div>
  );
};

export default Filho;

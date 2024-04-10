import { useState } from "react";

// Aqui passa-se as propriedades do filho para quando ser chamado
// eslint-disable-next-line react/prop-types
const Filho = ({ handleReceber, handleEnviar }) => {
  const [dados, setDados] = useState(null);

  const receberDoPai = () => {
    setDados(handleReceber);
  };

  // E se eu quisesse enviar os dados para o pai?
  const enviarAoPai = () => {
    setDados(handleEnviar);
  };

  return (
    <div className="Filho">
      <h1>Componente Filho</h1>
      <h2>Recebi do pai {dados} </h2>
      {/* RECEBER DADOS DO PAI */}
      <button onClick={receberDoPai}> Receber dados do Pai </button>
      {/* ENVIAR DADOS AO PAI */}
      {/* <button onClick={enviarAoPai}> Adicionar ao Pai </button> */}
    </div>
  );
};

export default Filho;

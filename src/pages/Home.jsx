import { createContext, useContext, useState } from "react";

import "./Home.css";

const AppContext = createContext(null); // As vez a gente precisa começar com um valor inicial

const Home = () => {
  const [name, setName] = useState("Dan");

  return (
    <AppContext.Provider value={{ name, setName }}>
      <div className="Home">{name}</div>
      <ChildrenOne />
    </AppContext.Provider>
  );
};

//Esse aqui tá limpo!
const ChildrenOne = () => {
  return <ChildrenTwo />;
};

const ChildrenTwo = () => {
  const { setName } = useContext(AppContext);
  return <button onClick={() => setName("Bea")}>Mude o nome</button>;
};
// Aí você pode estar se perguntando, mas professor setName tá definido lá em cima e no return principal está chamando a outra funcção que chama a outra. Blz.. poderia fazer por exemplo assim:
/* 
    <ChildrenOne changeName={setName}/>

const ChildrenOne = ({changeName}) => {
  return <ChildrenTwo changeName={changeName}/>;
};

const ChildrenTwo = ({changeName}) => {
  return <button onClick={() => changeName("Bea")}>Mude o nome</button>;
};

// De fato isso está correto, e normalmente a gente trabalha com esse lance de passar props para outros lugares, mas... MAS.. teriamos um problema chamado prop diling

O que seria o tal do prop Diling... até 3 níveis.. ok! Aceitável, o ideal seria 2 vezes pra frente

A partir do 4º Nível não é aceitável

Quando a gente se depara com isso podemos resolver usando o hook useContext.
e ficaria assim:

CODIGO ANTERIOR

const Home = () => {
  const [name, setName] = useState("Dan");

  return (
    <>
      <div className="Home">{name}</div>
      <ChildrenOne />
    </>
  );
};

const ChildrenOne = () => {
  return <ChildrenTwo />;
};

const ChildrenTwo = () => {
  return <button onClick={() => setName("Bea")}>Mude o nome</button>;
};

*/

export default Home;

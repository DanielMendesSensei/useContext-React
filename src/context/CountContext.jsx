import { createContext, useState } from "react";

// O contexto foi criado, mas não tem dados e nem provedor, logo precisamos do provider:
export const CountContext = createContext();

// Sempre nomeie começando pela mesmo nome
// eslint-disable-next-line react/prop-types
export const CountProvider = ({ children }) => {
  // Todos meu componentes da aplicação vao estar envolos desse ThemeContext.Provider e ele vai imprimir os filhos, mas precisamos de dados:

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  // value são os valores que eu quero compartilhar entre os componentes
  // nesse caso eu tenho uma forma de consultar o tema e uma forma de alterar o tema

  return (
    <CountContext.Provider value={{ count, increment }}>
      {children}
    </CountContext.Provider>
  );
};
// o contexto vai envolver todos os componentes, logo preciso de uma propriedade chamada children para imprir os componentes filhos a partir desse aqui

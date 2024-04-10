import { createContext, useState } from "react";

export const ThemeContext = createContext();
// O contexto foi criado, mas não tem dados e nem provedor, logo precisamos do provider:

// sempre nomeie começando pela mesmo nome
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  // Todos meu componentes da aplicação vao estar envolos desse ThemeContext.Provider e ele vai imprimir os filhos, mas precisamos de dados:

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  // value são os valores que eu quero compartilhar entre os componentes
  // nesse caso eu tenho uma forma de consultar o tema e uma forma de alterar o tema

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// o contexto vai envolver todos os componentes, logo preciso de uma propriedade chamada children para imprir os componentes filhos a partir desse aqui

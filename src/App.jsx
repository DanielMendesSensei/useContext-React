import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";

import "./App.css";

function App() {
  // Precisamos extrair de themecontext, como ele vem de value e é um objeto, usamos as chaves
  const { theme, toggleTheme } = useContext(ThemeContext);
  //useContext espera receber um contexto

  // porém ele perde o contexto quando se recarrega a página, como se resolver isso = LocalStorage
  return (
    <div className={`App ${theme == "dark" ? "dark-theme" : ""}`}>
      <h1>Página inicial</h1>
      <p>O tema atual é {theme}</p>
      <button onClick={toggleTheme}>Clique aqui para alterar o tema</button>
    </div>
  );
}

export default App;

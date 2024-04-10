import Pai from "../../components/Pai/Pai";
// import PaiContext from "../../components/Pai-Filho/Pai/Pai";

import "./Exemples.css";
// SEM useContext - Prop Drilling
const Exemples = () => {
  return <Pai />;
};

// COM useContext
// const Exemples = () => {
//   return <PaiContext />;
// };

export default Exemples;

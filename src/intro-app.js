import logo from "./logo.svg";
import "./main.css";

const estilo2 = {
  boxShadow: "0 5p 3px rgba(0,0,0,0.1)",
};

const estilo = ({ bg = "#222" }) => ({
  backgroundColor: bg,
  color: "#fff",
  padding: "10px 15px",
  margin: "10px 15px",
});
const Li = ({ children }) => {
  return <li className="clase-li">{children}</li>;
};
const introApp = () => {
  const valor = "triste";
  return (
    <ul className="clase-css">
      <Li estado="feliz">valor de li</Li>
    </ul>
  );
};

export default introApp;

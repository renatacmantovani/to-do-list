import { useNavigate } from "react-router-dom";
import "../../style.css";
import logo from "../../../public/icons8-green-91.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
       <img src={logo} alt="Logo" className="logo" />
      <h1>To Do List</h1>
      <div className="button-container">

        <button onClick={() => navigate("/create")}>Criar Tarefa</button>
        <button onClick={() => navigate("/list")}>Listar Tarefas</button>
      </div>
    </div>
  );
}

export default Home;

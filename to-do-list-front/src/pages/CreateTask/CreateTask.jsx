import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style.css";
import logo from "../../../public/icons8-green-91.png";
function CreateTask() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleCreateTask = async () => {
    if (!title.trim()) return;
    await fetch("http://18.225.175.13:3000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    navigate("/list");
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Criar Tarefa</h1>
      <input
        type="text"
        placeholder="Título da Tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleCreateTask}>Cadastrar</button>
      <button onClick={() => navigate("/")}>Voltar para Home</button>
    </div>
  );
}

export default CreateTask;

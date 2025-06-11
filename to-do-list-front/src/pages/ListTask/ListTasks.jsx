import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style.css";
import logo from "../../../public/icons8-green-91.png";

function ListTasks() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://3.146.65.101:3000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const handleDeleteTask = async (id) => {
    await fetch(`http://3.146.65.101:3000/api/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const startEditing = (task) => {
    setEditingTaskId(task._id);
    setEditingTitle(task.title);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingTitle("");
  };

  const handleSaveEdit = async (id) => {
    if (!editingTitle.trim()) return;
    await fetch(`http://3.146.65.101:3000/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editingTitle, finished: false }),
    });
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, title: editingTitle } : task
      )
    );
    cancelEditing();
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Lista de Tarefas</h1>
      {tasks.map((task) => (
        <div key={task._id} className="card">
          {editingTaskId === task._id ? (
            <>
              <input
                type="text"
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(task._id)}>Salvar</button>
              <button onClick={cancelEditing}>Cancelar</button>
            </>
          ) : (
            <>
              <p>{task.title}</p>
              <button onClick={() => startEditing(task)}>Editar</button>
              <button onClick={() => handleDeleteTask(task._id)}>
                Deletar
              </button>
            </>
          )}
        </div>
      ))}
      <button onClick={() => navigate("/")}>Voltar para Home</button>
    </div>
  );
}

export default ListTasks;

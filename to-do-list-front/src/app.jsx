import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import CreateTask from "./pages/CreateTask/CreateTask";
import ListTasks from "./pages/ListTask/ListTasks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateTask />} />
      <Route path="/list" element={<ListTasks />} />
    </Routes>
  );
}

export default App;

import { useState, useEffect } from "react";
import { todo, connectWallet } from "../contracts/todo.js";

function App() {
  const [tasks, setTasks] = useState({});
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);

  const handleConnect = async () => {
    try {
      await connectWallet();
      setConnected(true);
    } catch (e) {
      console.error(e);
      alert("Failed to connect wallet: " + e.message);
    }
  };

  const fetchTasks = async () => {
    try {
      const result = await todo.get_tasks();
      if (result) setTasks(result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!newTask.trim()) return;
    setLoading(true);
    try {
      await todo.add_task({ task: newTask });
      setNewTask("");
      await fetchTasks();
    } catch (e) {
      alert("Error: " + e.message);
      console.error(e);
    }
    setLoading(false);
  };

  const deleteTask = async (id) => {
    setLoading(true);
    try {
      await todo.delete_task({ id });
      await fetchTasks();
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "Arial" }}>
      <h1>📝 Todo App on Stellar</h1>
      {!connected ? (
        <button
          onClick={handleConnect}
          style={{ padding: "10px 20px", background: "#6366f1", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginBottom: "20px" }}
        >
          Connect Wallet
        </button>
      ) : (
        <p style={{ color: "green" }}>✅ Wallet Connected</p>
      )}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task..."
          style={{ flex: 1, padding: "10px", fontSize: "16px" }}
        />
        <button
          onClick={addTask}
          disabled={loading || !connected}
          style={{ padding: "10px 20px", background: connected ? "#6366f1" : "#aaa", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          {loading ? "..." : "Add"}
        </button>
      </div>
      <div>
        {Object.entries(tasks).length === 0 ? (
          <p style={{ color: "#888" }}>No tasks yet. Add one!</p>
        ) : (
          Object.entries(tasks).map(([id, task]) => (
            <div key={id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px", marginBottom: "8px", background: "#f3f4f6", borderRadius: "8px" }}>
              <span>{task}</span>
              <button
                onClick={() => deleteTask(Number(id))}
                style={{ background: "#ef4444", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px", cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

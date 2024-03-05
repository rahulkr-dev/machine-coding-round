import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Todos from "./Todos";
import TodoProvider from "./context/todoContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoProvider>
      <Todos />
    </TodoProvider>
  </React.StrictMode>
);

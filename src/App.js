import { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import DarkModeProvider from "./context/DarkModeContext";

const filters = ["all", "active", "done"];

function App(): JSX.Element {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;

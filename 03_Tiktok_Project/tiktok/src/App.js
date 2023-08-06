import "./App.css";
import LearnUseState from "./components/LearnUseState.tsx";
import TryCheckbox from "./components/TryCheckbox.tsx";
import TryRadioButton from "./components/TryRadioButton.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {
  return (
    <div className="App">
      <LearnUseState />
      <TryRadioButton />
      <TryCheckbox />
      <TodoList />
    </div>
  );
}

export default App;

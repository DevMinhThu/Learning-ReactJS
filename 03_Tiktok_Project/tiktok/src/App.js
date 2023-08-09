import "./App.css";
import LearnUseState from "./components/LearnUseState.tsx";
import TryCheckbox from "./components/TryCheckbox.tsx";
import TryRadioButton from "./components/TryRadioButton.tsx";
import TodoList from "./components/TodoList.tsx";
import UseEffectHook from "./components/UseEffectHook.tsx";

function App() {
  return (
    <div className="App">
      <LearnUseState />
      <TryRadioButton />
      <TryCheckbox />
      <TodoList />
      <UseEffectHook />
    </div>
  );
}

export default App;

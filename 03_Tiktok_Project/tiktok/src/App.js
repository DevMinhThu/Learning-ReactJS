import "./App.css";
import LearnUseState from "./components/LearnUseState.tsx";
import TryCheckbox from "./components/TryCheckbox.tsx";
import TryRadioButton from "./components/TryRadioButton.tsx";

function App() {
  return (
    <div className="App">
      <LearnUseState />
      <TryRadioButton />
      <TryCheckbox />
    </div>
  );
}

export default App;

import "./App.css";
import LearnUseState from "./components/LearnUseState.tsx";
import TryCheckbox from "./components/TryCheckbox.tsx";
import TryRadioButton from "./components/TryRadioButton.tsx";
import TodoList from "./components/TodoList.tsx";
import UseEffectHook from "./components/UseEffectHook.tsx";
import PreviewAvatar from "./components/PreviewAvatar.tsx";
import FakeChatApp from "./components/FakeChatApp.tsx";
import UseLayoutEffect from "./components/UseLayoutEffect.tsx";
import UseImperativeHandle from "./components/UseImperativeHandle.tsx";

function App() {
  return (
    <div className="App">
      <UseImperativeHandle />
      <UseLayoutEffect />
      <FakeChatApp />
      <LearnUseState />
      <PreviewAvatar />
      <TryRadioButton />
      <TryCheckbox />
      <TodoList />
      <UseEffectHook />
    </div>
  );
}

export default App;

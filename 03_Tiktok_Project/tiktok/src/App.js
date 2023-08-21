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
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <GlobalStyles>
      <h1 className="heading">Learn CSS</h1>
      <Heading />
      <Paragraph />
      <div className="d-flex">
        <div>item1</div>
        <div>item2</div>
      </div>
      <UseImperativeHandle />
      <UseLayoutEffect />
      <FakeChatApp />
      <LearnUseState />
      <PreviewAvatar />
      <TryRadioButton />
      <TryCheckbox />
      <TodoList />
      <UseEffectHook />
    </GlobalStyles>
  );
}

export default App;

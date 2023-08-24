import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
// import LearnUseState from "./components/LearnUseState.tsx";
// import TryCheckbox from "./components/TryCheckbox.tsx";
// import TryRadioButton from "./components/TryRadioButton.tsx";
// import TodoList from "./components/TodoList.tsx";
// import UseEffectHook from "./components/UseEffectHook.tsx";
// import PreviewAvatar from "./components/PreviewAvatar.tsx";
// import FakeChatApp from "./components/FakeChatApp.tsx";
// import UseLayoutEffect from "./components/UseLayoutEffect.tsx";
// import UseImperativeHandle from "./components/UseImperativeHandle.tsx";
// import Heading from "./components/Heading";
// import Paragraph from "./components/Paragraph";
// import GlobalStyles from "./components/GlobalStyles";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";

function App() {
  return (
    // <GlobalStyles>
    //   <h1 className="heading">Learn CSS</h1>
    //   <Heading />
    //   <Paragraph />
    //   <div className="d-flex">
    //     <div>item1</div>
    //     <div>item2</div>
    //   </div>
    //   <UseImperativeHandle />
    //   <UseLayoutEffect />
    //   <FakeChatApp />
    //   <LearnUseState />
    //   <PreviewAvatar />
    //   <TryRadioButton />
    //   <TryCheckbox />
    //   <TodoList />
    //   <UseEffectHook />
    // </GlobalStyles>
    <div className="app">
      <nav>
        <ul>
          <li>
            {/* 
              - Dùng Link thay vì thẻ 'a' => vì khi dùng thẻ 'a' khi navigate sẽ bị load lại hết cả page 
              - Nhưng khi render vào Dom thì Link sẽ lại trở thành thẻ a.
              - Nhưng sẽ loại bỏ hết các hành vi mặc định của thẻ a. => k load lại trang đó.
            */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* 
        - Trong Routes sẽ chứa nhiều Route con, mỗi Route con chứa 1 page
      */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;

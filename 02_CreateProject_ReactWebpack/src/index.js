import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom

// Tạo component App
function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Mr Thư!!!</h2>
    </div>
  );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));

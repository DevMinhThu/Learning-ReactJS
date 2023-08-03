import "./App.css";
import { useState } from "react";

const orders = [100, 200, 300];

function App() {
  /* 
    - Đối với TH này rất tệ.
    - Nếu totalOrders là một hàm tính toán rất nhiều và lâu.
    - Nếu click setState lại, thì mỗi lần set như vậy App sẽ lại render lại và tính toán lại totalOrders, không tốt.

    ====== KHẮC PHỤC ======
    => CÁCH 1: sau này sẽ sử dùng useCallback or useMemo
    => CÁCH 2: truyền Callback cho useState và Callback sẽ return ra giá trị. useState sẽ lấy giá trị return đó làm initial. Từ đó hàm Callback sẽ không bị tính toán lại nhiều lần
  */

  // const totalOrders = orders.reduce(
  //   (total, currentValue) => total + currentValue
  // );

  // const [counter, setCounter] = useState(totalOrders);
  const [counter, setCounter] = useState(() => {
    const totalOrders = orders.reduce(
      (total, currentValue) => total + currentValue
    );
    console.log(totalOrders);
    return totalOrders;
  });

  /* TH: Truyền callback vào làm initial state 
    - Sẽ không nhận callback đó làm initial state.
    - Sẽ nhận kết quả trả về của callback đó làm initial state.
  */

  const handleIncrease = () => {
    // setCounter(counter + 1);

    /* 
      - Using callback trong setState
      - prev: giá trị hiện tại của state
    */
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;

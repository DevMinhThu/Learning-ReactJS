import React, { useLayoutEffect } from "react";

/* 
  A. useEffect
    1. Cập nhật lại state
    2. Cập nhật lại DOM (mutate)
    3. Render lại UI
    4. Gọi clear up fuction khi deps thay đổi nếu có mới gọi
    5. Gọi useEffect callback

  B. useLayoutEffect
    1. Cập nhật lại state
    2. Cập nhật lại DOM (mutate)
    3. Gọi clear up function khi deps thay đổi (sync) nếu có mới gọi
    4. Gọi useEffect callback (sync)
    5. Render lại UI
*/

function UseLayoutEffect() {
  const [count, setCount] = React.useState(0);

  // Nếu dùng useEffect thì khi tăng từ 3 về 0 sẽ bị nháy 4 rồi mới về o => dùng useLayoutEffect
  // TH sử dụng useLayoutEffect. Khi setState sau đó check điều kiện trong useEffect, sau đó lại setState lại vào chính nó
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useLayoutEffect</h1>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
}

export default UseLayoutEffect;

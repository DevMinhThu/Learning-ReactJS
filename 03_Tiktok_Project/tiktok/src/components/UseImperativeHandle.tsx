import React, { useRef } from "react";
import Video from "../Video";

function UseImperativeHandle() {
  const videoRefParent = useRef<any>();

  /* 
    forwardRef:
    - Được sử dụng để chuyển tiếp một tham chiếu (ref) từ một component cha -> component con.
    - Từ đó dựa vào bài toán mà component cha có thể tương tác trực tiếp với các phần tử trong component con từ component cha
  */

  const handlePlay = () => {
    videoRefParent.current.play();
  };
  const handlePause = () => {
    videoRefParent.current.pause();
  };

  return (
    <div>
      <h1>UseImperativeHandle</h1>
      <Video ref={videoRefParent} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default UseImperativeHandle;

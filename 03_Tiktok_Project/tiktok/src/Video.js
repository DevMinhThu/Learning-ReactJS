import { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from "./videos/video_1.mp4";

const Video = (props, ref) => {
  const videoRefChildren = useRef();

  /* 
    - Đối số đầu tiên: Tham chiếu được truyền từ thành phần cha thông qua prop
    - Đối số thứ 2: callback trả về object, object này sẽ được gán vào videoRefApp (hay là ref được truyền từ ngoài vào)
    - useImperativeHandle giúp chỉ share những method nào cần thiết ra ngoài thôi, chứ k share hết ra ngoài như cách truyền ref trực tiếp từ ngoài vào
    - Định nghĩa và xử lý nội tại bên trong => method nào cần thiếy public ra ngòai thì public thông qua useImperativeHandle.
  */
  useImperativeHandle(ref, () => ({
    play() {
      videoRefChildren.current.play();
    },
    pause() {
      videoRefChildren.current.pause();
    },
  }));

  return <video ref={videoRefChildren} src={video1} width={280} />;
};

export default forwardRef(Video);

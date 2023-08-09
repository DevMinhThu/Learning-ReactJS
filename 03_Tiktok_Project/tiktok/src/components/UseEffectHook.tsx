import React, { useEffect, useState } from "react";

/* 
  1. useEffect(callback)
  - Gọi callback mỗi khi component re-render
  - Gọi callback sau khi element được gắn vào DOM. Hay có nghĩa là sẽ render UI ra trước sau đó mới chạy vào useEffect.
*/
/* 
  2. useEffect(callback, [])
  - Chỉ gọi callback 1 lần sau khi component mounted. Hay có thể hiểu là callback chỉ được gọi 1 lần sau khi UI được render ra.
  - CallApi trong trường hợp này.
*/
/* 
  3. useEffect(callback, [deps])
  - callback sẽ được gọi lại mỗi khi deps thay đổi.
*/

// ===== CHUNG CỦA CẢ 3 TH useEffect đều có =====
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần đầu tiên, lần được mounted)

const tabs = ["posts", "comments", "albums"];

function UseEffectHook() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState<any>([]);
  const [type, setType] = useState<any>("posts");
  const [showGoToTop, setShowGoToTop] = useState<boolean>(false);

  // TH1.
  useEffect(() => {
    console.log("render 2");
  });

  // TH2.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // TH3.
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [type]);

  // useEffect with DOM
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        document.body.style.backgroundColor = "yellow";
        setShowGoToTop(true);
      } else {
        document.body.style.backgroundColor = "white";
        setShowGoToTop(false);
      }
    };

    // Khi unmount component thì đối tượng này không biến mất gây rò rỉ bộ nhớ, hay gặp Warning: Can't perform a React ... memory leak ...
    window.addEventListener("scroll", handleScroll);

    // Khắc phục: cần xóa event này sau khi component unmount.
    // Cleanup function
    return () => {
      // Trong đây sẽ được gọi trước khi callback được gọi. Trừ lần đầu tiên khi component được mounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>useEffect Hook</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <>{console.log("render 1")}</>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{ position: "fixed", right: 20, bottom: 20 }}
          onClick={() => window.scrollTo(0, 0)}
        >
          Go to top
        </button>
      )}
    </div>
  );
}

export default UseEffectHook;

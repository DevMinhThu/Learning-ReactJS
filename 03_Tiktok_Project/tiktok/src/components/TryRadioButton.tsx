import React, { useState } from "react";

const listPhone = [
  { id: 1, name: "Iphone" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Nokia" },
];

function TryRadioButton() {
  const [check, setCheck] = useState();

  return (
    <div style={{ marginTop: 20 }}>
      {listPhone.map((item: any) => {
        return (
          <div key={item?.id}>
            <input
              type="radio"
              checked={item?.id === check}
              onChange={() => setCheck(item?.id)}
            />
            {item?.name}
          </div>
        );
      })}
    </div>
  );
}

export default TryRadioButton;

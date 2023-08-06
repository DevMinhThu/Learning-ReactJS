import React, { useState } from "react";

const listPhone = [
  { id: 1, name: "Iphone" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Nokia" },
];

function TryCheckbox() {
  const [check, setCheck] = useState<any>([]);

  const handleCheckbox = (id: number) => {
    setCheck((prev: any) => {
      if (prev.includes(id)) {
        // handle unchecked
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h1>This is Checkbox</h1>
      {listPhone.map((item: any) => {
        return (
          <div key={item?.id}>
            <input
              type="checkbox"
              checked={check.includes(item?.id)}
              onChange={() => handleCheckbox(item?.id)}
            />
            {item?.name}
          </div>
        );
      })}
    </div>
  );
}

export default TryCheckbox;

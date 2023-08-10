import React, { useEffect, useState } from "react";

function PreviewAvatar() {
  const [avatar, setAvatar] = useState<any>();

  useEffect(() => {
    // Cleanup image in memory
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div>
      <h1>Preview Avatar practice clean up function</h1>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt="avatar" width="80%" />}
    </div>
  );
}

export default PreviewAvatar;

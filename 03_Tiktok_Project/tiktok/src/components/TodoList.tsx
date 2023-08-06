import React, { useState } from "react";

function TodoList() {
  const storageJobs = JSON.parse(localStorage.getItem("listJob") || "{}");
  const [listJob, setListJob] = useState<string[]>(storageJobs ?? []);
  const [job, setJob] = useState<string>("");

  console.log("storageJobs", storageJobs);

  const handleChangeInput = (e: any) => {
    setJob(e.target.value);
  };

  const handleAddJob = () => {
    setListJob((prev) => {
      const newJob = [...prev, job];
      // save to local storage
      localStorage.setItem("listJob", JSON.stringify(newJob));
      return newJob;
    });
    setJob("");
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h1>Todo List</h1>
      <input
        value={job}
        onChange={handleChangeInput}
        style={{ marginRight: 10 }}
      />
      <button onClick={handleAddJob}>Add</button>

      <ul>
        {listJob.map((job: any, index: number) => {
          return <li key={index}>{job}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;

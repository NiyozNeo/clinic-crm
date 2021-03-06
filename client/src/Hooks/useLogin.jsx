import { useEffect, useState } from "react";
import { Redirect } from "react-router";

function useCourse(params) {
  const [reg, setReg] = useState([]);

  useEffect(() => {
    if (reg) {
      fetch(`http://localhost:4000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reg),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("admin", data.admin);
          <Redirect to="/" />
        })
        .catch((err) => console.log(err));
    }
  }, [reg]);
  if (params === "post") {
    return [setReg];
  }
}

export default useCourse;

import React, { useState } from "react";
import { useAppContext } from "../../context/appContext";

function Home() {
  const [formData, setFormData] = useState({});

  // context
  const { isLoading, setupUser } = useAppContext();

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setupUser({ currentUser: formData, endPoint: "register" });
  };
  console.log(isLoading);

  return (
    <div>
      Homepage
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="username">username</label>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="enter username"
          />
        </p>
        <p>
          <label htmlFor="password">password</label>
          <input
            onChange={handleChange}
            type="text"
            name="password"
            placeholder="enter password"
          />
        </p>
        <p>
          <button type="submit">login</button>
        </p>
      </form>
    </div>
  );
}

export default Home;

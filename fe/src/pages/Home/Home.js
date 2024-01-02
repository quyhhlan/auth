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

  return (
    <div>
      <h3>Homepage</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="firstName">first name</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="enter first name"
          />
        </p>
        <p>
          <label htmlFor="lastName">last name</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="enter last name"
          />
        </p>
        <p>
          <label htmlFor="email">email</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="enter email"
          />
        </p>
        <p>
          <label htmlFor="password">password</label>
          <br />
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

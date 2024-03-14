import React, { useState } from "react";

export default function Title() {
  const [user, setUser] = useState({});

  const handleFieldChange = (e) => {
    const { name: fieldName, value: fieldValue } = e.target;

    const updatedUser = {
      ...user,
      [fieldName]: fieldValue
    };

    setUser(updatedUser);
  };

  return (
    <>
      <h1>USER</h1>
      <ul>
        <li>First Name: {user.firstName || ""}</li>
        <li>Last Name: {user.lastName || ""}</li>
        <li>Age: {user.age || ""}</li>
      </ul>
      <hr />
      <form>
        <label>
          Name
          <input
            type="text"
            name="firstName"
            onChange={(e) => handleFieldChange(e)}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            onChange={(e) => handleFieldChange(e)}
          />
        </label>
        <label>
          Age
          <input
            type="number"
            name="age"
            onChange={(e) => handleFieldChange(e)}
          />
        </label>
      </form>
    </>
  );
}
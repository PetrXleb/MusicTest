import React, { useState } from "react";

function Person({ setUserName }) {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  //клик
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("testName", username);
    setUserName(username);
  };

  //если имя есть
  let userLocalStotage = localStorage.getItem("testName");
  if (userLocalStotage) {
    setUserName(userLocalStotage);
  }

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <label>Введите имя пользователя: </label>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="buttonForm">
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default Person;

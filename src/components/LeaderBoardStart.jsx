import { logDOM } from "@testing-library/react";
import React from "react";
import { useState } from "react";

const LeaderBoardStart = ({ questionLeng }) => {
  //Стейты
  const [responce, setResponce] = useState(false);
  //Делаем запрос на данные
  async function getResponse() {
    let baseUrl = await fetch(
      "https://6429d1f500dfa3b5473ae544.mockapi.io/api/v1/LeaderBoard/"
    );
    if (!responce) {
      let a = await baseUrl.json();
      a.sort((a, b) => b.correctCount - a.correctCount);
      setResponce(a);
    }
  }
  getResponse();
  //класс, чтобы выделить нашего пользователя
  let indexClass = localStorage.getItem("testId");
  if (!indexClass) {
    indexClass = -1;
  }
  // Добавим особый класс если пользователь уже заходил
  let b = localStorage.getItem("testId");
  //
  return (
    <div>
      {!responce ? (
        <h2>Загрузка...</h2>
      ) : (
        <>
          {responce.map((obj, index) => {
            return (
              <h5
                key={obj.Name}
                className={obj.id == b ? "h5person h5def" : "h5def"}
              >
                {obj.Name} - {obj.correctCount}/{questionLeng}
              </h5>
            );
          })}
        </>
      )}
    </div>
  );
};

export default LeaderBoardStart;

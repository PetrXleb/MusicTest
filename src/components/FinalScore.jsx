import React from "react";
import { useState } from "react";
import Person from "./Person";

const FinalScore = ({ correctCount, questionsLeng, setRestart }) => {
  //Стейты
  const [responce, setResponce] = useState(false);
  const [userName, setUserName] = useState(null);
  //Делаем запрос на данные
  async function getResponse() {
    let baseUrl = await fetch(
      "https://6429d1f500dfa3b5473ae544.mockapi.io/api/v1/LeaderBoard/"
    );
    //если имени нет, то ничего не отправляем
    if (!userName) return;
    if (!responce) {
      let a = await baseUrl.json();
      a.sort((a, b) => b.correctCount - a.correctCount);
      setResponce(a);
    } else {
      //Имя пользователя
      if (!userName) {
        let userNameUndefined = `Пользователь${responce.length}`;
        localStorage.setItem("testName", userNameUndefined);
        setUserName(userNameUndefined);
      }
      //Отправляем наш результат
      let data = {
        Name: userName,
        correctCount: correctCount,
        id: responce.length,
      };
      //
      if (!localStorage.getItem("testId")) {
        //если локал сторадж пуст, то добавляем нового пользователя
        await fetch(
          `https://6429d1f500dfa3b5473ae544.mockapi.io/api/v1/LeaderBoard/`,
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        //Добавляем в локалсторадж айди
        localStorage.setItem("testId", responce.length);
      } else {
        //изменяем данные если в локалСторадж есть айди
        data = {
          Name: userName,
          correctCount: correctCount,
          id: +localStorage.getItem("testId"),
        };

        //
        await fetch(
          `https://6429d1f500dfa3b5473ae544.mockapi.io/api/v1/LeaderBoard/${data.id}`,
          {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
      }
    }
  }
  getResponse();
  //
  return (
    <div>
      {!userName ? (
        <Person setUserName={setUserName} />
      ) : (
        <>
          <h2 className="score">
            {correctCount <= 1 ? (
              <>
                Вы ответили на {correctCount} вопрос из {questionsLeng}
              </>
            ) : (
              <>
                {" "}
                Вы ответили на {correctCount} вопроса из {questionsLeng}
              </>
            )}
          </h2>
          <button
            className="buttonFinish"
            onClick={() => {
              window.location.reload();
            }}
          >
            Посмотреть доску лидеров?
          </button>
        </>
      )}
    </div>
  );
};

export default FinalScore;

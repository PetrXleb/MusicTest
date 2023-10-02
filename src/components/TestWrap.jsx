import React from "react";
import { useState } from "react";
import VariantComponent from "./VariantComponent";
import FinalScore from "./FinalScore";

const TestWrap = ({ questionsArr, setRestart }) => {
  //Стейты
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  //Берем объект из массива
  let currentQuestion = questionsArr[indexQuestion];
  //Проверяем, правильный ли ответ
  const checkAnswer = (correct, index, correctCount) => {
    if (+correct == index) {
      setCorrectCount(correctCount + 1);
      console.log("Верно");
    }
    if (+correct == -1) {
      setCorrectCount(correctCount + 1);
      console.log("Верно");
    }
    setIndexQuestion(indexQuestion + 1);
  };
  //
  return (
    <>
      {questionsArr[indexQuestion] ? (
        <div>
          <h1 className="headerTest">Тема теста: Rock&Metal</h1>
          <h2 className="questionCount">
            {indexQuestion + 1}/{questionsArr.length}
          </h2>
          <h3 className="questionName">{currentQuestion.question}</h3>
          <div className="wrapVariant">
            {currentQuestion.variants.map((text, index) => (
              <VariantComponent
                key={index}
                text={text}
                checkAnswer={() =>
                  checkAnswer(currentQuestion.correct, index, correctCount)
                }
              />
            ))}
          </div>
        </div>
      ) : (
        //Если вопросы кончились
        <FinalScore
          setRestart={setRestart}
          correctCount={correctCount}
          questionsLeng={questionsArr.length}
        />
      )}
    </>
  );
};

export default TestWrap;

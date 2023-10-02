import "./App.css";
import TestWrap from "./components/TestWrap";
import { useState } from "react";
import LeaderBoardStart from "./components/LeaderBoardStart";

function App() {
  //Так выглядит массив всех вопросов //Вопрос-Индекс правильного ответа-Массив вариантов
  const questionsArr = [
    {
      question: "Лучая группа?",
      correct: "-1",
      variants: [
        "Pantera",
        "Korn",
        "Metallica",
        "Nirvana",
        "RCHP",
        "Rainbow",
        "Rammstein",
        "Slayer",
      ],
    },
    {
      question: "На каком инструменте играет Flea в группе RHCP?",
      correct: "0",
      variants: ["Бас-гитара", "Ударные", "Гитара", "Клавишные"],
    },
    {
      question: "Какая группа является основателем жанра хеви-металл?",
      correct: "2",
      variants: ["Deep Purple", "Led Zeppelin", "Black Sabbath", "Iron Maiden"],
    },
    {
      question:
        "Какая песня группы Korn стала хитом и достигла первых мест в музыкальных чартах?",
      correct: "2",
      variants: [
        "Freak on a Leash",
        "Under the Bridge",
        "Blind",
        "Give It Away",
      ],
    },
    {
      question:
        "В каком году был выпущен альбом Metallica 'Master of Puppets'?",
      correct: "1",
      variants: ["1983", "1986", "1990", "1994"],
    },
    {
      question: "Имя гитариста и основателя группы Slayer?",
      correct: "1",
      variants: ["James Hetfield", "Jeff Hanneman", "Dimebag Darrell"],
    },
    {
      question: "В каком году вышел альбом 'Californication' от RHCP?",
      correct: "2",
      variants: ["1992", "2005", "1999", "2001"],
    },
    {
      question: "Кто является вокалистом группы AC/DC?",
      correct: "2",
      variants: ["Ozzy Osbourne", "Bruce Dickinson", "Bon Scott", "Axl Rose"],
    },
    {
      question: "Из какой страны родом группа Led Zeppelin?",
      correct: "0",
      variants: ["Англия", "США", "Австралия", "Канада"],
    },
    {
      question:
        "Какой музыкант считается королем рок-н-ролла и известен песнями 'Jailhouse Rock' и 'Love Me Tender'?",
      correct: "0",
      variants: ["Elvis Presley", "Chuck Berry", "Buddy Holly"],
    },
    {
      question: "Кто известен своим хитом 'Hotel California'?",
      correct: "3",
      variants: ["The Rolling Stones", "Led Zeppelin", "Aerosmith", "Eagles"],
    },
    {
      question: "Какой альбом группы Nirvana стал настоящим прорывом в музыке?",
      correct: "0",
      variants: [
        "Nevermind",
        "In Utero",
        "Bleach",
        "MTV Unplugged in New York",
      ],
    },
    {
      question: "Какая группа выпустила альбом 'Follow the Leader'?",
      correct: "0",
      variants: ["Korn", "RHCP", "Linkin Park", "Nirvana"],
    },
    {
      question: "Какой инструмент является основным для группы Deep Purple?",
      correct: "2",
      variants: ["Бас-гитара", "Ударные", "Орган", "Саксофон"],
    },
    {
      question:
        "Какая группа считается основателем жанра грув-метал и известна своим альбомом 'Vulgar Display of Power'?",
      correct: "0",
      variants: ["Pantera", "Metallica", "Slipknot", "Korn"],
    },
    {
      question:
        "Какой музыкант считается отцом российского рока и является основателем группы 'Аквариум'?",
      correct: "0",
      variants: [
        "Борис Гребенщиков",
        "Михаил Горшенев",
        "Виктор Цой",
        "Сергей Маврин",
      ],
    },
    {
      question: "Какая песня группы Rammstein считается наиболее известной?",
      correct: "0",
      variants: ["Du hast", "Sonne", "Engel", "Ich will"],
    },
    {
      question:
        "Какой жанр металла характеризуется быстрыми риффами и высокоскоростной ударной установкой?",
      correct: "3",
      variants: ["Gothic Metal", "Power Metal", "Death Metal", "Thrash Metal"],
    },

    {
      question: "Какой группой исполняется песня 'Bohemian Rhapsody'?",
      correct: "1",
      variants: ["The Rolling Stones", "Queen", "Led Zeppelin", "The Who"],
    },
    {
      question:
        "Какой гитарист из Pantera также известен своим сольным проектом и группой Damageplan?",
      correct: "0",
      variants: ["Dimebag Darrell", "Zakk Wylde", "Vinnie Paul", "Kerry King"],
    },
    {
      question:
        "Какая группа считается одним из пионеров рока и исполняла песню 'Smoke on the Water'?",
      correct: "3",
      variants: [
        "Led Zeppelin",
        "The Rolling Stones",
        "The Who",
        "Deep Purple",
      ],
    },
    {
      question: "Какой группой исполняется песня 'Stairway to Heaven'?",
      correct: "1",
      variants: ["The Doors", "Led Zeppelin", "The Rolling Stones", "The Who"],
    },
    {
      question:
        "Кто был лидером группы 'Ария', одной из популярных российских хеви-метал групп?",
      correct: "3",
      variants: [
        "Виктор Цой",
        "Борис Гребенщиков",
        "Сергей Шнуров",
        "Валерий Кипелов",
      ],
    },
    {
      question:
        "Какой альбом группы Queen стал легендарным и включает хит 'Bohemian Rhapsody'?",
      correct: "0",
      variants: [
        "A Night at the Opera",
        "The Game",
        "News of the World",
        "A Day at the Races",
      ],
    },
    {
      question:
        "Какая группа считается одной из основательниц панк-рока и исполняла песни 'London Calling' и 'Should I Stay or Should I Go'?",
      correct: "1",
      variants: ["The Ramones", "The Clash", "Sex Pistols", "The Buzzcocks"],
    },
  ];
  //стейты
  const [showTest, setShowTest] = useState(true);
  const [restart, setRestart] = useState(false);

  return (
    <div className="App">
      {!showTest ? (
        <TestWrap questionsArr={questionsArr} className={"testWrap"} />
      ) : (
        <div>
          <button onClick={() => setShowTest()}>Пройти тест?</button>
          <br />
          <h2>👑</h2>
          <LeaderBoardStart
            questionLeng={questionsArr.length}
            setRestart={setRestart}
          />
        </div>
      )}
    </div>
  );
}

export default App;

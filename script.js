const topics = {
  newyear: [
    {
      question: "Когда отмечают Новый год?",
      answers: ["31 декабря", "1 января", "25 декабря", "14 января"],
      correct: 1,
      image: "images/newyar/1.jpg",
      description: "Новый год празднуется в ночь с 31 декабря на 1 января.",
    },
    {
      question: "Какой символ Нового года?",
      answers: ["Елка", "Сосна", "Береза", "Кедр"],
      correct: 0,
      image: "images/newyar/2.jpg",
      description: "Ёлка — главный символ Нового года.",
    },
    {
      question: "Кто приносит подарки на Новый год?",
      answers: ["Санта Клаус", "Дед Мороз", "Снегурочка", "Гном"],
      correct: 1,
      image: "images/newyar/3.jpg",
      description: "Подарки приносит Дед Мороз!",
    },
    {
      question: "Что обычно загадывают в новогоднюю ночь?",
      answers: ["Желание", "Погоду", "Сон", "Песню"],
      correct: 0,
      image: "images/newyar/4.jpg",
      description: "В новогоднюю ночь принято загадывать желания.",
    },
    {
      question: "Что символизирует бой курантов?",
      answers: ["Конец года", "Начало весны", "Полдень", "Рождество"],
      correct: 0,
      image: "images/newyar/5.jpg",
      description: "Бой курантов — символ наступления нового года.",
    },
  ],
  winter: [
    {
      question: "Какое время года самое холодное?",
      answers: ["Осень", "Весна", "Зима", "Лето"],
      correct: 2,
      image: "images/winter/1.jpg",
      description: "Зима — самое холодное время года.",
    },
    {
      question: "Что падает с неба зимой?",
      answers: ["Листья", "Снег", "Дождь", "Цветы"],
      correct: 1,
      image: "images/winter/2.png",
      description: "Зимой с неба падает снег.",
    },
    {
      question: "Какое животное впадает в спячку?",
      answers: ["Медведь", "Волк", "Заяц", "Лиса"],
      correct: 0,
      image: "images/winter/3.jpg",
      description: "Медведь спит зимой до весны.",
    },
    {
      question: "Что дети лепят зимой?",
      answers: ["Замок", "Снеговика", "Домик", "Лужу"],
      correct: 1,
      image: "images/winter/4.jpg",
      description: "Конечно же снеговика!",
    },
    {
      question: "Что нужно надевать зимой?",
      answers: ["Пальто", "Шорты", "Купальник", "Футболку"],
      correct: 0,
      image: "images/winter/5.jpg",
      description: "Пальто и шапка — лучшие друзья зимой!",
    },
  ],
  russia: [
    {
      question: "Кто помощница Деда Мороза?",
      answers: ["Снегурочка", "Эльф", "Санта", "Белочка"],
      correct: 0,
      image: "images/russia/1.jpeg",
      description: "Снегурочка — внучка и помощница Деда Мороза.",
    },
    {
      question: "Где живёт Дед Мороз в России?",
      answers: ["В Москве", "В Великом Устюге", "В Санкт-Петербурге", "В Сочи"],
      correct: 1,
      image: "images/russia/2.jpg",
      description: "Дед Мороз живёт в Великом Устюге.",
    },
    {
      question: "Что пьют под бой курантов?",
      answers: ["Сок", "Шампанское", "Молоко", "Чай"],
      correct: 1,
      image: "images/russia/3.jpg",
      description: "Под бой курантов обычно открывают шампанское.",
    },
    {
      question: "Какой салат традиционно готовят на Новый год?",
      answers: ["Цезарь", "Оливье", "Греческий", "Крабовый"],
      correct: 1,
      image: "images/russia/4.jpg",
      description: "Салат Оливье — новогодняя классика!",
    },
    {
      question: "Прозвище Деда Мороза?",
      answers: ["Красный нос", "Синий глаз", "Желтый палец", "Белое ухо"],
      correct: 0,
      image: "images/russia/5.jpg",
      description: "Дед Мороз — Красный нос!",
    },
  ],
  history: [
    {
      question:
        "Откуда пошла традиция - украшать новогодние ёлки разноцветными шарами?",
      answers: [
        "Так приказал царь",
        "Из-за неурожая яблок",
        "Из-за ошибки звездочета",
        "Проголосовали",
      ],
      correct: 1,
      image: "images/history/1.jpg",
      description:
        "В старину все ёлочные украшения были съедобными. Особенно красиво смотрелись на зеленых ветках румяные вкусные яблочки. Но однажды яблоки не уродись, и нечем было нарядить ёлки. Тогда стеклодувы решили временно заменить спелые фрукты тонкими стеклянными шарами. Такая затея пришлась всем по душе, и стала традицией.",
    },
    {
      question:
        "Какой из русских царей придумал праздновать Новый год зимой, 1 января?",
      answers: ["Иван Грозный", "Екатерина II", "Пётр I", "Александр II"],
      correct: 2,
      image: "images/history/2.jpg",
      description:
        "Царь Пётр повелел считать Новый год повсеместно с первого января. Так в указе и написал: «В честь Нового года учинять украшения из елей, детей забавлять, на санках катать с гор».",
    },
    {
      question: "Какой головной убор носит снеговик?",
      answers: ["Таз", "Ведро", "Шапка", "Кепка"],
      correct: 1,
      image: "images/history/3.jpg",
      description:
        "Старое ведро на голове - символ достатка в доме. Если хозяева выбросили старое ведро, значит, у них есть возможность приобрести новое.",
    },
    {
      question:
        "Как называется русский старинный, но нестареющий танец у новогодней ёлки?",
      answers: ["Ча-ча-ча", "Вальс", "Полька", "Хоровод"],
      correct: 3,
      image: "images/history/4.png",
      description:
        "В России традиция водить хороводы восходит к древней Руси, где этот танец был частью славянского обряда поклонения Солнцу",
    },
    {
      question: "Что готовили для Деда Мороза в стародавние времена?",
      answers: ["Сдобный пирог", "Печенье", "Овсяный кисель", "Мороженое"],
      correct: 2,
      image: "images/history/5.jpg",
      description:
        "Издавна крестьяне выносили на порог своего дома блюдо овсяного киселя, чтобы задобрить Морозушко — и, по словам Деда Мороза, это было его любимое кушанье.",
    },
  ],
};

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const result = document.getElementById("result");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const description = document.getElementById("answer-description");
const resultText = document.getElementById("result-text");
let currentTopic = null;
let currentQuestionIndex = 0;
let score = 0;

document.querySelectorAll(".topic-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentTopic = topics[btn.dataset.topic];
    menu.classList.add("hidden");
    game.classList.remove("hidden");
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  });
});

const background = document.getElementById("background");

function showQuestion() {
  const q = currentTopic[currentQuestionIndex];
  questionText.textContent = q.question;
  description.classList.remove("show");
  description.classList.add("hidden");
  description.textContent = "";
  answersContainer.innerHTML = "";

  background.classList.remove("unblurred");
  setTimeout(() => {
    background.style.backgroundImage = `url(${q.image})`;
  }, 300);

  q.answers.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = ans;
    btn.onclick = () => handleAnswer(index, q);
    answersContainer.appendChild(btn);
  });
}

function handleAnswer(index, q) {
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((b) => (b.disabled = true));

  if (index === q.correct) {
    buttons[index].classList.add("correct");
    score++;
  } else {
    buttons[index].classList.add("wrong");
    buttons[q.correct].classList.add("correct");
  }

  background.classList.add("unblurred");
  description.textContent = q.description;
  description.classList.remove("hidden");
  setTimeout(() => description.classList.add("show"), 200);

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentTopic.length) showQuestion();
    else showResult();
  }, 4000);
}

function showResult() {
  game.classList.add("hidden");
  result.classList.remove("hidden");
  resultText.textContent = `Результат: ${score} из ${currentTopic.length}`;
}

document.getElementById("retry").onclick = () => {
  result.classList.add("hidden");
  game.classList.remove("hidden");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
};

document.getElementById("back").onclick = () => {
  result.classList.add("hidden");
  menu.classList.remove("hidden");
};

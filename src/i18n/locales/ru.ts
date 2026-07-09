import type { Messages } from "../types";

export const ru: Messages = {
  meta: {
    title: "Семён Кислицын | Портфолио",
    description: "Профессиональное портфолио",
  },
  header: {
    home: "Главная",
    experience: "Опыт",
    projects: "Проекты",
    about: "Обо мне",
  },
  hero: {
    status: "Открыт к новым возможностям",
    title: "Привет, я Семён — Fullstack-разработчик из России!",
    subtitle:
      "Создаю масштабируемые и эффективные веб-приложения, которые приносят пользу.",
    explore: "Смотреть работы",
    connect: "Связаться",
    imageAlt: "Человек выглядывает из-за ноутбука",
  },
  tape: {
    words: [
      "Автономность",
      "Командный дух",
      "Ответственность",
      "Адаптивность",
      "Креативность",
      "Организованность",
      "Аналитика",
      "Любознательность",
      "Динамичность",
      "Проактивность",
      "Надёжность",
      "Отзывчивость",
      "Решение задач",
      "Умение слушать",
    ],
  },
  projects: {
    eyebrow: "Реальные результаты",
    title: "Избранные проекты",
    description:
      "Продакшен-инструменты, React-приложения и аккуратные сайты — от Survivor Tool до недавних проектов Яндекс Практикума.",
    visitLive: "Открыть сайт",
    viewGithub: "Смотреть на GitHub",
    items: [
      {
        id: "survivor-tool",
        company: "Survivor Tool",
        year: "2025-2026",
        title: "Платформа администрирования DayZ-сообществ",
        results: [
          "Собрал live-платформу для DayZ: Discord-автоматизация, тикеты, проверки игроков и серверные инструменты.",
          "Добавил CFTools/Steam-проверки, аналитику логов, алерты и веб-панель настроек.",
        ],
      },
      {
        id: "stellar-burgers",
        company: "Яндекс Практикум",
        year: "2026",
        title: "Stellar Burgers",
        results: [
          "Собрал TypeScript React-приложение для заказа бургеров с Redux Toolkit, защищёнными маршрутами, конструктором/лентой/профилем и API.",
          "Добавил Jest-покрытие Redux-слайсов, Playwright e2e-тесты и Storybook для UI-состояний.",
        ],
      },
      {
        id: "blog-customizer",
        company: "Яндекс Практикум",
        year: "2026",
        title: "Blog Customizer",
        results: [
          "Реализовал интерактивную панель настроек статьи с отложенным состоянием формы, CSS-переменными, сбросом/применением и Storybook.",
        ],
      },
      {
        id: "weblarek",
        company: "Яндекс Практикум",
        year: "2026",
        title: "WebLarek",
        results: [
          "Создал витрину на TypeScript и Vite по MVP-архитектуре: event-driven UI, корзина и двухшаговое оформление заказа.",
        ],
      },
      {
        id: "portfolio",
        company: "Личный проект",
        year: "2024-2026",
        title: "Сайт-портфолио",
        results: [
          "Спроектировал и собрал это Next.js-портфолио на Tailwind CSS с анимациями, static export и деплоем на GitHub Pages.",
        ],
      },
      {
        id: "zakrivayuschiy-teg",
        company: "Яндекс Практикум",
        year: "2025",
        title: "Закрывающий тег — фронтенд-проект",
        results: [
          "Пиксель-перфект лендинг по макету Figma с дополнительным переключателем темы и кастомными анимациями сверх задания.",
        ],
      },
    ],
  },
  about: {
    eyebrow: "Обо мне",
    title: "Взгляд в мой мир",
    description:
      "Узнайте больше о том, кто я, чем занимаюсь и что меня вдохновляет.",
    readsTitle: "Читаю сейчас",
    readsDescription: "Книга, в которую я сейчас погружён.",
    toolboxTitle: "Мой инструментарий",
    toolboxDescription:
      "Технологии и инструменты, которыми я пользуюсь для создания цифровых продуктов.",
    educationTitle: "Образование",
    educationDescription: "Мой академический бэкграунд.",
    certificationsTitle: "Сертификаты",
    certificationsDescription: "Сертификаты, которые я получил.",
    beyondTitle: "За пределами кода",
    beyondDescription: "Интересы и хобби вне цифровой сферы.",
    bookAlt: "Обложка книги",
    mapAlt: "Карта",
    memojiAlt: "Улыбающийся memoji",
    management: "Менеджмент",
    formations: [
      "Сетевая инженерия — бакалавриат — Sheridan College (2024–2028)",
    ],
    certifications: [
      "<strong>Career Essentials in GitHub Professional Certificate (фев. 2025)</strong>",
      "Career Essentials in Software Development от Microsoft и LinkedIn (фев. 2025)",
      "English for the workplace, Language Assessment (уровень C1–2) @ Oranim Academic College of Education (2021)",
    ],
    hobbies: [
      { title: "Пианино", emoji: "🎹", left: "35%", top: "40%" },
      { title: "Игры", emoji: "🎮", left: "10%", top: "35%" },
      { title: "Музыка", emoji: "🎵", left: "65%", top: "42%" },
      { title: "Чтение", emoji: "📚", left: "45%", top: "70%" },
      { title: "Путешествия", emoji: "✈️", left: "77%", top: "73%" },
      { title: "Фондовый рынок", emoji: "📈", left: "70%", top: "15%" },
    ],
  },
  contact: {
    title: "Давайте создадим что-то крутое вместе",
    description:
      "Хотите узнать больше о моей работе или обсудить возможность сотрудничества? Напишите мне.",
    button: "Связаться",
    mailSubject: "Давайте поработаем вместе",
    mailBody: "Привет, Сэм!\n\nХотел(а) бы обсудить с тобой проект.",
  },
  footer: {
    rights: "© 2026. Все права защищены.",
    resume: "Резюме",
  },
};

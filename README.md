# React Hooks Arcade

React Hooks Arcade - showcasing a variety of application interactivity.

# Arcade Apps

- **Pomodoro** [Learn More](https://github.com/moisestech/react-hooks-arcade/tree/master/Pomodoro) | [View Demo]() Coming Soon!
- **Markdown Editor** [Learn More](https://github.com/moisestech/react-hooks-arcade/tree/master/Markdown%20Editor) | [View Demo]() Coming Soon!
- **Highlight Tabs** [Learn More](https://github.com/moisestech/react-hooks-arcade/tree/master/src/components/Apps/HighlightTabs) | [View Demo]() Coming Soon!
- **Paper Rock Scissors** [Learn More](https://github.com/moisestech/react-hooks-arcade/tree/master/Paper%20Rock%20Scissors) | [View Demo]() Coming Soon!
- **Moving Boxes and Zelda** [Learn More](https://github.com/moisestech/react-hooks-arcade/tree/master/Moving%20Boxes%20and%20Zelda) | [View Demo]() Coming Soon!
- **Infinite Image Gallery** [Learn More](https://github.com/moisestech/react-hooks-arcade/tree/master/Infinite%20Image%20Gallery) | [View Demo]() Coming Soon!
- **Trivia** [Learn More](https://github.com/moisestech/react-hooks-arcade/tree/master/Trivia) | [View Demo]() Coming Soon!
- **Authentication** [Learn More](https://github.com/moisestech/react-hooks-arcade/tree/master/src/components/Apps/Authentication) | [View Demo]() Coming Soon!
- **Web Speech and Timers** [Learn More](https://github.com/moisestech/react-hooks-arcade/tree/master/Web%20Speech%20and%20Timers) | [View Demo]() Coming Soon!
- **Calendar Picker** [Learn More](https://github.com/moisestech/react-hooks-arcade/tree/master/src/components/Apps/CalendarPicker) | [View Demo]() Coming Soon!

## URL Tree

```bash
├── / #Home
├── /authentication #Authentication
├── /calendar-picker #Calendar Picker
├── /highlight-tabs #Highlight Tabs
├── /infinite-image-gallery/ #Infinite Image Gallery
├── /markdown-editor #Markdown Editor
├── /moving-boxes-zelda #Moving Boxes, Zelda
├── /paper-rock-scissors #Paper, Rock, Scissors
├── /pomodoro #Pomodoro
├── /trivia #Trivia
├── /web-speech-timers #Web Speech Timers
└── /* #404
```

# Application Tree

```bash
├── README.md
├── package.json
├── public
│   └── _redirects
├── src
│   ├── components
│   │   ├── Apps
│   │   │   ├── Authentication
│   │   │   │   ├── README.md
│   │   │   │   ├── components
│   │   │   │   ├── index.css
│   │   │   │   ├── index.js
│   │   │   │   └── public
│   │   │   ├── CalendarPicker
│   │   │   │   ├── README.md
│   │   │   │   ├── components
│   │   │   │   ├── index.css
│   │   │   │   ├── index.js
│   │   │   │   └── public
│   │   │   │       └── calendar-picker.gif
│   │   │   ├── HighlightTabs
│   │   │   │   ├── README.md
│   │   │   │   ├── RoutesView
│   │   │   │   │   └── index.js
│   │   │   │   ├── components
│   │   │   │   │   ├── Header
│   │   │   │   │   │   └── index.js
│   │   │   │   │   └── Tab
│   │   │   │   │       └── index.js
│   │   │   │   ├── index.css
│   │   │   │   ├── index.js
│   │   │   │   ├── pages
│   │   │   │   │   ├── About
│   │   │   │   │   │   └── index.js
│   │   │   │   │   ├── Features
│   │   │   │   │   │   └── index.js
│   │   │   │   │   └── Home
│   │   │   │   │       └── index.js
│   │   │   │   └── public
│   │   │   │       └── highlight-tabs.gif
│   │   │   ├── InfiniteImageGallery
│   │   │   │   ├── README.md
│   │   │   │   ├── components
│   │   │   │   ├── index.css
│   │   │   │   ├── index.js
│   │   │   │   └── public
│   │   │   ├── MarkdownEditor
│   │   │   │   ├── README.md
│   │   │   │   ├── index.css
│   │   │   │   ├── index.js
│   │   │   │   └── public
│   │   │   │       └── markdown-editor.gif
│   │   │   ├── MovingBoxesAndZelda
│   │   │   │   ├── README.md
│   │   │   │   ├── components
│   │   │   │   ├── hooks
│   │   │   │   │   └── useMovement.js
│   │   │   │   ├── index.css
│   │   │   │   ├── index.js
│   │   │   │   └── public
│   │   │   │       └── moving-boxes-zelda.gif
│   │   │   ├── PaperRockScissors
│   │   │   │   ├── README.md
│   │   │   │   ├── components
│   │   │   │   │   ├── Choices
│   │   │   │   │   │   └── index.js
│   │   │   │   │   ├── Result
│   │   │   │   │   │   └── index.js
│   │   │   │   │   └── ScoreBoard
│   │   │   │   │       └── index.js
│   │   │   │   ├── index.css
│   │   │   │   ├── index.js
│   │   │   │   ├── public
│   │   │   │   │   ├── icons
│   │   │   │   │   │   ├── Paper.js
│   │   │   │   │   │   ├── Rock.js
│   │   │   │   │   │   └── Scissors.js
│   │   │   │   │   └── paper-rock-scissors.gif
│   │   │   │   └── utils
│   │   │   │       └── ChoicesArray.js
│   │   │   ├── Pomodoro
│   │   │   │   ├── README.md
│   │   │   │   ├── index.css
│   │   │   │   ├── index.js
│   │   │   │   └── public
│   │   │   │       └── pomodoro.gif
│   │   │   ├── Trivia
│   │   │   │   ├── README.md
│   │   │   │   ├── index.css
│   │   │   │   ├── index.js
│   │   │   │   └── public
│   │   │   │       └── trivia.gif
│   │   │   └── WebSpeechAndTimers
│   │   │       ├── README.md
│   │   │       ├── index.css
│   │   │       ├── index.js
│   │   │       └── public
│   │   │           └── web-speech-timers.gif
│   │   ├── Nav
│   │   │   ├── components
│   │   │   │   └── AppBtnInfo
│   │   │   │       └── index.js
│   │   │   ├── index.js
│   │   │   └── utils
│   │   │       └── navbar-array.js
│   │   └── Pages
│   │       ├── Home
│   │       │   └── index.js
│   │       └── NotFound
│   │           └── index.js
│   ├── index.css
│   ├── index.html
│   └── index.js
└── webpack.config.js
```

### Navigation To-Do

- Hide/Reveal Navigation
- Add Menu Icon
- NavBar Dark/Light Theme
- Loading Component between Apps
- Animate Routes
- React Suspense
- React.lazy for Code Splitting

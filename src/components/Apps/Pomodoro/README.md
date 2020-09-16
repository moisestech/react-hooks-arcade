# Pomodoro

Pomodoro interactive timer.

- The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.

[View Demo]()
<img width="400" src="https://github.com/moisestech/react-hooks-arcade/blob/master/src/components/Apps/Pomodoro/public/pomodoro.gif">

# React skills used in this app

- Timers w/ `setInteval()` & `clearInterval()`
- React state w/ `useState()`
- React refs w/ `useRef()`

### Challenge

- Add info button to show modal w/ definition
- Hide Reset button if time hasn't decremented
- Keyboard shortcuts
- Change button timing, [Short Break, Long Break]
- Show Notifications
- Add Sound to Buttons
- Add line animation of time left

### App Tree

```bash
Pomodoro
├── README.md
├── index.css
├── index.js
└── public
      └── pomodoro.gif
```

### Todo

- Add Notes
- Add Workflow
- Add Definition info [https://en.wikipedia.org/wiki/Pomodoro_Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique)

### Learn

- UI.Dev useRef, useEffect Timer Examples

### Questions

- is it better to deal with useEffect or useRef for setInterval timing?

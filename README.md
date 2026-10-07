# IT313 - React State & Hooks in Action

## Problem
This project implements the Lab Timer & Practice Tracker required for Laboratory 5. It allows students to count solved practice problems and track laboratory working time.

## Components and Concepts

- `PracticeTracker` receives `solved`, `onSolve`, and `onReset` as props.
- `LabScreen` owns the solved count and running state using `useState`.
- `useStopwatch(isRunning)` is a custom hook that uses `useState` and `useEffect`.
- The stopwatch uses `setInterval` and cleans it up with `clearInterval`.
- `Stopwatch` receives `seconds` and `isRunning` as props.
- Conditional rendering displays `Great job!` at 5 solved problems and changes the timer status between `Running...` and `Paused`.
- State is lifted to `LabScreen` so `PracticeTracker` and `Stopwatch` stay synchronized.

## How to Run

1. Open this folder in VS Code.
2. Open the terminal.
3. Run:

```bash
npm install
```

4. Start Expo:

```bash
npx expo start
```

5. Scan the QR code using Expo Go.

## Expected Behavior

- Initial counter: `Solved: 0`
- Initial timer: `00:00`
- Initial status: `Paused`
- `Solve +1` increases the solved count.
- After 5 solved problems, `Great job!` appears.
- `Reset` returns the solved count to 0.
- `Start` starts the stopwatch.
- `Stop` pauses the stopwatch.
- The timer continues from its current value after stopping and starting again.

import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <span className="badge">GitHub import demo</span>
      <h1>Hello, Make!</h1>
      <p>A small React app for trying the GitHub clone and import flow.</p>
      <button onClick={() => setCount((value) => value + 1)}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
      <p className="hint">Edit this page in Make to try a change.</p>
    </main>
  );
}

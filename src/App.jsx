import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <span className="badge">Snapshot checkpoint marker 7422</span>
      <h1>GitHub Connect E2E Attempt 2</h1>
      <div className="count" aria-live="polite">
        {count}
      </div>
      <button onClick={() => setCount((value) => value + 1)}>
        Increment checkpoint
      </button>
    </main>
  );
}

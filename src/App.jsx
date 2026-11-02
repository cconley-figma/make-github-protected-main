import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <section className="counter-card">
        <h1>GitHub Connect E2E 2026-11-02</h1>
        <p className="marker">Snapshot checkpoint marker 7421</p>
        <p className="count" aria-live="polite">{count}</p>
        <button
          type="button"
          onClick={() => setCount((currentCount) => currentCount + 1)}
        >
          Increment checkpoint
        </button>
      </section>
    </main>
  );
}

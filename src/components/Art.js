import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [isPending, setIsPending] = useState(false);

  async function handleClick() {
    setPending((prev) => prev + 1);
    setIsPending(true);
    await delay(3000);
    setIsPending(false);
    setPending((prev) => prev - 1);
    setCompleted((prev) => prev + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick} disabled={isPending}>
        Buy
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

'use client';

import { useEffect } from 'react';

type StarshipsErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function StarshipsError({ error, reset }: StarshipsErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Could not starships</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}

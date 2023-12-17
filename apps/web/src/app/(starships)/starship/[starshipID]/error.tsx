'use client';

import { useEffect } from 'react';

type StarshipErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function StarshipError({ error, reset }: StarshipErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Could not load starship</h2>
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

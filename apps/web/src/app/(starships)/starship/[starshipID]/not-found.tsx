import Link from 'next/link';

export default function StarshipNotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find starship</p>
      <Link href="/public">Return Home</Link>
    </div>
  )
}

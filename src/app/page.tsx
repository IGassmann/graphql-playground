import ProjectList from '@/app/ProjectList';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className="min-h-screen flex-col items-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Suspense fallback={<p>Loading...</p>}>
          <ProjectList />
        </Suspense>
      </div>
    </main>
  )
}

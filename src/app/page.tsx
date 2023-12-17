import StarshipList from '@/app/StarshipList';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </header>
      <main className="flex-1 bg-gray-50 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Suspense fallback={<p>Loading...</p>}>
            <StarshipList />
          </Suspense>
        </div>
      </main>
    </div>
  )
}

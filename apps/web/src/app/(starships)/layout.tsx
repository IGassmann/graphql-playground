import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

type StarshipsLayoutProps = {
  children: React.ReactNode
}

export default function StarshipsLayout({ children }: StarshipsLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div
          className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <OrganizationSwitcher/>
          <UserButton/>
        </div>
      </header>
      <main className="flex-1 bg-gray-50 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {children}
        </div>
      </main>
    </div>
  )
}

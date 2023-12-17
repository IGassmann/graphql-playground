import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

type StarshipsLayoutProps = {
  children: React.ReactNode;
};

export default function StarshipsLayout({ children }: StarshipsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </header>
      <main className="flex-1 bg-gray-50 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">{children}</div>
      </main>
    </div>
  );
}

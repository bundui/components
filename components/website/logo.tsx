export default function Logo({ isBadge = false }: { isBadge?: boolean }) {
  return (
    <a href="/" className="relative flex items-center gap-2">
      <img src="/logo-light.svg" className="hidden dark:block w-6" alt="logo light" />
      <img src="/logo-dark.svg" className="block dark:hidden w-6" alt="logo dark" />
      <div className="dark:text-white">Bundui</div>
      {isBadge && (
        <span className="ml-2 select-none rounded-full border px-2 py-0.5 text-xs">beta</span>
      )}
    </a>
  );
}

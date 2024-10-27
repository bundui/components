import Link from "next/link";

export default function Logo({ isBadge = false }: { isBadge?: boolean }) {
  return (
    <Link href="/" className="relative flex items-center gap-2">
      <img
        src="/logo-light.svg"
        className="hidden dark:block w-6"
        alt="logo light"
      />
      <img
        src="/logo-dark.svg"
        className="block dark:hidden w-6"
        alt="logo dark"
      />
      <div className="dark:text-white font-semibold">Bundui</div>
      {isBadge && (
        <span className="ml-1 select-none rounded-full border px-2 py-0.5 text-xs">
          beta
        </span>
      )}
    </Link>
  );
}

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative flex items-center gap-2">
      <img src="/logo.svg" className="w-6 dark:invert" alt="bundui svg logo" />
      <div className="font-semibold dark:text-white">Bundui</div>
    </Link>
  );
}

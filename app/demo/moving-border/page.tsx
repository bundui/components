import { cn } from "@/lib/utils";

//======================================
export default function Page() {
  return (
    <div className="relative overflow-hidden rounded-full dark:bg-zinc-900 bg-white shadow-sm border dark:border-zinc-800 group border-zinc-400 p-0.5">
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none" />
      <button
        className={cn(
          "w-[100px] h-10 px-8 rounded-full font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900"
        )}
      />
    </div>
  );
}

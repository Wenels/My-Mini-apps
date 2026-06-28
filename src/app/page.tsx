import Link from "next/link";

const apps = [
  {
    href: "/counter",
    title: "Counter",
    description: "A simple increment/decrement counter with state management.",
    emoji: "🔢",
    gradient: "from-violet-500 to-purple-700",
    shadow: "shadow-violet-500/30",
  },
  {
    href: "/calculator",
    title: "Calculator",
    description: "A fully functional calculator for basic arithmetic operations.",
    emoji: "🧮",
    gradient: "from-cyan-500 to-blue-700",
    shadow: "shadow-cyan-500/30",
  },
  {
    href: "/Rainbow",
    title: "Rainbow Wrapper",
    description: "A colour-cycling wrapper component with togglable display.",
    emoji: "🌈",
    gradient: "from-pink-500 to-rose-700",
    shadow: "shadow-pink-500/30",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d14] flex flex-col items-center justify-center px-6 py-16 font-sans">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
          🚀 Mini Apps
        </h1>
        <p className="text-zinc-400 text-lg max-w-md mx-auto leading-relaxed">
          A collection of small, focused React components. Pick one to explore.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {apps.map((app) => (
          <Link
            key={app.href}
            href={app.href}
            className={`group relative flex flex-col gap-4 rounded-2xl bg-white/5 border border-white/10 p-8 shadow-xl ${app.shadow} hover:scale-[1.04] hover:border-white/20 transition-all duration-300`}
          >
            {/* Gradient top accent */}
            <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${app.gradient}`} />

            <span className="text-5xl">{app.emoji}</span>

            <div>
              <h2 className="text-xl font-bold text-white mb-1">{app.title}</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">{app.description}</p>
            </div>

            <span className={`mt-auto text-sm font-semibold bg-gradient-to-r ${app.gradient} bg-clip-text text-transparent group-hover:underline`}>
              Open →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}

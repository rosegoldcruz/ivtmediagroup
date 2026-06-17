import Image from "next/image";

const focusAreas = [
  "Educational Course Access",
  "Member Resource Portals",
  "Ecosystem Media",
  "Community Communication",
  "Digital Product Infrastructure",
  "Compliance-Aware Messaging",
];

const educationTiers = [
  { name: "Starter Access", price: "$25" },
  { name: "Builder Access", price: "$100" },
  { name: "Advanced Access", price: "$500" },
  { name: "Founder Access", price: "$1,000" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-[#f4e3b2]">
      <div className="vault-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#8c6a21_0%,rgba(5,5,5,0)_40%)] opacity-30" />

      <header className="sticky top-0 z-20 border-b border-[#8a6722]/40 bg-[#050505]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-lg font-semibold tracking-[0.2em] text-[#e7c66d]">IVT Media Group</p>
          <nav className="hidden gap-6 text-sm text-[#cfb36c] md:flex">
            <a href="#about" className="transition hover:text-[#f3dd9a]">About</a>
            <a href="#focus" className="transition hover:text-[#f3dd9a]">Focus</a>
            <a href="#education" className="transition hover:text-[#f3dd9a]">Education</a>
            <a href="#contact" className="transition hover:text-[#f3dd9a]">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-12 md:py-16">
        <section className="grid items-center gap-10 rounded-3xl border border-[#8a6722]/40 bg-[#0b0b0b]/80 p-8 shadow-[0_0_60px_rgba(173,129,42,0.08)] md:grid-cols-2 md:p-12">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#b9933f]">Official Iron Vault Infrastructure</p>
            <h1 className="text-3xl font-semibold leading-tight text-[#f4e3b2] md:text-5xl">
              Media, Education, and Digital Infrastructure for the Iron Vault Ecosystem
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#d4bb82] md:text-lg">
              IVT Media Group builds educational content, member resources, and digital experiences for communities
              exploring blockchain, digital assets, and emerging financial technology.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#about"
                className="rounded-full border border-[#b9933f] bg-[#b9933f] px-6 py-3 text-center text-sm font-semibold text-[#1a1304] transition hover:bg-[#d8b866]"
              >
                Explore the Company
              </a>
              <a
                href="#education"
                className="rounded-full border border-[#8a6722] px-6 py-3 text-center text-sm font-semibold text-[#f1db9e] transition hover:border-[#b9933f]"
              >
                View Education Access
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm rounded-2xl border border-[#8a6722]/50 bg-[#080808] p-4 shadow-[0_0_35px_rgba(173,129,42,0.18)]">
            <Image
              src="https://github.com/user-attachments/assets/af850a8a-9fbd-4b82-a968-06ffc8a9a4a5"
              alt="IVT Media Group logo"
              width={800}
              height={800}
              className="h-auto w-full rounded-xl"
              priority
            />
          </div>
        </section>

        <section id="about" className="rounded-3xl border border-[#8a6722]/35 bg-[#0b0b0b]/80 p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-[#f1db9e] md:text-3xl">The Business Layer Behind the Iron Vault Ecosystem</h2>
          <p className="mt-4 text-base leading-7 text-[#d2ba84]">
            IVT Media Group gives the Iron Vault ecosystem a cleaner operational home for education, content,
            community communication, and digital infrastructure.
          </p>
        </section>

        <section id="focus" className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#f1db9e] md:text-3xl">Strategic Focus</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area}
                className="rounded-2xl border border-[#8a6722]/35 bg-[#0b0b0b]/75 p-5 text-[#e5cb8a] shadow-[inset_0_0_0_1px_rgba(255,205,102,0.04)]"
              >
                <h3 className="text-lg font-medium">{area}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="rounded-3xl border border-[#8a6722]/35 bg-[#0b0b0b]/80 p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-[#f1db9e] md:text-3xl">Education Access</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {educationTiers.map((tier) => (
              <article key={tier.name} className="rounded-2xl border border-[#8a6722]/35 bg-[#070707] p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-[#b9933f]">One-Time Access</p>
                <h3 className="mt-2 text-lg font-semibold text-[#f2dd9f]">{tier.name}</h3>
                <p className="mt-2 text-2xl font-semibold text-[#e0c070]">{tier.price}</p>
                <button
                  type="button"
                  className="mt-5 w-full cursor-not-allowed rounded-full border border-[#7f5d1c] px-4 py-2 text-sm font-semibold text-[#ba9b56]"
                  disabled
                >
                  Setup Pending
                </button>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-[#c8ae74]">
            Education access is separate from any digital asset eligibility. Nothing on this site is financial advice,
            investment advice, or a guarantee of profit.
          </p>
        </section>

        <section className="rounded-3xl border border-[#8a6722]/35 bg-[#0b0b0b]/80 p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-[#f1db9e] md:text-3xl">Education Before Participation</h2>
          <p className="mt-4 text-base leading-7 text-[#d2ba84]">
            IVT Media Group supports the media, education, and communication layer surrounding the Iron Vault
            ecosystem. The company focuses on helping members understand the ideas, tools, and risks before
            participating in any digital asset environment.
          </p>
        </section>

        <section id="contact" className="rounded-3xl border border-[#8a6722]/35 bg-[#0b0b0b]/80 p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-[#f1db9e] md:text-3xl">Official IVT Media Group Inquiries</h2>
          <p className="mt-4 text-base leading-7 text-[#d2ba84]">
            Contact details will be added through approved company channels.
          </p>
          <button
            type="button"
            className="mt-6 cursor-not-allowed rounded-full border border-[#7f5d1c] px-6 py-3 text-sm font-semibold text-[#ba9b56]"
            disabled
          >
            Contact Pending
          </button>
        </section>
      </main>
    </div>
  );
}

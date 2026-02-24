"use client";

type DropTag = "HOT" | "NEW" | "FREE" | "GATED";

const TAG_STYLE: Record<DropTag, string> = {
  HOT: "border-orange-400/40 bg-orange-400/10 text-orange-200",
  NEW: "border-emerald-300/35 bg-emerald-300/10 text-emerald-200",
  FREE: "border-sky-300/35 bg-sky-300/10 text-sky-200",
  GATED: "border-fuchsia-300/35 bg-fuchsia-300/10 text-fuchsia-200",
};

export default function HomePage() {
  const drops: Array<{ title: string; meta: string; tag: DropTag }> = [
    {
      title: "Neon Cathedral (Instrumental)",
      meta: "Music • 2:34 • 0.01 ETH unlock",
      tag: "HOT",
    },
    {
      title: "OracleVision Poster Pack",
      meta: "Art • 12 files • 5 collectors",
      tag: "NEW",
    },
    {
      title: "CreatorDrop UI Kit",
      meta: "Code • Components • Free",
      tag: "FREE",
    },
    {
      title: "Midnight Run (Demo)",
      meta: "Music • 1:48 • Token-gated",
      tag: "GATED",
    },
  ];

  return (
    <div className="relative">
      {/* Ambient glow / background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-10 left-[-140px] h-[360px] w-[360px] rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-160px] h-[420px] w-[420px] rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <div className="relative px-6 py-10">
        {/* HERO */}
        <section className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-6">
            {/* Pill */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs text-neutral-200 cd-pill">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              CreatorDrop is live — Limewire 2.0 vibes, legit ownership.
            </div>

            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              {/* Left: headline */}
              <div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  Drop your work.
                  <span className="block text-neutral-300">
                    Keep the rights. Build the fanbase.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-base md:text-lg text-neutral-300 leading-relaxed">
                  A creator-first marketplace for music, art, and code. Upload your
                  drops, set access rules, and monetize without begging gatekeepers.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#explore"
                    className="rounded-2xl bg-white text-black px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
                  >
                    Explore Drops
                  </a>

                  <a
                    href="#upload"
                    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    Upload (Coming)
                  </a>

                  <a
                    href="#connect"
                    className="rounded-2xl border border-white/10 bg-black/20 px-6 py-3 text-sm font-semibold text-neutral-200 hover:bg-white/10 transition"
                  >
                    Connect Wallet (Soon)
                  </a>
                </div>
              </div>

              {/* Right: “hero card” */}
              <div className="rounded-3xl p-5 cd-card cd-glow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Today’s signal
                    </div>
                    <div className="mt-1 text-sm text-neutral-300">
                      No algorithm prison. Just drops people actually want.
                    </div>
                  </div>
                  <div className="text-[11px] rounded-full border border-white/10 bg-white/5 px-3 py-1 text-neutral-200">
                    v0.1
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    { k: "Ownership", v: "Creators keep rights + provenance." },
                    { k: "Monetize", v: "Paid unlocks & token gates." },
                    { k: "Discovery", v: "Fast browse. Real signal." },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="rounded-2xl border border-white/10 bg-black/30 p-4"
                    >
                      <div className="text-xs font-semibold tracking-wide text-neutral-200">
                        {row.k}
                      </div>
                      <div className="mt-1 text-sm text-neutral-300">
                        {row.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE STRIP */}
        <section className="max-w-5xl mx-auto mt-14">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Ownership",
                body: "Your drop stays yours. Clear provenance. Clean presentation.",
              },
              {
                title: "Monetize",
                body: "Token-gated, paid unlocks, collector perks — simple models that scale.",
              },
              {
                title: "Discovery",
                body: "Browse new drops fast. No algorithm prison. Real signal.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-3xl p-6 cd-card hover:brightness-110 transition">
                <div className="text-sm font-semibold text-white">{f.title}</div>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TRENDING */}
        <section id="explore" className="max-w-5xl mx-auto mt-14">
          <div className="flex items-end justify-between gap-4">
            <h3 className="text-xl font-semibold text-white">Trending Drops</h3>

            <button
              type="button"
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200 hover:bg-white/10 transition"
              onClick={() => alert("Sorting coming soon 👀")}
            >
              Sort: Hot
            </button>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {drops.map((d) => (
              <div
                key={d.title}
                className="rounded-3xl p-6 cd-card hover:brightness-110 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold text-white">
                      {d.title}
                    </div>
                    <div className="mt-1 text-sm text-neutral-300">
                      {d.meta}
                    </div>
                  </div>

                  <div
                    className={
                      "shrink-0 rounded-full border px-3 py-1 text-[11px] font-semibold " +
                      TAG_STYLE[d.tag]
                    }
                  >
                    {d.tag}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-2xl bg-white text-black px-5 py-2.5 text-xs font-semibold hover:opacity-90 transition"
                    onClick={() => alert("Preview coming soon 🎧")}
                  >
                    Preview
                  </button>

                  <button
                    type="button"
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition"
                    onClick={() => alert("Purchase flow coming soon 💸")}
                  >
                    Unlock
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UPLOAD */}
        <section id="upload" className="max-w-5xl mx-auto mt-14">
          <div className="rounded-3xl p-7 cd-card cd-glow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Upload</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed max-w-2xl">
                  Next step: file storage + metadata. We’ll do it clean: one feature,
                  one file, one green build at a time.
                </p>
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-neutral-200">
                roadmap
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                "Title + type (music/art/code)",
                "Upload file (storage)",
                "Set unlock rule (free / paid / gated)",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-neutral-200"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECT */}
        <section id="connect" className="max-w-5xl mx-auto mt-14">
          <div className="rounded-3xl p-7 cd-card">
            <h3 className="text-xl font-semibold text-white">Connect</h3>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed max-w-2xl">
              Wallet connection comes after storage. Otherwise it’s fake power.
              Ultra elite dev rule: build the spine first.
            </p>

            <button
              type="button"
              className="mt-6 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-neutral-100 hover:bg-white/10 transition"
              onClick={() => alert("Wallet connect coming soon 🧠")}
            >
              Connect Wallet (Soon)
            </button>
          </div>

          <div className="footer mt-10">
            © {new Date().getFullYear()} CreatorDrop — Built for digital sovereignty.
          </div>
        </section>
      </div>
    </div>
  );
}
"use client";

export default function HomePage() {
  return (
    <div className="px-6 py-10">
      {/* Hero */}
      <section className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs text-neutral-300">
          <span className="h-2 w-2 rounded-full bg-white/70" />
          CreatorDrop is live — Limewire 2.0 vibes, legit ownership.
        </div>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
          Drop your work.
          <span className="block text-neutral-400">
            Keep the rights. Build the fanbase.
          </span>
        </h2>

        <p className="mt-4 text-base md:text-lg text-neutral-300 leading-relaxed">
          A creator-first marketplace for music, art, and code. Upload your drops,
          set access rules, and monetize without begging gatekeepers.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#explore"
            className="rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
          >
            Explore Drops
          </a>
          <a
            href="#upload"
            className="rounded-xl border border-neutral-800 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-900 transition"
          >
            Upload (Coming)
          </a>
          <a
            href="#connect"
            className="rounded-xl border border-neutral-800 px-5 py-3 text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-900 transition"
          >
            Connect Wallet (Soon)
          </a>
        </div>
      </section>

      {/* Feature grid */}
      <section className="max-w-4xl mx-auto mt-14 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
          <div className="text-sm font-semibold">Ownership</div>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            Your drop stays yours. Clear provenance. Clean presentation.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
          <div className="text-sm font-semibold">Monetize</div>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            Token-gated, paid unlocks, collector perks — simple models that scale.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
          <div className="text-sm font-semibold">Discovery</div>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            Browse new drops fast. No algorithm prison. Real signal.
          </p>
        </div>
      </section>

      {/* Mock drops */}
      <section id="explore" className="max-w-4xl mx-auto mt-14">
        <div className="flex items-end justify-between gap-4">
          <h3 className="text-xl font-semibold">Trending Drops</h3>
          <button
            type="button"
            className="text-xs text-neutral-400 hover:text-white transition"
            onClick={() => alert("Sorting coming soon 👀")}
          >
            Sort: Hot
          </button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
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
          ].map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 hover:bg-neutral-900/60 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold">{d.title}</div>
                  <div className="mt-1 text-sm text-neutral-400">{d.meta}</div>
                </div>
                <div className="shrink-0 rounded-full border border-neutral-800 px-2 py-1 text-[11px] text-neutral-300">
                  {d.tag}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  className="rounded-xl bg-white text-black px-4 py-2 text-xs font-semibold hover:opacity-90 transition"
                  onClick={() => alert("Preview coming soon 🎧")}
                >
                  Preview
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-neutral-800 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-900 transition"
                  onClick={() => alert("Purchase flow coming soon 💸")}
                >
                  Unlock
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upload placeholder */}
      <section id="upload" className="max-w-4xl mx-auto mt-14">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <h3 className="text-xl font-semibold">Upload</h3>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            Next step: file storage + metadata. We’ll do it clean: one feature,
            one file, one green build at a time.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              "Title + type (music/art/code)",
              "Upload file (storage)",
              "Set unlock rule (free / paid / gated)",
            ].map((t) => (
              <div
                key={t}
                className="rounded-xl border border-neutral-800 bg-black/40 p-4 text-sm text-neutral-300"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect placeholder */}
      <section id="connect" className="max-w-4xl mx-auto mt-14">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <h3 className="text-xl font-semibold">Connect</h3>
          <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
            Wallet connection comes after storage. Otherwise it’s fake power.
            Ultra elite dev rule: build the spine first.
          </p>

          <button
            type="button"
            className="mt-5 rounded-xl border border-neutral-800 px-5 py-3 text-sm font-semibold text-neutral-300 hover:text-white hover:bg-neutral-900 transition"
            onClick={() => alert("Wallet connect coming soon 🧠")}
          >
            Connect Wallet (Soon)
          </button>
        </div>
      </section>
    </div>
  );
}
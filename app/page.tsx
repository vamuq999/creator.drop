"use client";

import React, { useMemo, useRef, useState } from "react";

type PhaseKey = "drop" | "discover" | "stake";

type Drop = {
  id: string;
  title: string;
  creator: string;
  kind: "Music" | "Video" | "Art" | "Bundle";
  priceEth: number;
  supply: number;
  createdAt: string;
};

function uid() {
  return Math.random().toString(16).slice(2) + "-" + Date.now().toString(16);
}

function formatDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export default function HomePage() {
  const [phase, setPhase] = useState<PhaseKey>("drop");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [form, setForm] = useState({
    title: "",
    creator: "",
    kind: "Music" as Drop["kind"],
    priceEth: "0.01",
    supply: "1000",
  });

  const [drops, setDrops] = useState<Drop[]>([
    {
      id: uid(),
      title: "Midnight Harbour (Demo Drop)",
      creator: "EFUR",
      kind: "Music",
      priceEth: 0.01,
      supply: 1000,
      createdAt: formatDate(new Date()),
    },
    {
      id: uid(),
      title: "OracleVision Poster Pack",
      creator: "VoltaraLabs",
      kind: "Bundle",
      priceEth: 0.02,
      supply: 500,
      createdAt: formatDate(new Date(Date.now() - 86400000)),
    },
  ]);

  const totalSize = useMemo(() => {
    const bytes = files.reduce((acc, f) => acc + f.size, 0);
    const mb = bytes / (1024 * 1024);
    return mb;
  }, [files]);

  function onPickFiles() {
    fileInputRef.current?.click();
  }

  function onFilesSelected(incoming: FileList | null) {
    if (!incoming) return;
    const next = Array.from(incoming);
    // Simple guard: keep it reasonable on mobile
    const capped = next.slice(0, 10);
    setFiles((prev) => [...prev, ...capped]);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function clearAllFiles() {
    setFiles([]);
  }

  function publishDrop() {
    const title = form.title.trim();
    const creator = form.creator.trim();
    const priceEth = Number(form.priceEth);
    const supply = Number(form.supply);

    if (!title || !creator) {
      alert("Add a title and creator name.");
      return;
    }
    if (!Number.isFinite(priceEth) || priceEth <= 0) {
      alert("Price must be a positive number (ETH).");
      return;
    }
    if (!Number.isFinite(supply) || supply <= 0) {
      alert("Supply must be a positive number.");
      return;
    }
    if (files.length === 0) {
      alert("Add at least one file to drop.");
      return;
    }

    const newDrop: Drop = {
      id: uid(),
      title,
      creator,
      kind: form.kind,
      priceEth,
      supply,
      createdAt: formatDate(new Date()),
    };

    setDrops((prev) => [newDrop, ...prev]);

    // reset
    setFiles([]);
    setForm((p) => ({ ...p, title: "", creator: "" }));
    setPhase("discover");
  }

  return (
    <div className="stackLg">
      <section className="hero">
        <div className="heroInner">
          <div className="heroCopy">
            <div className="kicker">Limewire 2.0 energy — but clean, legal, and owned.</div>
            <h1 className="h1">
              CreatorDrop: a simple pipeline to ship digital drops and build a staking economy.
            </h1>
            <p className="lead">
              Phase 1: Drops. Phase 2: Discovery. Phase 3: Stake & incentives.
              No fluff. Just a product you can scale.
            </p>

            <div className="rowWrap">
              <button className="btn btnPrimary" onClick={() => setPhase("drop")}>
                Start a Drop
              </button>
              <button className="btn btnGhost" onClick={() => setPhase("discover")}>
                Browse Drops
              </button>
              <button className="btn btnGhost" onClick={() => setPhase("stake")}>
                Stake (Soon)
              </button>
            </div>

            <div className="pillRow">
              <span className="pill">Mobile-first</span>
              <span className="pill">No dependencies</span>
              <span className="pill">Ready for wallet + IPFS</span>
            </div>
          </div>

          <div className="heroCard">
            <div className="cardTitle">System Status</div>
            <div className="statGrid">
              <div className="stat">
                <div className="statLabel">Phase</div>
                <div className="statValue">{phase.toUpperCase()}</div>
              </div>
              <div className="stat">
                <div className="statLabel">Drops</div>
                <div className="statValue">{drops.length}</div>
              </div>
              <div className="stat">
                <div className="statLabel">Files queued</div>
                <div className="statValue">{files.length}</div>
              </div>
              <div className="stat">
                <div className="statLabel">Queue size</div>
                <div className="statValue">{totalSize.toFixed(2)} MB</div>
              </div>
            </div>

            <div className="divider" />

            <div className="muted">
              Next step: hook “Publish” into IPFS + contract mint + payment rail.
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="phaseTabs">
          <button
            className={`tab ${phase === "drop" ? "tabActive" : ""}`}
            onClick={() => setPhase("drop")}
            id="drop"
          >
            Phase 1 — Drop
          </button>
          <button
            className={`tab ${phase === "discover" ? "tabActive" : ""}`}
            onClick={() => setPhase("discover")}
            id="discover"
          >
            Phase 2 — Discover
          </button>
          <button
            className={`tab ${phase === "stake" ? "tabActive" : ""}`}
            onClick={() => setPhase("stake")}
            id="stake"
          >
            Phase 3 — Stake
          </button>
        </div>

        {phase === "drop" && (
          <div className="grid2">
            <div className="card">
              <div className="cardHeader">
                <div>
                  <div className="cardTitle">Create a Drop</div>
                  <div className="muted">Fill metadata → attach files → publish.</div>
                </div>
              </div>

              <div className="formGrid">
                <label className="field">
                  <span className="fieldLabel">Drop title</span>
                  <input
                    className="input"
                    value={form.title}
                    onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                    placeholder="e.g. Midnight Harbour EP"
                  />
                </label>

                <label className="field">
                  <span className="fieldLabel">Creator</span>
                  <input
                    className="input"
                    value={form.creator}
                    onChange={(e) => setForm((p) => ({ ...p, creator: e.target.value }))}
                    placeholder="e.g. EFUR / VoltaraLabs"
                  />
                </label>

                <label className="field">
                  <span className="fieldLabel">Type</span>
                  <select
                    className="input"
                    value={form.kind}
                    onChange={(e) => setForm((p) => ({ ...p, kind: e.target.value as Drop["kind"] }))}
                  >
                    <option>Music</option>
                    <option>Video</option>
                    <option>Art</option>
                    <option>Bundle</option>
                  </select>
                </label>

                <div className="row2">
                  <label className="field">
                    <span className="fieldLabel">Price (ETH)</span>
                    <input
                      className="input"
                      inputMode="decimal"
                      value={form.priceEth}
                      onChange={(e) => setForm((p) => ({ ...p, priceEth: e.target.value }))}
                      placeholder="0.01"
                    />
                  </label>

                  <label className="field">
                    <span className="fieldLabel">Supply</span>
                    <input
                      className="input"
                      inputMode="numeric"
                      value={form.supply}
                      onChange={(e) => setForm((p) => ({ ...p, supply: e.target.value }))}
                      placeholder="1000"
                    />
                  </label>
                </div>
              </div>

              <div className="divider" />

              <div className="rowWrap">
                <button className="btn btnGhost" onClick={onPickFiles}>
                  Add Files
                </button>
                <button className="btn btnPrimary" onClick={publishDrop}>
                  Publish Drop
                </button>
                <button className="btn btnDanger" onClick={clearAllFiles} disabled={files.length === 0}>
                  Clear Files
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => onFilesSelected(e.target.files)}
                />
              </div>

              <div className="uploadBox" role="group" aria-label="Upload queue">
                <div className="uploadTop">
                  <div className="uploadTitle">Upload Queue</div>
                  <div className="muted">{files.length} file(s)</div>
                </div>

                {files.length === 0 ? (
                  <div className="uploadEmpty">
                    Drop files here (or tap <b>Add Files</b>). This is UI-only right now.
                  </div>
                ) : (
                  <ul className="fileList">
                    {files.map((f, idx) => (
                      <li key={idx} className="fileRow">
                        <div className="fileMeta">
                          <div className="fileName">{f.name}</div>
                          <div className="muted">{(f.size / (1024 * 1024)).toFixed(2)} MB</div>
                        </div>
                        <button className="btnTiny" onClick={() => removeFile(idx)}>
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="card">
              <div className="cardHeader">
                <div>
                  <div className="cardTitle">What “Publish” will do next</div>
                  <div className="muted">We’ll wire this after UI is stable.</div>
                </div>
              </div>

              <ol className="list">
                <li>
                  Upload files to <b>IPFS</b> (Pinata/web3.storage/etc) and get CIDs.
                </li>
                <li>
                  Create metadata JSON (title/creator/type/price/supply + CID list).
                </li>
                <li>
                  Call a <b>DropFactory</b> contract to register the drop + pricing.
                </li>
                <li>
                  Enable checkout: <b>ETH</b> direct, or Stripe for card rails.
                </li>
                <li>
                  Phase 3: staking emissions + curated discovery incentives.
                </li>
              </ol>

              <div className="callout">
                You’re building a pipeline. Pipelines print money when they’re boring and reliable.
              </div>
            </div>
          </div>
        )}

        {phase === "discover" && (
          <div className="card">
            <div className="cardHeader">
              <div>
                <div className="cardTitle">Discover Drops</div>
                <div className="muted">Mock feed (local state). Next: search + filters + on-chain reads.</div>
              </div>
              <button className="btn btnGhost" onClick={() => setPhase("drop")}>
                New Drop
              </button>
            </div>

            <div className="table">
              <div className="tableHead">
                <div>Drop</div>
                <div>Creator</div>
                <div>Type</div>
                <div>Price</div>
                <div>Supply</div>
                <div>Date</div>
                <div />
              </div>

              {drops.map((d) => (
                <div className="tableRow" key={d.id}>
                  <div className="strong">{d.title}</div>
                  <div>{d.creator}</div>
                  <div><span className="badge">{d.kind}</span></div>
                  <div>{d.priceEth.toFixed(3)} ETH</div>
                  <div>{d.supply.toLocaleString()}</div>
                  <div className="muted">{d.createdAt}</div>
                  <div className="rowRight">
                    <button className="btnTiny">View</button>
                    <button className="btnTinyPrimary">Buy</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="divider" />
            <div className="muted">
              Next upgrade: replace local state with contract reads + IPFS metadata resolution.
            </div>
          </div>
        )}

        {phase === "stake" && (
          <div className="card">
            <div className="cardHeader">
              <div>
                <div className="cardTitle">Stake (Phase 3)</div>
                <div className="muted">This is the money loop. We’ll wire it after drops + discover are solid.</div>
              </div>
            </div>

            <div className="grid2">
              <div className="stakeCard">
                <div className="stakeTitle">Stake to Curate</div>
                <div className="muted">
                  Stake token to boost drops in discovery. Curators earn fees if their picks perform.
                </div>
                <div className="rowWrap">
                  <button className="btn btnPrimary" disabled>
                    Stake (Soon)
                  </button>
                  <button className="btn btnGhost" disabled>
                    Claim Rewards (Soon)
                  </button>
                </div>
              </div>

              <div className="stakeCard">
                <div className="stakeTitle">Stake to Access</div>
                <div className="muted">
                  Stake to unlock gated channels, early drops, higher download bandwidth, or VIP perks.
                </div>
                <div className="rowWrap">
                  <button className="btn btnPrimary" disabled>
                    Unlock Access (Soon)
                  </button>
                  <button className="btn btnGhost" disabled>
                    View Tiers (Soon)
                  </button>
                </div>
              </div>
            </div>

            <div className="callout">
              Opinion: staking only works if rewards come from real usage (fees), not fantasy emissions.
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
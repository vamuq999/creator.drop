type Drop = {
  id: string;
  title: string;
  creator: string;
  description: string;
  minStake: string;
  status: "Live" | "Upcoming";
};

const DROPS: Drop[] = [
  {
    id: "drop-001",
    title: "Neon Oracle — Vol.1",
    creator: "@creator_one",
    description:
      "Stake to unlock the drop page. Earn points. Early supporters get the cleanest perks.",
    minStake: "0.01 ETH",
    status: "Live",
  },
  {
    id: "drop-002",
    title: "Bass Ritual Pack",
    creator: "@creator_two",
    description:
      "A heavy-bass sound pack + visuals. Stake-to-unlock, with creator-first splits later.",
    minStake: "0.02 ETH",
    status: "Upcoming",
  },
];

function Pill({ text }: { text: string }) {
  return <span className="pill">{text}</span>;
}

export default function Page() {
  return (
    <div className="wrap">
      {/* HERO */}
      <section className="hero">
        <div className="heroLeft">
          <Pill text="Floor v0 • UI Shell" />
          <h1 className="h1">
            CreatorDrop
            <span className="h1Glow"> — a drop engine for digital ownership</span>
          </h1>
          <p className="lead">
            One button UX: <b>Stake Me</b> → unlock access → earn points → support creators with proof.
            No fluff. No fake promises. Just clean mechanics.
          </p>

          <div className="ctaRow">
            <button className="btn btnPrimary" type="button">
              Stake Me (demo)
            </button>
            <button className="btn btnGhost" type="button">
              Create a Drop (soon)
            </button>
          </div>

          <div className="statsRow">
            <div className="stat">
              <div className="statTop">Mode</div>
              <div className="statVal">ETH stake → access</div>
            </div>
            <div className="stat">
              <div className="statTop">Rewards</div>
              <div className="statVal">Points + perks</div>
            </div>
            <div className="stat">
              <div className="statTop">Trust</div>
              <div className="statVal">Onchain receipts</div>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="card cardBig">
            <div className="cardHeader">
              <div>
                <div className="cardTitle">Unlocked Preview</div>
                <div className="muted">What supporters see after staking</div>
              </div>
              <Pill text="Prototype" />
            </div>

            <div className="previewBox">
              <div className="previewLine" />
              <div className="previewLine short" />
              <div className="previewGrid">
                <div className="previewTile" />
                <div className="previewTile" />
                <div className="previewTile" />
                <div className="previewTile" />
              </div>
            </div>

            <div className="cardFooter">
              <div className="muted">Receipt: 0x… (placeholder)</div>
              <button className="btn btnGhost" type="button">
                View Drop Page
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DROPS */}
      <section id="drops" className="section">
        <div className="sectionHead">
          <h2 className="h2">Featured Drops</h2>
          <p className="muted">Two demo drops — replace with real data later.</p>
        </div>

        <div className="grid">
          {DROPS.map((d) => (
            <div key={d.id} className="card">
              <div className="cardHeader">
                <div>
                  <div className="cardTitle">{d.title}</div>
                  <div className="muted">{d.creator}</div>
                </div>
                <span className={`badge ${d.status === "Live" ? "live" : "upcoming"}`}>
                  {d.status}
                </span>
              </div>

              <p className="cardBody">{d.description}</p>

              <div className="cardMeta">
                <div className="metaItem">
                  <div className="metaLabel">Minimum stake</div>
                  <div className="metaVal">{d.minStake}</div>
                </div>
                <div className="metaItem">
                  <div className="metaLabel">Access</div>
                  <div className="metaVal">Gate unlock</div>
                </div>
              </div>

              <div className="cardFooter">
                <button className="btn btnPrimary" type="button">
                  Stake Me
                </button>
                <button className="btn btnGhost" type="button">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="section">
        <div className="sectionHead">
          <h2 className="h2">How it works</h2>
          <p className="muted">Simple enough to explain in one breath.</p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="stepNum">1</div>
            <div className="stepBody">
              <div className="stepTitle">Creator publishes a drop</div>
              <div className="muted">A page with a minimum stake requirement.</div>
            </div>
          </div>

          <div className="step">
            <div className="stepNum">2</div>
            <div className="stepBody">
              <div className="stepTitle">Fans stake to unlock</div>
              <div className="muted">Stake is proof-of-support and proof-of-access.</div>
            </div>
          </div>

          <div className="step">
            <div className="stepNum">3</div>
            <div className="stepBody">
              <div className="stepTitle">Points + perks</div>
              <div className="muted">No yield promises. Just utility you can verify.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="section">
        <div className="sectionHead">
          <h2 className="h2">Roadmap</h2>
          <p className="muted">Floor → walls → roof. No chaos.</p>
        </div>

        <div className="roadmap">
          <div className="road">
            <div className="roadTitle">v0 — Floor</div>
            <ul className="ul">
              <li>UI shell</li>
              <li>Drop cards</li>
              <li>Stake Me button placeholder</li>
            </ul>
          </div>
          <div className="road">
            <div className="roadTitle">v1 — Real staking</div>
            <ul className="ul">
              <li>Stake contract</li>
              <li>Unlock check</li>
              <li>Receipt + points</li>
            </ul>
          </div>
          <div className="road">
            <div className="roadTitle">v2 — Creator tools</div>
            <ul className="ul">
              <li>Create drop dashboard</li>
              <li>Creator splits</li>
              <li>Provable draw module (optional)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
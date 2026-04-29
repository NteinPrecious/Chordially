// CHORD-123: Profile share links and metadata cards – SEO/social previews for artist URLs
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "../../../components/layout/shell";
import { Card } from "../../../components/ui/card";
import { listDiscoverySessions } from "../../../lib/discovery";

type Props = { params: { slug: string } };

function findArtistSession(slug: string) {
  return listDiscoverySessions({ status: "live", limit: 100 }).items
    .concat(listDiscoverySessions({ status: "upcoming", limit: 100 }).items)
    .find((item) => item.slug === slug);
}

/** CHORD-123: Generate Open Graph + Twitter Card metadata for the artist profile URL. */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const session = findArtistSession(params.slug);
  if (!session) {
    return { title: "Artist not found – Chordially" };
  }

  const title = `${session.artistName} on Chordially`;
  const description = session.isLive
    ? `${session.artistName} is live now in ${session.city}. Tip them with Stellar.`
    : `${session.artistName} has an upcoming set in ${session.city}. Follow on Chordially.`;
  const url = `https://chordially.app/artists/${params.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Chordially",
      type: "profile",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function ArtistDetailPage({ params }: Props) {
  const session = findArtistSession(params.slug);

  if (!session) {
    notFound();
  }

  const profileUrl = `https://chordially.app/artists/${params.slug}`;

  return (
    <Shell
      title={session.artistName}
      subtitle="A lightweight destination page that discovery cards can safely link to today."
    >
      <Card title={session.title}>
        <div>
          <span className="chip">{session.city}</span>
          {session.genres.map((genre) => (
            <span className="chip" key={genre}>{genre}</span>
          ))}
        </div>
        <p className="muted">
          {session.isLive ? "This artist is live now." : "This artist has an upcoming set."}
        </p>

        {/* CHORD-123: Share link section */}
        <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid #1c1c26" }}>
          <p style={{ fontSize: 13, color: "#a0a0b0", marginBottom: "0.5rem" }}>Share this profile</p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out ${session.artistName} on Chordially`)}&url=${encodeURIComponent(profileUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary"
              style={{ fontSize: 13 }}
              aria-label={`Share ${session.artistName} on X / Twitter`}
            >
              Share on X
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary"
              style={{ fontSize: 13 }}
              aria-label={`Share ${session.artistName} on Facebook`}
            >
              Share on Facebook
            </a>
            <button
              className="button button--secondary"
              style={{ fontSize: 13 }}
              onClick={undefined}
              aria-label="Copy profile link"
              data-copy-url={profileUrl}
            >
              Copy link
            </button>
          </div>
        </div>
      </Card>
    </Shell>
  );
}

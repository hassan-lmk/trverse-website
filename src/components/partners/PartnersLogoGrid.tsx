import { partnerLogos } from "@/data/partners";

type Props = {
  variant?: "light" | "muted";
};

const PartnersLogoGrid = ({ variant = "light" }: Props) => {
  const isMuted = variant === "muted";

  return (
    <div className="partners-logo-grid" role="list" aria-label="TRVERSE technology and domain partners">
      {partnerLogos.map((partner) => (
        <div
          key={partner.name}
          role="listitem"
          className="partners-logo-grid-item"
          style={{
            background: isMuted ? "#fff" : "#f7f9fc",
            border: "1px solid rgba(19, 79, 137, 0.08)",
            borderRadius: 16,
            padding: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 110,
            transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            style={{ maxWidth: "100%", maxHeight: 52, objectFit: "contain" }}
            loading="lazy"
          />
        </div>
      ))}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .partners-logo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 20px;
        }
        .partners-logo-grid-item:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 130, 93, 0.3) !important;
          box-shadow: 0 14px 32px rgba(10, 30, 61, 0.08);
        }
      `,
        }}
      />
    </div>
  );
};

export default PartnersLogoGrid;

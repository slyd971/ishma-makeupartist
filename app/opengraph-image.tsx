import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ishma Make Up Artist";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ishma-makeupartist.vercel.app";
const heroImageUrl = `${siteUrl}/ishma/hero-ishma.jpeg`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #fbf4ee 0%, #f2e5d8 42%, #e9d7ca 100%)",
          color: "#241a17"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 38%), radial-gradient(circle at bottom right, rgba(177,120,88,0.18) 0%, rgba(177,120,88,0) 36%)"
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -80,
            top: -100,
            width: 420,
            height: 420,
            borderRadius: "9999px",
            background: "rgba(138, 94, 67, 0.12)",
            filter: "blur(20px)"
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            position: "relative",
            padding: "36px"
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              borderRadius: 34,
              overflow: "hidden",
              border: "1px solid rgba(36,26,23,0.08)",
              background: "rgba(255,255,255,0.36)",
              boxShadow: "0 24px 80px rgba(36,26,23,0.12)"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "58%",
                padding: "44px 44px 38px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(248,239,231,0.86) 100%)"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 22,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "rgba(36,26,23,0.62)"
                  }}
                >
                  Ishma Make Up Artist
                </div>
                <div
                  style={{
                    display: "flex",
                    border: "1px solid rgba(36,26,23,0.14)",
                    borderRadius: 9999,
                    padding: "12px 18px",
                    fontSize: 18,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(36,26,23,0.72)",
                    background: "rgba(255,255,255,0.42)"
                  }}
                >
                  Bridal • Glam • Natural Glow
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  maxWidth: 520
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 88,
                    lineHeight: 0.94,
                    letterSpacing: "-0.05em",
                    fontWeight: 600
                  }}
                >
                  Ishma
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 32,
                    lineHeight: 1.2,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(36,26,23,0.62)"
                  }}
                >
                  Hair & Makeup Artist
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 30,
                    lineHeight: 1.35,
                    color: "rgba(36,26,23,0.82)"
                  }}
                >
                  Mise en beauté lumineuse, douce et sur mesure pour mariées,
                  événements et shootings.
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap"
                }}
              >
                {["Neuilly-sur-Marne", "Devis sous 24 à 48h", "Disponible par e-mail"].map(
                  (item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        borderRadius: 9999,
                        border: "1px solid rgba(36,26,23,0.12)",
                        background: "rgba(255,255,255,0.5)",
                        padding: "12px 18px",
                        fontSize: 20,
                        color: "rgba(36,26,23,0.7)"
                      }}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                width: "42%",
                position: "relative",
                background: "#d8c3b2"
              }}
            >
              <img
                src={heroImageUrl}
                alt="Portrait hero d’Ishma"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.18) 100%)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}

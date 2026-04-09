import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ishma Make Up Artist";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

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
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "56px 64px",
            position: "relative"
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
              gap: 20,
              maxWidth: 860
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 92,
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
                fontSize: 34,
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
                fontSize: 32,
                lineHeight: 1.35,
                maxWidth: 920,
                color: "rgba(36,26,23,0.82)"
              }}
            >
              Mise en beaute lumineuse, douce et sur mesure pour mariees,
              evenements et shootings.
            </div>
          </div>

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
                gap: 14
              }}
            >
              {["Neuilly-sur-Marne", "Devis sous 24 a 48h", "Disponible par email"].map(
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

            <div
              style={{
                display: "flex",
                width: 150,
                height: 150,
                borderRadius: 28,
                border: "1px solid rgba(36,26,23,0.08)",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.72) 0%, rgba(234,220,207,0.95) 100%)",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 18px 60px rgba(36,26,23,0.1)",
                fontSize: 34,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#241a17"
              }}
            >
              IMA
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}

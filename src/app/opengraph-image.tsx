import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vimal Thapliyal — Frontend Technical Lead";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3F0E8",
          color: "#11161D",
          padding: "64px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#007F73",
              fontFamily: "ui-monospace, monospace",
            }}
          >
            VT · Portfolio
          </div>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            Vimal Thapliyal
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.3,
              color: "#59616A",
              maxWidth: 860,
            }}
          >
            Senior Frontend Developer · Technical Lead
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#59616A",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <span>Enterprise UI · React · TypeScript</span>
          <span>Noida → UAE / Remote</span>
        </div>
      </div>
    ),
    size,
  );
}

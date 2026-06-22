import { ImageResponse } from "next/og";

export const alt =
  "Layan Traditional Thai Massage — Frankston, Melbourne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social-share card (Facebook, iMessage, search previews).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#7d1414",
          color: "#fdf7ef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 6, opacity: 0.85 }}>
          FRANKSTON · MELBOURNE
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          Layan Traditional Thai Massage
        </div>
        <div style={{ fontSize: 36, marginTop: 32, opacity: 0.9 }}>
          Unwind, restore, breathe again — book online or call 0451 250 064
        </div>
      </div>
    ),
    { ...size },
  );
}

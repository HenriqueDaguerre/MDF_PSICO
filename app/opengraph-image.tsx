import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #fbf7f0 0%, #f3ece0 55%, #efe6d6 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            left: "50%",
            transform: "translateX(-50%)",
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(198,166,100,0.35) 0%, rgba(198,166,100,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "#5c6446",
            marginBottom: 28,
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 68,
            fontWeight: 600,
            color: "#2b2620",
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          Mônica Daguerre
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 28,
            color: "#55503f",
            display: "flex",
          }}
        >
          Psicoterapia com ética, ciência e acolhimento
        </div>
      </div>
    ),
    { ...size }
  );
}

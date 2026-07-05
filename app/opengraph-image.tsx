import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = readFileSync(
    join(process.cwd(), "public/brand/simbolo.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;
  const cailyneData = readFileSync(join(process.cwd(), "fonts/Cailyne.ttf"));

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
            "linear-gradient(135deg, #fffcec 0%, #f7f0da 55%, #efe4c9 100%)",
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
              "radial-gradient(circle, rgba(201,161,94,0.35) 0%, rgba(201,161,94,0) 70%)",
            display: "flex",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          width={110}
          height={110}
          style={{ marginBottom: 24 }}
        />
        <div
          style={{
            fontSize: 68,
            fontFamily: "Cailyne",
            color: "#3e173d",
            display: "flex",
          }}
        >
          Mônica Daguerre
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 28,
            color: "#6b4f68",
            display: "flex",
          }}
        >
          Psicoterapia com ética, ciência e acolhimento
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cailyne", data: cailyneData, style: "normal", weight: 400 },
      ],
    }
  );
}

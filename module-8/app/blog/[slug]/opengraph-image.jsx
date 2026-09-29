import { ImageResponse } from "next/og"

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }) {
    const { slug } = await params;

    return new ImageResponse((
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "#fff",
                backgroundColor: "#0f172a"
            }}
        >
            <div style={{ fontSize: "40", opacity: 0.8 }}>
                <h1>Suraj from this side</h1>
            </div>
        </div>
    ))
}
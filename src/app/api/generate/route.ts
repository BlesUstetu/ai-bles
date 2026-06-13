import { NextResponse } from "next/server";

import {
  saveHistory
} from "@/store/historyStore";

export async function POST(
  req: Request
) {
  try {
    const {
      prompt
    } = await req.json();

    const script = `
Narasi Video

Topik:
${prompt}

Pembukaan:
Selamat datang.

Hari ini kita akan membahas:

${prompt}

Terima kasih telah menonton.
`;

    const videoUrl =
      "https://www.w3schools.com/html/mov_bbb.mp4";

    return NextResponse.json({
      success: true,
      script,
      videoUrl
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Generate gagal"
      },
      {
        status: 500
      }
    );
  }
}

import { NextResponse } from "next/server";
import { MOCK_ADS } from "@/data/ads";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get("q") || "").toLowerCase().trim();
    const platform = searchParams.get("platform") || "all";
    const format = searchParams.get("format") || "all";
    const country = searchParams.get("country") || "all";
    const language = searchParams.get("language") || "all";
    const sortBy = searchParams.get("sortBy") || "score";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "12", 10);

    let filtered = [...MOCK_ADS];

    if (q) {
      filtered = filtered.filter(
        (ad) =>
          ad.hook.toLowerCase().includes(q) ||
          ad.advertiser.toLowerCase().includes(q) ||
          ad.category.toLowerCase().includes(q) ||
          ad.cta.toLowerCase().includes(q)
      );
    }

    if (platform !== "all") {
      filtered = filtered.filter(
        (ad) => ad.platform.toLowerCase() === platform.toLowerCase()
      );
    }

    if (format !== "all") {
      filtered = filtered.filter(
        (ad) => ad.format.toLowerCase() === format.toLowerCase()
      );
    }

    if (country !== "all") {
      filtered = filtered.filter(
        (ad) => ad.country.code.toLowerCase() === country.toLowerCase()
      );
    }

    if (language !== "all") {
      filtered = filtered.filter(
        (ad) => ad.language.toLowerCase() === language.toLowerCase()
      );
    }

    // Sort
    if (sortBy === "daysActive") {
      filtered.sort((a, b) => b.daysActive - a.daysActive);
    } else if (sortBy === "likes") {
      filtered.sort((a, b) => b.likes - a.likes);
    } else {
      filtered.sort((a, b) => b.score - a.score);
    }

    const total = filtered.length;
    const startIndex = (page - 1) * limit;
    const paginated = filtered.slice(startIndex, startIndex + limit);

    return NextResponse.json({
      success: true,
      data: paginated,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao buscar anuncios.", error: error.message },
      { status: 500 }
    );
  }
}

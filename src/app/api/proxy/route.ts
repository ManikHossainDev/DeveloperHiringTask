import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const endpoint = searchParams.get("endpoint");

  if (!endpoint) {
    return NextResponse.json({ error: "Endpoint parameter is required" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://fakeapi.platzi.com${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`);
      console.error(`Response body: ${responseText.substring(0, 500)}`);
      return NextResponse.json(
        { error: `Failed to fetch: ${response.statusText}`, details: responseText.substring(0, 200) },
        { status: response.status }
      );
    }

    try {
      const data = JSON.parse(responseText);
      return NextResponse.json(data);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      console.error("Response text:", responseText.substring(0, 500));
      return NextResponse.json(
        { error: "Invalid JSON response from API", response: responseText.substring(0, 200) },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

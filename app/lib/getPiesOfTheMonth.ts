export async function getPiesOfTheMonth(category?: string) {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/pies-of-the-month`);
    if (category) {
      url.searchParams.set("category", category);
    }

    // Enable revalidation for this fetch
    const res = await fetch(url, {
      next: { revalidate: 120 },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching pies:", error);
    // Return empty array instead of throwing to prevent page crash
    return [];
  }
}

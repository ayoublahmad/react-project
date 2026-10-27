export default async function handler(req, res) {
  const { query } = req.query;

  const endpoint = query
    ? "https://api.themoviedb.org/3/search/movie"
    : "https://api.themoviedb.org/3/movie/popular";

  const url = new URL(endpoint);

  if (query) {
    url.searchParams.set("query", query);
  }

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
        accept: "application/json",
      },
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Movie API request failed" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Movie API request failed:", error);
    return res.status(500).json({ error: "Unable to contact movie API" });
  }
}
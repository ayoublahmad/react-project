const API_URL = "/api/movies";

const fetchMovies = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Movie API request failed");
  }

  const data = await response.json();
  return data.results ?? [];
};

export const getPopularMovies = async () => {
  return fetchMovies(API_URL);
};

export const searchMovies = async (query) => {
  return fetchMovies(`${API_URL}?query=${encodeURIComponent(query)}`);
};

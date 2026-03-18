export async function getTrendingRepos() {
  try {
    const res = await fetch('https://api.github.com/search/repositories?q=stars:>1000&sort=stars&order=desc&per_page=6', { next: { revalidate: 3600 } });
    const data = await res.json();
    return data.items || [];
  } catch (e) {
    return [];
  }
}
import { useEffect, useState } from 'react';

function News() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("india");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  function fetchdata(query) {
    setLoading(true);
    setError("");
    fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setNews(data.articles || []);
        setLoading(false);
      })
      .catch(() => {
        setError("FAILED TO LOAD NEWS");
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchdata(search);
  }, [search]);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = news.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(news.length / itemsPerPage);

  return (
    <div>
      <h2>Latest News</h2>

      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // reset page on search
        }}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <ul>
            {currentNews.map((article, index) => (
              <li key={article.url || index}>
                <img
                  src={article.urlToImage || "https://via.placeholder.com/200"}
                  alt="news"
                  width="200"
                />
                <a href={article.url} target="_blank">
                  {article.title}
                </a>
                <p>{article.description}</p>
                <hr />
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <button
            onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <span> Page {currentPage} of {totalPages} </span>

          <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default News;
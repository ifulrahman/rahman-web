import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAllDoa, searchDoa, getRandomDoa } from "../lib/api";

export default function DoaList() {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [randomLoading, setRandomLoading] = useState(false);

  // pagination state
  const [page, setPage] = useState(1);
  const perPage = 9; // kartu kecil: 3 x 3

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try { setItems(await getAllDoa()); }
      catch (e) { setErr(e.message); }
      finally { setLoading(false); }
    })();
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true); setErr("");
    try {
      const data = q.trim() ? await searchDoa(q) : await getAllDoa();
      setItems(data);
      setPage(1); // reset ke halaman 1 setiap search
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleRandom() {
    try {
      setRandomLoading(true); setErr("");
      const doa = await getRandomDoa();
      navigate(`/doa/${doa.id}`);
    } catch (e) {
      setErr(e.message);
    } finally {
      setRandomLoading(false);
    }
  }

  // helpers
  const clamp = (s = "", n = 80) =>
    s.replace(/\s+/g, " ").trim().slice(0, n) + (s.length > n ? "…" : "");

  const totalPages = Math.ceil(items.length / perPage) || 1;
  const startIdx = (page - 1) * perPage;
  const currentItems = items.slice(startIdx, startIdx + perPage);

  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      {/* Back to Home */}
      <div className="mb-4">
        <NavLink
          to="/"
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm shadow ring-1 ring-gray-200 hover:bg-gray-50 transition"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            className="text-gray-600"
          >
            <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
          Kembali
        </NavLink>
      </div>

      {/* Controls */}
        <div className="flex flex-col md:flex-row gap-2 mb-6">
          <form onSubmit={handleSearch} className="flex-1 flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari doa… (contoh: tidur, makan)"
              className="w-full rounded-full bg-gray-100 px-4 py-2.5 text-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              className="cursor-pointer rounded-full px-4 py-2.5 text-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Search
            </button>
          </form>

          <button
            onClick={handleRandom}
            disabled={randomLoading}
            className="cursor-pointer rounded-full px-5 py-2.5 text-sm bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-60"
          >
            {randomLoading ? "Mengundi…" : "Random Doa"}
          </button>
        </div>

      {err && <p className="text-red-600 mb-4">{err}</p>}

      {loading ? (
        <p>Loading…</p>
      ) : (
        <>
          {/* Grid minimalis */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {currentItems.map((d) => {
              const title = d.doa || d.title || `Doa ${d.id}`;
              const snippet = clamp(d.ayat || d.latin || d.artinya || "", 70);
              return (
                <li key={d.id}>
                  <NavLink
                    to={`/doa/${d.id}`}
                    className="no-underline flex flex-col items-center justify-center text-center h-28 rounded-2xl ring-1 ring-gray-200 bg-white p-4 shadow-sm hover:bg-emerald-50 hover:ring-1 hover:ring-emerald-500 transition"
                  >
                    <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
                      {title}
                    </h3>
                    {/* sepotong ayat (1–2 baris) */}
                    {snippet && (
                      <p className="mt-1 text-sm text-gray-500 line-clamp-2 arabic-text">
                        {snippet}
                      </p>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Pagination arrows */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button 
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="cursor-pointer grid h-9 w-9 place-items-center rounded-full ring-1 ring-gray-300 hover:bg-gray-50 disabled:opacity-40"
              aria-label="Sebelumnya"
              title="Sebelumnya"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="currentColor" d="M15.5 5.5L9 12l6.5 6.5L14 20l-8-8l8-8z" />
              </svg>
            </button>

            <span className="px-3 text-sm text-gray-600">
              {page} / {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="cursor-pointer grid h-9 w-9 place-items-center rounded-full ring-1 ring-gray-300 hover:bg-gray-50 disabled:opacity-40"
              aria-label="Berikutnya"
              title="Berikutnya"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9 5.5L15.5 12L9 18.5L10 20l8-8l-8-8z" />
              </svg>
            </button>
          </div>
        </>
      )}
    </section>
  );
}

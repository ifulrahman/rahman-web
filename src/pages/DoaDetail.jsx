import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getDoaById } from "../lib/api";

export default function DoaDetail() {
  const { id } = useParams();
  const [doa, setDoa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setDoa(await getDoaById(id));
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  // ====== Loading state ======
  if (loading) {
    return (
      <section className="relative">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="h-9 w-36 rounded-full bg-emerald-50 animate-pulse mb-6" />
          <div className="h-10 w-4/5 rounded-lg bg-emerald-50 animate-pulse" />
          <div className="mt-6 h-32 w-full rounded-xl bg-emerald-50 animate-pulse" />
        </div>
      </section>
    );
  }
  if (err) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-14">
        <p className="rounded-xl bg-red-50 text-red-700 px-4 py-3 ring-1 ring-red-100">
          {err}
        </p>
      </section>
    );
  }
  if (!doa) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-14">
        <p className="rounded-xl bg-yellow-50 text-yellow-800 px-4 py-3 ring-1 ring-yellow-100">
          Data tidak ditemukan.
        </p>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-emerald-50/70 to-white">
      <div className="mx-auto max-w-4xl px-6 py-10 md:py-14">
        {/* Back */}
        <div className="mb-6">
          <NavLink
            to="/doa"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14 7l-5 5l5 5V7z" />
            </svg>
            Kembali
          </NavLink>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white/80 backdrop-blur shadow-xl ring-1 ring-emerald-100 p-6 md:p-10">
          {/* Badge */}
          <div className="mb-3">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[12px] font-medium text-emerald-700">
              Doa Harian
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            {doa.doa || doa.title || `Doa ${id}`}
          </h1>

          {/* Ornament divider */}
          <div className="my-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-emerald-100" />
            <svg width="28" height="28" viewBox="0 0 24 24" className="text-emerald-500">
              <path
                fill="currentColor"
                d="M12 3c2.8 3.7 5.6 3.7 8.4 0c-2.8 7.4-2.8 10.6 0 18c-2.8-3.7-5.6-3.7-8.4 0c2.8-7.4 2.8-10.6 0-18ZM3.6 6.6c2.1 2.8 4.2 2.8 6.3 0c-2.1 5-2.1 7.2 0 12.7c-2.1-2.8-4.2-2.8-6.3 0c2.1-5.2 2.1-7.4 0-12.7Z"
              />
            </svg>
            <span className="h-px w-12 bg-emerald-100" />
          </div>

          {/* Arabic */}
          {doa.ayat && (
            <p
              dir="rtl"
              className="text-2xl md:text-4xl leading-[1.9] text-gray-900 text-right font-[500]"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }} // gunakan font arabic bila sudah di-load
            >
              {doa.ayat}
            </p>
          )}

          {/* Thin divider */}
          <div className="my-8 h-px bg-emerald-100" />

          {/* Latin */}
          {doa.latin && (
            <div className="mb-8">
              <h2 className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Latin
              </h2>
              <p className="mt-3 text-base md:text-lg text-gray-800 leading-8">
                {doa.latin}
              </p>
            </div>
          )}

          {/* Terjemahan */}
          {(doa.artinya || doa.translation) && (
            <div className="mb-2">
              <h2 className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Terjemahan
              </h2>
              <p className="mt-3 text-base md:text-lg text-gray-800 leading-8">
                {doa.artinya || doa.translation}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

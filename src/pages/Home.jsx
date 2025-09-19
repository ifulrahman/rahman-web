import { Link } from "react-router-dom";
import prayFoto from "../assets/aesthetic-foto-pray.png";
import parallax from "../assets/parallax.png"; // ganti sesuai nama/ekstensi file Anda
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="space-y-0">
      {/* ========== HERO FULL-BLEED ========== */}
      <section 
        className="relative bg-gradient-to-b from-emerald-50 to-white text-gray-900"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <div
          data-aos="fade-left"
          className="mx-auto max-w-[50rem] px-6 py-16 md:py-20 text-center h-full flex flex-col items-center justify-center"
        >
          {/* Badge kecil di atas */}
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 backdrop-blur px-4 py-1.5 text-sm text-emerald-700 shadow-md">
            Daily Islamic Guidance
          </span>

          {/* Headline besar */}
          <h1 className="mt-6 text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Discover Daily Duas,<br className="hidden md:block" />
            embrace faith with ease
          </h1>

          {/* Subheadline */}
          <p className="mt-5 max-w-3xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Explore authentic daily supplications — a timeless collection to inspire your worship,
            elevate your spirit, and guide you towards peace and closeness to Allah ﷻ.
          </p>

          <div className="mt-10">
            <button
              type="button"
              onClick={scrollToAbout}
              aria-label="Scroll ke bagian berikutnya"
              className="group"
            >
              <span className="cursor-pointer inline-flex h-14 w-9 items-center justify-center rounded-full border border-gray-300/80 bg-white shadow-sm">
                <span className="mouse-wheel block h-3 w-1 rounded-full bg-gray-400" />
              </span>
            </button>
          </div>
        </div>

        {/* Social bar vertikal */}
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/ifulrahman"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full bg-white shadow ring-1 ring-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72c.5.1.68-.22.68-.48c0-.24-.01-.87-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37c-.45-1.17-1.1-1.48-1.1-1.48c-.9-.63.07-.62.07-.62c1 .07 1.53 1.05 1.53 1.05c.89 1.56 2.34 1.11 2.91.85c.09-.66.35-1.11.63-1.37c-2.22-.26-4.55-1.14-4.55-5.08c0-1.12.39-2.03 1.03-2.74c-.1-.26-.45-1.3.1-2.7c0 0 .84-.27 2.75 1.04c.8-.23 1.65-.34 2.5-.34s1.7.12 2.5.34c1.9-1.31 2.74-1.04 2.74-1.04c.55 1.4.2 2.44.1 2.7c.64.71 1.03 1.62 1.03 2.74c0 3.95-2.33 4.82-4.56 5.07c.36.31.68.92.68 1.85c0 1.33-.01 2.41-.01 2.74c0 .26.18.59.69.48A10.26 10.26 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-syaiful-rahman/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full bg-white shadow ring-1 ring-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17V10.67H5.67V17H8.34M7 9.5A1.5 1.5 0 1 0 7 6.5A1.5 1.5 0 0 0 7 9.5M18.34 17V13.5C18.34 11.5 17.5 10.34 15.67 10.34C14.59 10.34 13.84 10.92 13.56 11.5H13.5V10.67H10.84V17H13.5V13.84C13.5 13.09 13.67 12.5 14.5 12.5C15.31 12.5 15.5 13.16 15.5 13.84V17H18.34Z"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/iful_rahman/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full bg-white shadow ring-1 ring-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7 2H17A5 5 0 0 1 22 7V17A5 5 0 0 1 17 22H7A5 5 0 0 1 2 17V7A5 5 0 0 1 7 2M12 7A5 5 0 1 0 12 17A5 5 0 0 0 12 7M19 6.5A1.5 1.5 0 1 0 19 9.5A1.5 1.5 0 0 0 19 6.5Z"
              />
            </svg>
          </a>
        </div>

      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section
        data-aos="fade-up"
        id="about"
        className="relative bg-[#1f2d29] text-white"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f2d29] via-[#22362f] to-[#1f2d29] opacity-90" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          {/* Title */}
          <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-wide">
            Apa Itu <span className="text-emerald-400">RahmanWeb</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-emerald-500 shadow-md" />

          {/* Content */}
          <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
            {/* Gambar */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-emerald-900/30">
              <img
                src={prayFoto}
                alt="Muslimah berdoa"
                className="h-full w-full object-cover transform hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Deskripsi */}
            <div className="space-y-5 text-lg leading-relaxed text-gray-200">
              <p className="font-light">
                <span className="font-semibold text-emerald-400">RahmanWeb</span> adalah
                platform Islami yang menghadirkan{" "}
                <span className="font-semibold">kumpulan doa harian</span>. Semua konten dirangkum singkat, jelas, dan
                bersumber dari referensi terpercaya agar mudah dipahami oleh setiap muslim.
              </p>
              <p className="font-light">
                Tujuan kami adalah menjadi sahabat spiritual Anda — membantu memperkuat iman
                melalui panduan doa.
              </p>
              <p className="italic text-emerald-300">
                “Doa adalah senjata seorang mukmin, tiang agama, dan cahaya yang menerangi
                jalan hidup.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARALLAX ===== */}
      <section className="relative isolate" aria-label="Parallax banner">
        <div
          className="bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${parallax})` }}
        >
          {/* Overlay + konten */}
          <div className="min-h-[45vh] md:min-h-[60vh] w-full bg-black/40 flex items-center">
            <div className="mx-auto max-w-4xl px-6 py-16 text-center text-white">
              <h3 data-aos="fade-up"  className="text-xl md:text-2xl font-bold font-serif">
                “Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram.” (QS. Ar-Ra’d: 28)
              </h3>
              <div className="mt-6">
                <Link
                  to="/doa"
                  className="inline-flex rounded-full bg-emerald-600 px-6 py-2.5 font-medium text-white hover:bg-emerald-700 transition"
                >
                  Baca Doa Harian
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== /PARALLAX ===== */}

      {/* CSS kecil untuk animasi roda mouse */}
      <style>{`
        @keyframes wheel {
          0%   { transform: translateY(-2px); opacity: .9; }
          50%  { transform: translateY(4px); opacity: .5; }
          100% { transform: translateY(-2px); opacity: .9; }
        }
        .mouse-wheel { animation: wheel 1.6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

import logo from "../assets/logo_icon.png"; 
import googlePlay from "../assets/play-stores.png"; 
import appStore from "../assets/app-stores.png"; 

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Deskripsi + logo */}
          <div className="space-y-4">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <p className="text-gray-700">
              RahmanWeb adalah platform Islami yang menghadirkan kumpulan doa harian.
              Semua konten dirangkum singkat, jelas, dan bersumber dari referensi terpercaya agar mudah dipahami oleh setiap muslim.
            </p>

            {/* Download apps */}
            <div className="mt-6 flex items-center gap-4">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src={googlePlay} alt="Google Play" className="h-12 w-auto" />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src={appStore} alt="App Store" className="h-12 w-auto" />
              </a>
            </div>
          </div>

          {/* Kontak */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Email Redaksi:</h4>
            <a href="mailto:redaksi@rahmanweb.id" className="text-[#224F86] hover:underline">
              syaifulmuhammad02@gmail.com
            </a>

            <h4 className="mt-5 font-semibold text-gray-900">My Page:</h4>
            <a href="https://ifulrahman.github.io" target="_blank" className="text-[#224F86] hover:underline">
              ifulrahman.github.io
            </a>

            <div className="mt-4 flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/muhammad-syaiful-rahman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 ring-1 ring-gray-300 hover:bg-gray-50"
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
                className="rounded-full p-2 ring-1 ring-gray-300 hover:bg-gray-50"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7 2H17A5 5 0 0 1 22 7V17A5 5 0 0 1 17 22H7A5 5 0 0 1 2 17V7A5 5 0 0 1 7 2M12 7A5 5 0 1 0 12 17A5 5 0 0 0 12 7M19 6.5A1.5 1.5 0 1 0 19 9.5A1.5 1.5 0 0 0 19 6.5Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer nav */}
          <nav className="text-sm self-start">
            <ul className="space-y-2">
              <li><a href="#tentang" className="hover:underline text-gray-700">Tentang Kami</a></li>
              <li><a href="#copyright" className="hover:underline text-gray-700">Copyright</a></li>
              <li><a href="#privasi" className="hover:underline text-gray-700">Privasi</a></li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t pt-6 text-xs text-gray-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} — RahmanWeb. All rights reserved.</p>
          <p>Part of Dakwah</p>
        </div>
      </div>
    </footer>
  );
}

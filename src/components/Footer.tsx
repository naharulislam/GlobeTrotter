import {
  FaGlobeAsia,
  FaHeart,
  FaGithub,
  FaArrowUp,
  FaCompass,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#top" className="mb-4 inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-lg">
                <FaGlobeAsia className="text-2xl" />
              </span>
              <span className="text-2xl font-extrabold text-white">
                Country<span className="text-cyan-400">Tracker</span>
              </span>
            </a>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Explore the world, discover amazing countries, and keep track
              of the places you have visited. Your next adventure starts here!
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300">
              <FaCompass />
              Your journey around the world
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#top" className="transition hover:text-cyan-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#countries" className="transition hover:text-cyan-400">
                  Explore Countries
                </a>
              </li>
              <li>
                <a href="#summary" className="transition hover:text-cyan-400">
                  My Travel Journey
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold text-white">Keep Exploring</h3>
            <p className="mb-5 text-sm leading-7 text-gray-400">
              Discover new cultures, learn about the world, and plan your
              next destination.
            </p>
            <a
              href="#countries"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Explore the World
              <FaGlobeAsia />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500">
            © {currentYear} CountryTracker. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-gray-400">
            Made with <FaHeart className="text-rose-500" /> for world explorers
          </p>

          <a
            href="https://github.com/touhidcode"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg transition hover:border-cyan-400/40 hover:text-cyan-400"
          >
            <FaGithub />
          </a>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs text-gray-500 transition hover:text-cyan-400"
          >
            Back to top
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
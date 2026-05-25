import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Link } from "react-router";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(252,163,17,0.15)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "#FCA311" }}
          >
            <Zap size={16} color="#000" fill="#000" />
          </div>
          <span className="font-semibold tracking-tight" style={{ color: "#FFFFFF" }}>
            CryptoAI
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm transition-colors duration-200"
              style={{ color: "#E5E5E5" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FCA311")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#E5E5E5")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm transition-colors duration-200"
            style={{ color: "#E5E5E5" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FCA311")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#E5E5E5")}
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{ background: "#FCA311", color: "#000" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            Start Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ color: "#FCA311" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(0,0,0,0.97)" }}
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm py-2 border-b"
              style={{ color: "#E5E5E5", borderColor: "rgba(255,255,255,0.08)" }}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <Link
            to="/login"
            className="text-sm py-2 border-b"
            style={{ color: "#E5E5E5", borderColor: "rgba(255,255,255,0.08)" }}
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="mt-2 px-5 py-2 rounded-lg text-sm font-medium text-center"
            style={{ background: "#FCA311", color: "#000" }}
            onClick={() => setIsOpen(false)}
          >
            Start Free
          </Link>
        </div>
      )}
    </nav>
  );
}

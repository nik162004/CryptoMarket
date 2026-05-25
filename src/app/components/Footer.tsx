import { Zap } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Weekly Reports", "Mobile Access", "API Access"],
  Company: ["About", "Contact", "Privacy Policy", "Terms", "Careers"],
  Resources: ["Crypto Basics", "Market Guides", "AI Analysis Blog", "Help Center", "Changelog"],
};

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#000000", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Animated market lines background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points="0,150 120,100 240,130 360,80 480,110 600,60 720,90 840,40 960,70 1080,30 1200,55 1320,20 1440,45"
            fill="none"
            stroke="#FCA311"
            strokeWidth="1.5"
          />
          <polyline
            points="0,180 120,150 240,165 360,130 480,155 600,110 720,135 840,90 960,120 1080,75 1200,100 1320,60 1440,85"
            fill="none"
            stroke="#14213D"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "#FCA311" }}
              >
                <Zap size={16} color="#000" fill="#000" />
              </div>
              <span className="font-semibold" style={{ color: "#FFFFFF" }}>
                CryptoAI
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(229,229,229,0.6)" }}>
              AI-powered weekly crypto analysis built for busy professionals. Spend less time
              researching and more time making confident decisions.
            </p>
            <div className="flex gap-3">
              {["𝕏", "in", "📧"].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all duration-200"
                  style={{
                    background: "rgba(20,33,61,0.6)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#E5E5E5",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(252,163,17,0.4)";
                    (e.currentTarget as HTMLElement).style.color = "#FCA311";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#E5E5E5";
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p
                className="text-xs font-semibold mb-4 uppercase tracking-widest"
                style={{ color: "#FCA311" }}
              >
                {category}
              </p>
              <div className="space-y-3">
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-sm transition-colors duration-200"
                    style={{ color: "rgba(229,229,229,0.6)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "rgba(229,229,229,0.6)")
                    }
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(229,229,229,0.35)" }}>
            © 2026 CryptoAI. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(229,229,229,0.35)" }}>
            Not financial advice. For informational purposes only.
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#22c55e" }}
            />
            <p className="text-xs" style={{ color: "rgba(229,229,229,0.35)" }}>
              All systems operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { X, Check, ArrowRight } from "lucide-react";

const traditional = [
  "Expensive monthly communities ($200–$500/mo)",
  "Too much trading jargon",
  "Requires daily market tracking",
  "Often emotionally driven",
  "Hours of content to review",
  "Generic advice not personalized",
];

const platform = [
  "Simple weekly guidance (affordable)",
  "Plain language explanations",
  "Built for unpredictable schedules",
  "Data-driven, not emotional",
  "Under 15 minutes per week",
  "Personalized watchlists and alerts",
];

export function ComparisonSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#14213D" }}
    >
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ background: "#FCA311" }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
            style={{
              background: "rgba(252,163,17,0.12)",
              border: "1px solid rgba(252,163,17,0.3)",
              color: "#FCA311",
            }}
          >
            Why Choose CryptoAI
          </div>
          <h2
            className="mb-4"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
            }}
          >
            Why Professionals{" "}
            <span style={{ color: "#FCA311" }}>Prefer This Approach</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Traditional */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(239,68,68,0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(239,68,68,0.15)" }}
              >
                <X size={18} color="#ef4444" />
              </div>
              <div>
                <p className="font-semibold" style={{ color: "#FFFFFF" }}>
                  Traditional Crypto Coaching
                </p>
                <p className="text-xs" style={{ color: "rgba(229,229,229,0.5)" }}>
                  The old way
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {traditional.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <X size={14} className="flex-shrink-0" style={{ color: "#ef4444" }} />
                  <p className="text-sm" style={{ color: "#E5E5E5" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CryptoAI */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(252,163,17,0.3)",
              boxShadow: "0 0 40px rgba(252,163,17,0.06)",
            }}
          >
            <div
              className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: "#FCA311", color: "#000" }}
            >
              Recommended
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(252,163,17,0.15)" }}
              >
                <Check size={18} color="#FCA311" />
              </div>
              <div>
                <p className="font-semibold" style={{ color: "#FFFFFF" }}>
                  CryptoAI Platform
                </p>
                <p className="text-xs" style={{ color: "rgba(229,229,229,0.5)" }}>
                  The smarter way
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {platform.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check size={14} className="flex-shrink-0" style={{ color: "#FCA311" }} />
                  <p className="text-sm" style={{ color: "#E5E5E5" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-[1.03]"
            style={{ background: "#FCA311", color: "#000" }}
          >
            Experience Simpler Crypto Analysis
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

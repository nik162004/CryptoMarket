import { XCircle, ArrowRight } from "lucide-react";

const problems = [
  "You miss important market moves because work gets busy",
  "You don't know which sources to trust",
  "You feel overwhelmed by technical analysis",
  "You open YouTube and leave more confused than before",
  "Coaching communities charge hundreds monthly without simplifying anything",
];

export function ProblemSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ background: "#14213D" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative">
            {/* Chaotic side */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "rgba(20,33,61,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-xs font-semibold mb-4" style={{ color: "rgba(229,229,229,0.5)" }}>
                WITHOUT CRYPTOAI
              </p>
              <div className="space-y-3">
                {[
                  { label: "Twitter/X threads", value: "47 new threads today" },
                  { label: "YouTube tutorials", value: "12hrs of content" },
                  { label: "Discord groups", value: "$299/mo coaching" },
                  { label: "Chart analysis", value: "Confusing patterns" },
                  { label: "Market news", value: "Conflicting signals" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-4 py-3 rounded-lg"
                    style={{
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.15)",
                    }}
                  >
                    <span className="text-xs" style={{ color: "#E5E5E5" }}>
                      {item.label}
                    </span>
                    <span className="text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="absolute bottom-4 right-4 px-3 py-2 rounded-lg text-xs"
                style={{
                  background: "rgba(239,68,68,0.15)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  color: "#ef4444",
                }}
              >
                😰 Overwhelmed
              </div>
            </div>

            {/* Arrow */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 hidden lg:flex"
              style={{ background: "#FCA311", boxShadow: "0 0 20px rgba(252,163,17,0.4)" }}
            >
              <ArrowRight size={16} color="#000" />
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.25)",
                color: "#ef4444",
              }}
            >
              The Problem
            </div>

            <h2
              className="mb-6"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Crypto Feels Like a{" "}
              <span style={{ color: "#FCA311" }}>Full Time Job</span>
            </h2>

            <p className="mb-8 leading-relaxed" style={{ color: "#E5E5E5" }}>
              Most professionals want to grow their money through crypto but face the same
              problems. The result is hesitation, emotional decisions, and missed opportunities.
            </p>

            <div className="space-y-3 mb-10">
              {problems.map((problem) => (
                <div key={problem} className="flex items-start gap-3">
                  <XCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#ef4444" }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: "#E5E5E5" }}>
                    {problem}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.03]"
              style={{ background: "#FCA311", color: "#000" }}
            >
              See How AI Simplifies Crypto
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

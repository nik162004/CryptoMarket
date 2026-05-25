import { CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "Track market trends automatically",
  "Monitor major coins and narratives",
  "Understand risk levels quickly",
  "Get simplified explanations in plain language",
  "Receive actionable insights for busy schedules",
];

export function SolutionSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      id="how-it-works"
      style={{ background: "#14213D" }}
    >
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[130px] opacity-15 pointer-events-none"
        style={{ background: "#FCA311" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{
                background: "rgba(252,163,17,0.12)",
                border: "1px solid rgba(252,163,17,0.3)",
                color: "#FCA311",
              }}
            >
              The Solution
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
              Your Weekly Crypto Analyst{" "}
              <span style={{ color: "#FCA311" }}>Powered by AI</span>
            </h2>

            <p className="mb-8 leading-relaxed" style={{ color: "#E5E5E5" }}>
              Instead of spending hours researching the market, get a complete AI-assisted
              breakdown every week in minutes. The platform turns complex market noise into
              clear weekly decision support.
            </p>

            <div className="space-y-3 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle size={18} className="flex-shrink-0" style={{ color: "#FCA311" }} />
                  <p className="text-sm" style={{ color: "#E5E5E5" }}>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.03]"
              style={{ background: "#FCA311", color: "#000" }}
            >
              Get Weekly AI Insights
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right: Dashboard preview */}
          <div className="space-y-4">
            {/* Main dashboard card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(252,163,17,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>
                  AI Market Summary
                </p>
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e" }}
                >
                  Bullish Week
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: "Market Sentiment", value: "Cautiously Bullish" },
                  { label: "Risk Level", value: "Moderate" },
                  { label: "BTC Dominance", value: "54.2%" },
                  { label: "Weekly Change", value: "+6.8%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg p-3"
                    style={{
                      background: "rgba(20,33,61,0.8)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-xs mb-1" style={{ color: "rgba(229,229,229,0.5)" }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "#FCA311" }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl p-4"
                style={{
                  background: "rgba(252,163,17,0.06)",
                  border: "1px solid rgba(252,163,17,0.15)",
                }}
              >
                <p className="text-xs font-medium mb-2" style={{ color: "#FCA311" }}>
                  This Week's Key Insight
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#E5E5E5" }}>
                  Bitcoin approaching resistance at $69k. Ethereum showing strength vs BTC.
                  DeFi narratives gaining traction. Consider maintaining current positions.
                </p>
              </div>
            </div>

            {/* Signal row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { coin: "BTC", signal: "HOLD", color: "#FCA311" },
                { coin: "ETH", signal: "BUY", color: "#22c55e" },
                { coin: "ALT", signal: "CAUTION", color: "#ef4444" },
              ].map((item) => (
                <div
                  key={item.coin}
                  className="rounded-xl p-3 text-center"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <p className="text-xs mb-1" style={{ color: "rgba(229,229,229,0.6)" }}>
                    {item.coin}
                  </p>
                  <p className="text-xs font-bold" style={{ color: item.color }}>
                    {item.signal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

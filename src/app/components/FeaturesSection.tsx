import { Brain, Bell, BarChart2, Clock, Eye, Activity, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Brain size={22} />,
    title: "AI Weekly Market Summary",
    description:
      "Get a simplified explanation of what happened and what may happen next, in plain language you can act on.",
  },
  {
    icon: <Bell size={22} />,
    title: "Smart Risk Alerts",
    description:
      "Know when market conditions become unusually risky or unstable before they affect your portfolio.",
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Coin Monitoring",
    description:
      "Track Bitcoin, Ethereum, altcoins, narratives, and trends in one unified dashboard.",
  },
  {
    icon: <Clock size={22} />,
    title: "Quick Read Insights",
    description:
      "Designed for people who only have 5 to 10 minutes. No fluff, just what you need to know.",
  },
  {
    icon: <Eye size={22} />,
    title: "Portfolio Watchlists",
    description:
      "Monitor your selected assets without manually checking multiple apps and data sources.",
  },
  {
    icon: <Activity size={22} />,
    title: "AI Sentiment Scanner",
    description:
      "Understand market psychology before emotional retail reactions begin to move prices.",
  },
];

export function FeaturesSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      id="features"
      style={{ background: "#14213D" }}
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: "#FCA311" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
            style={{
              background: "rgba(252,163,17,0.12)",
              border: "1px solid rgba(252,163,17,0.3)",
              color: "#FCA311",
            }}
          >
            Platform Features
          </div>
          <h2
            className="mb-4"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
            }}
          >
            Everything You Need{" "}
            <span style={{ color: "#FCA311" }}>Without Information Overload</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "#E5E5E5" }}>
            Six powerful tools designed specifically for professionals who don't have time to
            become full-time crypto analysts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl p-6 transition-all duration-300 cursor-default"
              style={{
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(252,163,17,0.3)";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.6)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(252,163,17,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "rgba(252,163,17,0.12)",
                  border: "1px solid rgba(252,163,17,0.2)",
                }}
              >
                <span style={{ color: "#FCA311" }}>{feature.icon}</span>
              </div>
              <h3
                className="mb-3"
                style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "1rem" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#E5E5E5" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-[1.03]"
            style={{ background: "#FCA311", color: "#000" }}
          >
            Explore Platform Features
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

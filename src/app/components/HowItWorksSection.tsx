import { Settings, Cpu, Lightbulb, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Settings size={24} />,
    title: "Connect Your Interests",
    description:
      "Choose the coins, sectors, or strategies you care about. Set up your personalized watchlist in under 2 minutes.",
  },
  {
    number: "02",
    icon: <Cpu size={24} />,
    title: "Receive AI-Powered Weekly Analysis",
    description:
      "The platform scans market movements, sentiment, volatility, and major events automatically every week.",
  },
  {
    number: "03",
    icon: <Lightbulb size={24} />,
    title: "Make Faster, Smarter Decisions",
    description:
      "Understand what matters most without spending your entire weekend researching charts and news feeds.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#000000" }}
      id="how-it-works"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-8 pointer-events-none"
        style={{ background: "#14213D" }}
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
            Simple Process
          </div>
          <h2
            className="mb-4"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
            }}
          >
            Three Simple Steps{" "}
            <span style={{ color: "#FCA311" }}>Every Week</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "#E5E5E5" }}>
            No setup complexity. No technical expertise required. Just follow three simple steps
            and let AI do the heavy lifting.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="absolute top-12 left-0 right-0 h-px hidden lg:block"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(252,163,17,0.4), transparent)",
            }}
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                <div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 relative"
                  style={{
                    background: "rgba(20,33,61,0.8)",
                    border: "1px solid rgba(252,163,17,0.3)",
                    boxShadow: "0 0 30px rgba(252,163,17,0.1)",
                  }}
                >
                  <span style={{ color: "#FCA311" }}>{step.icon}</span>
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "#FCA311", color: "#000" }}
                  >
                    {index + 1}
                  </span>
                </div>

                <h3 className="mb-3" style={{ color: "#FFFFFF", fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#E5E5E5" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-[1.03]"
            style={{ background: "#FCA311", color: "#000" }}
          >
            Try Your First Weekly Report
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

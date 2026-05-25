import { Check, Zap, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for beginners exploring crypto analysis",
    features: [
      "Weekly AI market summaries",
      "Basic price alerts",
      "Up to 5 asset watchlists",
      "Mobile access",
      "Weekly digest email",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "For busy professionals who need more depth",
    features: [
      "Advanced AI analysis & insights",
      "Portfolio monitoring (up to 20 assets)",
      "Priority smart alerts",
      "Narrative tracking & sector analysis",
      "Sentiment scanner",
      "Weekly video recap",
    ],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "$79",
    period: "/month",
    description: "Full market intelligence for serious investors",
    features: [
      "Full market intelligence suite",
      "Custom AI reports on demand",
      "Deep trend analysis",
      "Unlimited asset watchlists",
      "Priority support",
      "Early access to new features",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      id="pricing"
      style={{ background: "#000000" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[150px] opacity-8 pointer-events-none"
        style={{ background: "#14213D" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
            style={{
              background: "rgba(252,163,17,0.12)",
              border: "1px solid rgba(252,163,17,0.3)",
              color: "#FCA311",
            }}
          >
            <Zap size={12} fill="#FCA311" />
            Pricing
          </div>
          <h2
            className="mb-4"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
            }}
          >
            Affordable Guidance{" "}
            <span style={{ color: "#FCA311" }}>Without Expensive Coaching</span>
          </h2>
          <p className="max-w-lg mx-auto" style={{ color: "#E5E5E5" }}>
            Most crypto communities charge hundreds every month. This platform gives you clarity
            without unnecessary complexity or recurring high costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-8 relative flex flex-col"
              style={{
                background: plan.highlighted
                  ? "rgba(20,33,61,0.8)"
                  : "rgba(20,33,61,0.4)",
                border: plan.highlighted
                  ? "1px solid rgba(252,163,17,0.4)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: plan.highlighted
                  ? "0 0 50px rgba(252,163,17,0.1)"
                  : "none",
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                  style={{ background: "#FCA311", color: "#000" }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: plan.highlighted ? "#FCA311" : "#E5E5E5" }}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: "2.5rem",
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm pb-1" style={{ color: "rgba(229,229,229,0.6)" }}>
                    {plan.period}
                  </span>
                </div>
                <p className="text-xs" style={{ color: "rgba(229,229,229,0.6)" }}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check
                      size={15}
                      className="flex-shrink-0"
                      style={{ color: plan.highlighted ? "#FCA311" : "#22c55e" }}
                    />
                    <p className="text-sm" style={{ color: "#E5E5E5" }}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
                style={
                  plan.highlighted
                    ? { background: "#FCA311", color: "#000" }
                    : {
                        background: "transparent",
                        border: "1px solid rgba(252,163,17,0.3)",
                        color: "#FCA311",
                      }
                }
                onMouseEnter={(e) => {
                  if (!plan.highlighted) {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(252,163,17,0.1)";
                  } else {
                    (e.currentTarget as HTMLElement).style.opacity = "0.85";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.highlighted) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  } else {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  }
                }}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm" style={{ color: "rgba(229,229,229,0.5)" }}>
          All plans include a 14-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  );
}

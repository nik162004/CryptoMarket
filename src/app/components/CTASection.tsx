import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(20,33,61,0.8) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: "#FCA311" }}
      />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#FCA311" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
          style={{
            background: "rgba(252,163,17,0.12)",
            border: "1px solid rgba(252,163,17,0.3)",
            color: "#FCA311",
          }}
        >
          <Zap size={12} fill="#FCA311" />
          Start Today — No Credit Card Required
        </div>

        <h2
          className="mb-6"
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          Crypto Does Not Need to{" "}
          <span style={{ color: "#FCA311" }}>Consume Your Entire Life</span>
        </h2>

        <p
          className="mb-10 leading-relaxed max-w-2xl mx-auto"
          style={{ color: "#E5E5E5" }}
        >
          You already have a demanding career. Your crypto research should not feel like another
          full-time job. Get AI-powered weekly market analysis designed for busy professionals who
          want clarity, confidence, and smarter decisions without information overload.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-[1.03]"
            style={{ background: "#FCA311", color: "#000" }}
          >
            Start Your Free Weekly AI Analysis
            <ArrowRight size={16} />
          </button>
          <button
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-200"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "rgba(252,163,17,0.5)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)")
            }
          >
            View Pricing Plans
          </button>
        </div>

        <p className="mt-6 text-sm" style={{ color: "rgba(229,229,229,0.4)" }}>
          14-day free trial · Cancel anytime · No hidden fees
        </p>
      </div>
    </section>
  );
}

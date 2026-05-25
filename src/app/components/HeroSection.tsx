import { useEffect, useRef } from "react";
import { Play, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FCA311" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: "#FCA311" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-15"
        style={{ background: "#14213D" }}
      />
    </div>
  );
}

function MiniChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points = [40, 55, 45, 65, 50, 70, 60, 80, 65, 90, 75, 85, 95, 80, 100];
    const w = canvas.width;
    const h = canvas.height;
    const step = w / (points.length - 1);

    ctx.clearRect(0, 0, w, h);

    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, "rgba(252,163,17,0.3)");
    gradient.addColorStop(1, "rgba(252,163,17,0)");

    ctx.beginPath();
    ctx.moveTo(0, h - (points[0] / 100) * h);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(i * step, h - (points[i] / 100) * h);
    }
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, h - (points[0] / 100) * h);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(i * step, h - (points[i] / 100) * h);
    }
    ctx.strokeStyle = "#FCA311";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, []);

  return <canvas ref={canvasRef} width={200} height={60} className="w-full" />;
}

export function HeroSection() {
  const stats = [
    { label: "BTC", value: "$67,842", change: "+2.4%", up: true },
    { label: "ETH", value: "$3,521", change: "+1.8%", up: true },
    { label: "SOL", value: "$182", change: "-0.6%", up: false },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #14213D 60%, #000000 100%)" }}
    >
      <AnimatedGrid />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
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
              <Zap size={12} fill="#FCA311" />
              AI-Powered Weekly Analysis
            </div>

            <h1
              className="mb-6 leading-tight"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Stop Guessing{" "}
              <span style={{ color: "#FCA311" }}>Crypto Moves</span>{" "}
              After a Long Workday
            </h1>

            <p className="mb-8 leading-relaxed" style={{ color: "#E5E5E5", maxWidth: 520 }}>
              AI-powered weekly crypto analysis built for busy professionals who want faster
              decisions without spending hours on charts, Twitter threads, or expensive coaching
              programs.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium transition-all duration-200 hover:scale-[1.03]"
                style={{ background: "#FCA311", color: "#000" }}
              >
                Start Your Free Weekly Analysis
                <ArrowRight size={16} />
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium transition-all duration-200"
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
                <Play size={16} fill="currentColor" />
                Watch How It Works
              </button>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              {[
                { icon: <TrendingUp size={14} />, text: "Weekly AI Insights" },
                { icon: <Shield size={14} />, text: "No Trading Experience Needed" },
                { icon: <Zap size={14} />, text: "Under 15 Minutes/Week" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm" style={{ color: "#E5E5E5" }}>
                  <span style={{ color: "#FCA311" }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden p-6"
              style={{
                background: "rgba(20,33,61,0.7)",
                border: "1px solid rgba(252,163,17,0.2)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 0 60px rgba(252,163,17,0.08)",
              }}
            >
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs mb-1" style={{ color: "#E5E5E5" }}>
                    Weekly Market Summary
                  </p>
                  <p className="text-xs" style={{ color: "rgba(229,229,229,0.5)" }}>
                    AI Analysis — Week of May 19, 2026
                  </p>
                </div>
                <div
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: "rgba(252,163,17,0.15)", color: "#FCA311" }}
                >
                  Live
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-3"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-xs mb-1" style={{ color: "rgba(229,229,229,0.6)" }}>
                      {s.label}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>
                      {s.value}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: s.up ? "#22c55e" : "#ef4444" }}
                    >
                      {s.change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div
                className="rounded-xl p-4 mb-4"
                style={{
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-medium" style={{ color: "#E5E5E5" }}>
                    BTC / 7-Day Trend
                  </p>
                  <p className="text-xs" style={{ color: "#22c55e" }}>
                    +8.2% this week
                  </p>
                </div>
                <MiniChart />
              </div>

              {/* AI Insight */}
              <div
                className="rounded-xl p-4"
                style={{
                  background: "rgba(252,163,17,0.08)",
                  border: "1px solid rgba(252,163,17,0.2)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Zap size={12} fill="#FCA311" color="#FCA311" />
                  <p className="text-xs font-medium" style={{ color: "#FCA311" }}>
                    AI Weekly Insight
                  </p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#E5E5E5" }}>
                  Market trend turning{" "}
                  <span style={{ color: "#FCA311" }}>bullish this week</span>. Bitcoin
                  consolidating above key support. Consider reducing altcoin exposure during
                  weekend volatility.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl flex items-center gap-3"
              style={{
                background: "#14213D",
                border: "1px solid rgba(252,163,17,0.25)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(252,163,17,0.15)" }}
              >
                <Shield size={14} color="#FCA311" />
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: "#FFFFFF" }}>
                  Low Risk Zone
                </p>
                <p className="text-xs" style={{ color: "rgba(229,229,229,0.6)" }}>
                  Market stable this week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

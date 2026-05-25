import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I work unpredictable consulting hours and this is the first crypto platform that actually respects my time. The weekly summary takes me 10 minutes max.",
    name: "Marcus T.",
    role: "Management Consultant",
    initials: "MT",
    color: "#FCA311",
    img: "https://images.unsplash.com/photo-1622151834677-70f982c9adef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    quote:
      "The weekly AI summaries helped me stop panic checking charts every night. I finally feel in control without being glued to my phone.",
    name: "Sarah K.",
    role: "Software Engineer",
    initials: "SK",
    color: "#14213D",
    img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    quote:
      "Finally something simpler than expensive Discord groups and complicated trading courses. The AI explanations are clear and actionable.",
    name: "James R.",
    role: "Product Manager",
    initials: "JR",
    color: "#14213D",
    img: "https://images.unsplash.com/photo-1729714055320-4d1c5d5e213d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-12 pointer-events-none"
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
            Social Proof
          </div>
          <h2
            className="mb-4"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
            }}
          >
            Built for People Who{" "}
            <span style={{ color: "#FCA311" }}>Cannot Watch Charts All Day</span>
          </h2>
          <p style={{ color: "#E5E5E5" }}>
            Join thousands of busy professionals who've simplified their crypto research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(20,33,61,0.5)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FCA311" color="#FCA311" />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "#E5E5E5" }}>
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  style={{ border: "2px solid rgba(252,163,17,0.3)" }}
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    const next = el.nextElementSibling as HTMLElement;
                    if (next) next.style.display = "flex";
                  }}
                />
                <div
                  className="w-10 h-10 rounded-full items-center justify-center text-sm font-bold"
                  style={{
                    display: "none",
                    background: "#FCA311",
                    color: "#000",
                    border: "2px solid rgba(252,163,17,0.3)",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(229,229,229,0.6)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{
            background: "rgba(20,33,61,0.4)",
            border: "1px solid rgba(252,163,17,0.15)",
          }}
        >
          {[
            { value: "12,400+", label: "Active Members" },
            { value: "94%", label: "Time Saved Weekly" },
            { value: "< 15min", label: "Weekly Review Time" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="mb-1"
                style={{ color: "#FCA311", fontWeight: 700, fontSize: "1.75rem" }}
              >
                {stat.value}
              </p>
              <p className="text-sm" style={{ color: "#E5E5E5" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-[1.03]"
            style={{ background: "#FCA311", color: "#000" }}
          >
            Join Busy Professionals Using AI Crypto Analysis
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

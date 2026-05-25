import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Do I need crypto trading experience?",
    a: "No. The platform explains every insight in plain language. Whether you're completely new to crypto or have some experience, our AI breaks down complex market movements into simple, actionable summaries you can understand without a finance degree.",
  },
  {
    q: "Is this financial advice?",
    a: "No. The platform provides AI-powered analysis and market intelligence to support your decision-making process. All insights are educational in nature. We recommend consulting a licensed financial advisor for personal investment decisions.",
  },
  {
    q: "How much time do I need weekly?",
    a: "Most users spend under 15 minutes reviewing their weekly insights. The platform is specifically designed for busy professionals — you get a concise summary with the key market developments and actionable signals, not hours of content.",
  },
  {
    q: "Can I track only certain coins?",
    a: "Yes. You can fully personalize your watchlists and analysis preferences. Choose the specific coins, sectors, or narratives you care about, and the AI will focus its weekly report on what matters to you.",
  },
  {
    q: "How accurate is the AI analysis?",
    a: "Our AI analyzes on-chain data, market sentiment, historical patterns, and news events to generate weekly insights. While no analysis is 100% accurate, our models are continuously updated and have shown consistent performance tracking major market trends.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. All plans are month-to-month with no long-term commitment. You can upgrade, downgrade, or cancel at any time from your account settings. Your data will remain accessible until the end of your billing period.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="py-24 relative overflow-hidden"
      id="faq"
      style={{ background: "#14213D" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
            style={{
              background: "rgba(252,163,17,0.12)",
              border: "1px solid rgba(252,163,17,0.3)",
              color: "#FCA311",
            }}
          >
            FAQ
          </div>
          <h2
            className="mb-4"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
            }}
          >
            Questions Professionals{" "}
            <span style={{ color: "#FCA311" }}>Usually Ask</span>
          </h2>
          <p style={{ color: "#E5E5E5" }}>
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3 mb-14">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden transition-all duration-200"
              style={{
                background: open === idx ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.3)",
                border:
                  open === idx
                    ? "1px solid rgba(252,163,17,0.3)"
                    : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span
                  className="text-sm font-medium pr-4"
                  style={{ color: open === idx ? "#FCA311" : "#FFFFFF" }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: "#FCA311",
                    transform: open === idx ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {open === idx && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#E5E5E5" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-[1.03]"
            style={{ background: "#FCA311", color: "#000" }}
          >
            Get Started Risk Free
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

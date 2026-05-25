import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Zap, ArrowRight, Loader2, Check } from "lucide-react";

// ─── Clerk integration point ────────────────────────────────────────────────
// To connect Clerk, replace the handleSubmit body with:
//
//   import { useSignUp } from "@clerk/react";
//   const { signUp, setActive } = useSignUp();
//   await signUp.create({ emailAddress: email, password, firstName: name.split(" ")[0] });
//   await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
//   // Then redirect to an /verify-email page that calls signUp.attemptEmailAddressVerification
//
// And replace the Google button handler with:
//   await signUp.authenticateWithRedirect({ strategy: "oauth_google", ... });
// ────────────────────────────────────────────────────────────────────────────

type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
  general?: string;
};

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: "8+ characters", pass: password.length >= 8 },
    { label: "Uppercase letter", pass: /[A-Z]/.test(password) },
    { label: "Number", pass: /\d/.test(password) },
  ];
  if (!password) return null;
  return (
    <div className="mt-2 flex gap-4">
      {checks.map(({ label, pass }) => (
        <div key={label} className="flex items-center gap-1">
          <div
            className="w-3.5 h-3.5 rounded-full flex items-center justify-center"
            style={{
              background: pass ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.08)",
              border: pass ? "1px solid #22c55e" : "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {pass && <Check size={8} color="#22c55e" />}
          </div>
          <span className="text-xs" style={{ color: pass ? "#22c55e" : "rgba(229,229,229,0.4)" }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const e: FormErrors = {};
    if (!name.trim()) e.name = "Full name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 8) e.password = "Password must be at least 8 characters";
    if (!confirm) e.confirm = "Please confirm your password";
    else if (confirm !== password) e.confirm = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    if (!agreed) {
      setErrors((p) => ({ ...p, general: "Please accept the terms to continue." }));
      return;
    }
    setLoading(true);
    setErrors({});
    try {
      // ── Replace with Clerk signUp.create() ──
      await new Promise((r) => setTimeout(r, 1400)); // simulated delay
      navigate("/login"); // after Clerk: redirect to /verify-email
    } catch {
      setErrors({ general: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = (hasError?: string) => ({
    background: "rgba(0,0,0,0.4)",
    border: hasError ? "1px solid rgba(239,68,68,0.6)" : "1px solid rgba(255,255,255,0.1)",
    color: "#FFFFFF" as const,
  });

  function fieldFocus(e: React.FocusEvent<HTMLInputElement>, hasError?: string) {
    if (!hasError) (e.target as HTMLElement).style.borderColor = "rgba(252,163,17,0.5)";
  }
  function fieldBlur(e: React.FocusEvent<HTMLInputElement>, hasError?: string) {
    if (!hasError) (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[180px] opacity-18 pointer-events-none"
        style={{ background: "#14213D" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "#FCA311" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="signup-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FCA311" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#signup-grid)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "#FCA311" }}
            >
              <Zap size={18} color="#000" fill="#000" />
            </div>
            <span style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "1.1rem" }}>
              CryptoAI
            </span>
          </Link>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "rgba(20,33,61,0.6)",
            border: "1px solid rgba(252,163,17,0.15)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 60px rgba(0,0,0,0.4)",
          }}
        >
          <div className="mb-8">
            <h1
              className="mb-1"
              style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "1.6rem" }}
            >
              Create your account
            </h1>
            <p className="text-sm" style={{ color: "rgba(229,229,229,0.6)" }}>
              Start your free 14-day trial — no credit card needed
            </p>
          </div>

          {/* OAuth button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-medium mb-6 transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)")
            }
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="text-xs" style={{ color: "rgba(229,229,229,0.4)" }}>
              or sign up with email
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {errors.general && (
              <div
                className="mb-4 px-4 py-3 rounded-xl text-sm"
                style={{
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  color: "#ef4444",
                }}
              >
                {errors.general}
              </div>
            )}

            {/* Full name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: "#E5E5E5" }}>
                Full name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                }}
                placeholder="Alex Johnson"
                autoComplete="name"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={inputStyle(errors.name)}
                onFocus={(e) => fieldFocus(e, errors.name)}
                onBlur={(e) => fieldBlur(e, errors.name)}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: "#E5E5E5" }}>
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                }}
                placeholder="you@company.com"
                autoComplete="email"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={inputStyle(errors.email)}
                onFocus={(e) => fieldFocus(e, errors.email)}
                onBlur={(e) => fieldBlur(e, errors.email)}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: "#E5E5E5" }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors((p) => ({ ...p, password: undefined }));
                  }}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  className="w-full px-4 py-3 pr-12 rounded-xl text-sm outline-none transition-all duration-200"
                  style={inputStyle(errors.password)}
                  onFocus={(e) => fieldFocus(e, errors.password)}
                  onBlur={(e) => fieldBlur(e, errors.password)}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  style={{ color: "rgba(229,229,229,0.5)" }}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <PasswordStrength password={password} />
              {errors.password && (
                <p className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>{errors.password}</p>
              )}
            </div>

            {/* Confirm password */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" style={{ color: "#E5E5E5" }}>
                Confirm password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirm}
                  onChange={(e) => {
                    setConfirm(e.target.value);
                    if (errors.confirm) setErrors((p) => ({ ...p, confirm: undefined }));
                  }}
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  className="w-full px-4 py-3 pr-12 rounded-xl text-sm outline-none transition-all duration-200"
                  style={inputStyle(errors.confirm)}
                  onFocus={(e) => fieldFocus(e, errors.confirm)}
                  onBlur={(e) => fieldBlur(e, errors.confirm)}
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  style={{ color: "rgba(229,229,229,0.5)" }}
                  onClick={() => setShowConfirm((v) => !v)}
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.confirm && (
                <p className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>{errors.confirm}</p>
              )}
            </div>

            {/* Terms */}
            <div className="mb-6 flex items-start gap-3">
              <button
                type="button"
                onClick={() => setAgreed((v) => !v)}
                className="mt-0.5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{
                  background: agreed ? "#FCA311" : "rgba(0,0,0,0.4)",
                  border: agreed ? "1px solid #FCA311" : "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {agreed && <Check size={11} color="#000" strokeWidth={3} />}
              </button>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(229,229,229,0.6)" }}>
                I agree to the{" "}
                <a href="#" style={{ color: "#FCA311" }}>Terms of Service</a>
                {" "}and{" "}
                <a href="#" style={{ color: "#FCA311" }}>Privacy Policy</a>
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 disabled:opacity-70"
              style={{ background: "#FCA311", color: "#000" }}
              onMouseEnter={(e) => {
                if (!loading) (e.currentTarget as HTMLElement).style.opacity = "0.88";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  Create Free Account
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>

          {/* Login link */}
          <p className="mt-6 text-center text-sm" style={{ color: "rgba(229,229,229,0.5)" }}>
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium transition-colors duration-200"
              style={{ color: "#FCA311" }}
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-sm transition-colors duration-200"
            style={{ color: "rgba(229,229,229,0.4)" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(229,229,229,0.8)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(229,229,229,0.4)")
            }
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Zap, ArrowRight, Loader2 } from "lucide-react";

// ─── Clerk integration point ────────────────────────────────────────────────
// To connect Clerk, replace the handleSubmit body with:
//
//   import { useSignIn } from "@clerk/react";
//   const { signIn, setActive } = useSignIn();
//   const result = await signIn.create({ identifier: email, password });
//   if (result.status === "complete") await setActive({ session: result.createdSessionId });
//
// And replace the Google button handler with:
//   await signIn.authenticateWithRedirect({ strategy: "oauth_google", ... });
// ────────────────────────────────────────────────────────────────────────────

type FormErrors = { email?: string; password?: string; general?: string };

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const e: FormErrors = {};
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6) e.password = "Password must be at least 6 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setErrors({});
    try {
      // ── Replace with Clerk signIn.create() ──
      await new Promise((r) => setTimeout(r, 1200)); // simulated delay
      navigate("/dashboard"); // replace with your post-login route
    } catch {
      setErrors({ general: "Invalid email or password. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: "#14213D" }}
      />
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "#FCA311" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="login-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FCA311" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#login-grid)" />
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
              Welcome back
            </h1>
            <p className="text-sm" style={{ color: "rgba(229,229,229,0.6)" }}>
              Sign in to your CryptoAI account
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
            {/* Google icon */}
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="text-xs" style={{ color: "rgba(229,229,229,0.4)" }}>
              or sign in with email
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Form */}
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

            {/* Email */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#E5E5E5" }}
              >
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
                style={{
                  background: "rgba(0,0,0,0.4)",
                  border: errors.email
                    ? "1px solid rgba(239,68,68,0.6)"
                    : "1px solid rgba(255,255,255,0.1)",
                  color: "#FFFFFF",
                }}
                onFocus={(e) => {
                  if (!errors.email)
                    (e.target as HTMLElement).style.borderColor = "rgba(252,163,17,0.5)";
                }}
                onBlur={(e) => {
                  if (!errors.email)
                    (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium" style={{ color: "#E5E5E5" }}>
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs transition-colors duration-200"
                  style={{ color: "#FCA311" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.opacity = "0.7")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.opacity = "1")
                  }
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors((p) => ({ ...p, password: undefined }));
                  }}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full px-4 py-3 pr-12 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: "rgba(0,0,0,0.4)",
                    border: errors.password
                      ? "1px solid rgba(239,68,68,0.6)"
                      : "1px solid rgba(255,255,255,0.1)",
                    color: "#FFFFFF",
                  }}
                  onFocus={(e) => {
                    if (!errors.password)
                      (e.target as HTMLElement).style.borderColor =
                        "rgba(252,163,17,0.5)";
                  }}
                  onBlur={(e) => {
                    if (!errors.password)
                      (e.target as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.1)";
                  }}
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
              {errors.password && (
                <p className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 disabled:opacity-70"
              style={{ background: "#FCA311", color: "#000" }}
              onMouseEnter={(e) => {
                if (!loading)
                  (e.currentTarget as HTMLElement).style.opacity = "0.88";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>

          {/* Sign up link */}
          <p className="mt-6 text-center text-sm" style={{ color: "rgba(229,229,229,0.5)" }}>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium transition-colors duration-200"
              style={{ color: "#FCA311" }}
            >
              Create one free
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


import { Building2, Leaf } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import type { FormEvent } from "react"
import { useAuthStore } from "@/stores/authStore"

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRobot, setIsRobot] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Use Zustand store to login with random data
    login(email || 'random@example.com');
    
    // Redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/LoginBg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-blue-50/40 to-cyan-200/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Building2 className="w-12 h-12 text-green-600" />
            </div>
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Leaf className="w-12 h-12 text-orange-500" />
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-[#2d2d2d] text-white px-8 py-6 text-center">
              <h1 className="text-sm font-normal leading-tight mb-2">Agricultural and Biosystems Engineering</h1>
              <h2 className="text-xs font-light mb-3">Management Information System</h2>
              <h3 className="text-2xl font-semibold tracking-wide">LOGIN</h3>
            </div>

            {/* Form */}
            <div className="px-8 py-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 border-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>

                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-11 border-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#3d3d3d] hover:bg-[#2d2d2d] text-white font-medium text-base"
                >
                  Log in
                </Button>

                <div className="text-center">
                  <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-gray-800">
                    Forgot Password?
                  </Link>
                </div>

                <div className="text-center text-sm text-gray-500">or</div>

                <div className="text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                    Sign Up
                  </Link>
                </div>

                {/* reCAPTCHA */}
                <div className="flex items-start gap-3 p-4 border border-gray-300 rounded bg-gray-50">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    checked={isRobot}
                    onChange={(e) => setIsRobot(e.target.checked)}
                    className="mt-1 w-6 h-6 border-2 border-gray-400 rounded cursor-pointer"
                  />
                  <label htmlFor="recaptcha" className="text-sm text-gray-700 cursor-pointer flex-1">
                    I'm not a robot
                  </label>
                  <div className="flex flex-col items-end text-xs text-gray-500">
                    <img src="/etc/recaptcha-logo.png" alt="reCAPTCHA" className="w-8 h-8 mb-1" />
                    <div className="text-[10px] leading-tight text-right">
                      <div>reCAPTCHA</div>
                      <div className="text-blue-600">Privacy - Terms</div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 text-sm text-gray-700">
            <p className="flex items-center justify-center gap-1">
              <span className="w-4 h-4 border-2 border-gray-700 rounded-full flex items-center justify-center text-xs">
                ©
              </span>
              2025 ABEMIS 3.0. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Building2, Leaf } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ForgotPassPage() {
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

          {/* Forgot Password Card */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-[#2d2d2d] text-white px-8 py-6 text-center">
              <h1 className="text-sm font-normal leading-tight mb-2">Agricultural and Biosystems Engineering</h1>
              <h2 className="text-xs font-light mb-3">Management Information System</h2>
              <h3 className="text-2xl font-semibold tracking-wide">FORGOT PASSWORD</h3>
            </div>

            {/* Form */}
            <div className="px-8 py-8">
              <p className="text-sm text-gray-600 mb-6 text-center">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              
              <form className="space-y-5">
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full h-11 border-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#3d3d3d] hover:bg-[#2d2d2d] text-white font-medium text-base"
                >
                  Send Reset Link
                </Button>

                <div className="text-center text-sm text-gray-600">
                  Remember your password?{" "}
                  <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Log In
                  </Link>
                </div>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 text-sm text-gray-700">
            <p className="flex items-center justify-center gap-1">
              <span className="inline-block w-4 h-4 border-2 border-gray-700 rounded-full flex items-center justify-center text-xs">
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

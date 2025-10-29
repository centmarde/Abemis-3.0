
import { Building2, Leaf } from "lucide-react"
import { Link } from "react-router-dom"

export default function SignUpPage() {
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
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
        {/* Logos */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
            <Building2 className="h-12 w-12 text-green-700" />
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
            <Leaf className="h-12 w-12 text-orange-500" />
          </div>
        </div>

        {/* Sign Up Card */}
        <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-2xl">
          {/* Header */}
          <div className="bg-zinc-800 px-8 py-6 text-center">
            <h2 className="text-sm font-medium text-white">Agricultural and Biosystems Engineering</h2>
            <p className="text-xs text-gray-300">Management Information System</p>
            <h1 className="mt-3 text-2xl font-bold text-white">SIGN UP</h1>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Middle Name"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <select
                  className="w-full appearance-none rounded border border-gray-300 px-4 py-2.5 text-sm text-gray-500 focus:border-gray-400 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm focus:border-gray-400 focus:outline-none"
                />
              </div>

              <div>
                <select
                  className="w-full appearance-none rounded border border-gray-300 px-4 py-2.5 text-sm text-gray-500 focus:border-gray-400 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Operating Unit
                  </option>
                  <option value="unit1">Unit 1</option>
                  <option value="unit2">Unit 2</option>
                  <option value="unit3">Unit 3</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded bg-zinc-800 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-700">
                Log In
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-700">
          <span className="inline-flex items-center gap-1">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-700 text-xs">
              ©
            </span>
            2025 ABEMIS 3.0. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Building2, Leaf } from "lucide-react"

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
              <Building2 className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80">
            HOME
          </a>
          <a
            href="/about"
            className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            ABOUT
          </a>
          <a
            href="/project"
            className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            PROJECT
          </a>
          <a
            href="/services"
            className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            SERVICES
          </a>
          <a
            href="/how-to"
            className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            HOW TO?
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm font-medium">
            Sign In
          </Button>
          <Button className="bg-black text-sm font-medium text-white hover:bg-black/90">Sign Up</Button>
        </div>
      </div>
    </nav>
  )
}

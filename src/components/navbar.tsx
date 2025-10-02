import { Button } from "@/components/ui/button"
import { Building2, Leaf } from "lucide-react"

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Height of the navbar (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
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
          <button 
            onClick={scrollToTop}
            className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection('project')}
            className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            PROJECT
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            SERVICES
          </button>
          <button
            onClick={() => scrollToSection('how-to')}
            className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
          >
            HOW TO?
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Button  className="text-sm font-medium">
            Sign In
          </Button>
          <Button className="bg-black text-sm font-medium text-white hover:bg-black/90">Sign Up</Button>
        </div>
      </div>
    </nav>
  )
}

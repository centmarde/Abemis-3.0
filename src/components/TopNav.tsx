import { Menu, Bell, ChevronDown, Search, LogOut, User, Settings } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuthStore } from "@/stores/authStore"

interface TopnavProps {
  onMenuClick?: () => void
}

export function Topnav({ onMenuClick }: TopnavProps) {
  const navigate = useNavigate()
  const { userData, handleLogout } = useAuthStore()

  const onLogout = () => {
    handleLogout(navigate)
  }

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 gap-4">
      {/* Hamburger Menu */}
      <Button variant="ghost" size="icon" onClick={onMenuClick} className="text-gray-700 hover:bg-gray-100">
        <Menu className="w-5 h-5" />
      </Button>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl mx-auto relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input type="search" placeholder="Search" className="w-full pl-10 bg-gray-50 border-gray-200 focus:bg-white" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Notification Bell */}
        <Button variant="ghost" size="icon" className="text-gray-700 hover:bg-gray-100">
          <Bell className="w-5 h-5" />
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 gap-1">
              <span className="font-medium">CN</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userData.email}</p>
                <p className="text-xs leading-none text-muted-foreground capitalize">{userData.role}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onLogout} className="text-red-600 focus:text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

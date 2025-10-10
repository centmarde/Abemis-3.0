import type React from "react"

import { Home, FileText, Users, ShoppingBag, Archive, Trash2, ShoppingCart, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  hasChevron?: boolean
  badge?: number
  isCollapsed?: boolean
}

function SidebarItem({ icon, label, isActive, hasChevron, badge, isCollapsed }: SidebarItemProps) {
  return (
    <button
      className={cn(
        "w-full flex items-center gap-3 py-3 text-sm transition-colors",
        isCollapsed ? "px-2 justify-center" : "px-4",
        isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100",
      )}
      title={isCollapsed ? label : undefined}
    >
      <span className="w-5 h-5 flex items-center justify-center shrink-0">{icon}</span>
      {!isCollapsed && (
        <>
          <span className="flex-1 text-left">{label}</span>
          {hasChevron && <ChevronRight className="w-4 h-4 text-gray-400" />}
          {badge !== undefined && <span className="text-sm text-gray-500">{badge}</span>}
        </>
      )}
      {isCollapsed && badge !== undefined && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {badge > 99 ? "99+" : badge}
        </span>
      )}
    </button>
  )
}

interface SidebarProps {
  isCollapsed?: boolean
}

export function Sidebar({ isCollapsed = false }: SidebarProps) {
  return (
    <aside
      className={cn(
        "h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        isCollapsed ? "w-16" : "w-72",
      )}
    >
      {/* Header */}
      <div className={cn("py-6 border-b border-gray-200", isCollapsed ? "px-2" : "px-4")}>
        <h1 className={cn("font-semibold text-gray-900", isCollapsed ? "text-sm text-center" : "text-lg")}>
          {isCollapsed ? "A" : "ABEMIS 3.0"}
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2">
        <SidebarItem icon={<Home className="w-5 h-5" />} label="Dashboard" isActive isCollapsed={isCollapsed} />
        <SidebarItem icon={<FileText className="w-5 h-5" />} label="Projects" hasChevron isCollapsed={isCollapsed} />
        <SidebarItem icon={<Users className="w-5 h-5" />} label="User Management" isCollapsed={isCollapsed} />
        <SidebarItem icon={<ShoppingBag className="w-5 h-5" />} label="TEST" isCollapsed={isCollapsed} />
        <SidebarItem icon={<Archive className="w-5 h-5" />} label="TEST" hasChevron isCollapsed={isCollapsed} />
        <SidebarItem icon={<Trash2 className="w-5 h-5" />} label="TEST" isCollapsed={isCollapsed} />
        <SidebarItem icon={<Archive className="w-5 h-5" />} label="TEST" isCollapsed={isCollapsed} />

        {/* Divider */}
        {!isCollapsed && <div className="my-2" />}

        {/* Items with badges */}
        <SidebarItem icon={<Users className="w-5 h-5" />} label="TEST" badge={972} isCollapsed={isCollapsed} />
        <SidebarItem icon={<Archive className="w-5 h-5" />} label="TEST" badge={342} isCollapsed={isCollapsed} />
        <SidebarItem icon={<FileText className="w-5 h-5" />} label="TEST" badge={128} isCollapsed={isCollapsed} />
        <SidebarItem icon={<ShoppingCart className="w-5 h-5" />} label="TEST" badge={8} isCollapsed={isCollapsed} />
        <SidebarItem icon={<Archive className="w-5 h-5" />} label="TEST" badge={21} isCollapsed={isCollapsed} />
      </nav>
    </aside>
  )
}

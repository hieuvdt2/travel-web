import dynamic from "next/dynamic"

export const NavigationMenu = dynamic(() => import('@/components/ui/navigation-menu').then(mod => mod.NavigationMenu), {
  ssr: false,
})


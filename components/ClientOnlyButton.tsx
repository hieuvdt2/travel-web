import dynamic from "next/dynamic"

export const NavigationMenu = dynamic(() => import('@/components/ui/button').then(mod => mod.NavigationMenu), {
  ssr: false,
})


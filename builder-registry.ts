import { register } from '@builder.io/sdk-react'

// 🧩 Dynamic import for .tsx modules
const { ChatSidebar } = await import('./components/chat/chat-sidebar.tsx')

// 🔧 Register active Builder components
register(ChatSidebar, { name: 'ChatSidebar' })

// Optional: add more components as you go
// const { default: PricingTable } = await import('./components/pricing/PricingTable.tsx')
// register(PricingTable, { name: 'PricingTable' })

console.log('✅ Builder.io components registered via .mts + dynamic TSX import!')

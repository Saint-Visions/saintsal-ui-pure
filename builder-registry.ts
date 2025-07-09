import { register } from '@builder.io/sdk-react'

// 🧩 Dynamic import for .tsx modules (TSX needs to be explicitly referenced with extension)
const { ChatSidebar } = await import('./components/chat/chat-sidebar.tsx')

// 🔧 Register active Builder components
register(ChatSidebar, { name: 'ChatSidebar' })

console.log('✅ Builder.io components registered via .mts + dynamic TSX import!')


import { register } from '@builder.io/sdk-react';

// Available components
import ChatPanel from './components/chat/chat-panel.js';
import ChatSidebar from './components/chat/chat-sidebar.js';
// You can uncomment these if/when they exist:
// import PricingTable from './components/pricing/PricingTable.js';
// import FeaturesGrid from './components/marketing/FeaturesGrid.js';

register(ChatPanel, { name: 'ChatPanel' });
register(ChatSidebar, { name: 'ChatSidebar' });
// register(PricingTable, { name: 'PricingTable' });
// register(FeaturesGrid, { name: 'FeaturesGrid' });

console.log('✅ Builder.io components registered successfully!');

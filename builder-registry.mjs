import { register } from '@builder.io/sdk-react';

const registerComponents = async () => {
  const { default: ChatSidebar } = await import('./components/chat/chat-sidebar.tsx');
  // Add more as needed:
  // const { default: PricingTable } = await import('./components/pricing/PricingTable.tsx');
  // const { default: FeaturesGrid } = await import('./components/marketing/FeaturesGrid.tsx');

  register(ChatSidebar, { name: 'ChatSidebar' });
  // register(PricingTable, { name: 'PricingTable' });
  // register(FeaturesGrid, { name: 'FeaturesGrid' });

  console.log('✅ Builder.io components registered successfully!');
};

registerComponents();

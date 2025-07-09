import { register } from '@builder.io/sdk-react';

// Commented out missing ones
// import Header from './components/core/Header';
// import Footer from './components/core/Footer';

import ChatWidget from './components/chat/ChatWidget.js'; // update with real file name if needed
import PricingTable from './components/pricing/PricingTable.js'; // verify file exists
import FeaturesGrid from './components/marketing/FeaturesGrid.js'; // verify file exists

// register(Header, { name: 'Header' });
// register(Footer, { name: 'Footer' });
register(ChatWidget, { name: 'ChatWidget' });
register(PricingTable, { name: 'PricingTable' });
register(FeaturesGrid, { name: 'FeaturesGrid' });

console.log('✅ Builder.io components registered successfully!');

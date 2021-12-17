import React from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import Index from './src/index';

i18n.locale = Localization.locale;

export default function App() {
  return (
    <Index />
  );
}

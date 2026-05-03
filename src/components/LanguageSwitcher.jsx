import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../utils/translations';

export const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-5 py-2.5 rounded-full border border-gray-200/50 bg-white/60 backdrop-blur-md text-gray-800 font-semibold cursor-pointer hover:bg-white hover:border-saffron-300 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-saffron-400/50 appearance-none shadow-sm"
        aria-label="Select language"
      >
        <option value="en">🇮🇳 English</option>
        <option value="hi">🇮🇳 हिंदी</option>
      </select>
    </div>
  );
};

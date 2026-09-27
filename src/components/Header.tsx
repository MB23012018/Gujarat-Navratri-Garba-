import React, { useState } from 'react';
import { City } from '../types';
import { GUJARAT_CITIES } from '../data/mockData';
import { Language, TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  currentCity: City;
  onCityChange: (city: City) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenReportModal: () => void;
  onOpenAiSearch: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenPassModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCity,
  onCityChange,
  activeTab,
  onTabChange,
  language,
  onLanguageChange,
  onOpenReportModal,
  onOpenAiSearch,
  searchQuery,
  onSearchChange,
  onOpenPassModal
}) => {
  const t = TRANSLATIONS[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#180d2c]/90 backdrop-blur-xl border-b border-[#251a39] shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 max-w-7xl mx-auto">
        {/* Brand Crest & Title */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onTabChange('explore')}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
          >
            {/* Authentic Vector Crest based on user image 1 & 2 */}
            <div className="relative w-10 h-10 rounded-full bg-[#180d2c] border-2 border-[#feb300] flex items-center justify-center shadow-lg shadow-[#ff6f00]/20 group-hover:scale-105 transition-transform shrink-0">
              <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#feb300]">
                {/* Crossed Dandiya sticks */}
                <line x1="20" y1="20" x2="80" y2="80" stroke="#feb300" strokeWidth="8" strokeLinecap="round" />
                <line x1="80" y1="20" x2="20" y2="80" stroke="#ff6f00" strokeWidth="8" strokeLinecap="round" />
                {/* Central Diya bowl */}
                <path d="M 32 54 Q 50 68 68 54 Z" fill="#feb300" stroke="#552000" strokeWidth="2" />
                {/* Diya Flame */}
                <path d="M 50 28 C 45 40 42 46 50 52 C 58 46 55 40 50 28 Z" fill="#ffd799" />
                <circle cx="50" cy="20" r="4" fill="#ffffff" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-bold text-lg text-[#ebdcff] tracking-tight group-hover:text-[#ffb691] transition-colors leading-tight">
                {t.brandName}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#feb300] leading-none">
                {t.brandSubtitle}
              </span>
            </div>
          </button>

          {/* Quick City Selector Pill */}
          <div className="hidden sm:flex items-center gap-1 bg-[#211635] border border-[#3a2f50] px-3 py-1.5 rounded-full shadow-inner">
            <span className="material-symbols-outlined text-[#ffd799] text-base">location_on</span>
            <select
              aria-label={t.citySelector}
              value={currentCity}
              onChange={(e) => onCityChange(e.target.value as City)}
              className="bg-transparent text-xs font-semibold text-[#ebdcff] focus:outline-none cursor-pointer pr-1"
            >
              {GUJARAT_CITIES.map((c) => (
                <option key={c} value={c} className="bg-[#2f2444] text-[#ebdcff]">
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#130827]/70 border border-[#251a39] p-1 rounded-full shadow-inner">
          <button
            onClick={() => onTabChange('explore')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
              activeTab === 'explore' || activeTab === 'event-detail'
                ? 'bg-[#ff6f00] text-white shadow-md'
                : 'text-[#e1bfb0] hover:text-[#ebdcff] hover:bg-[#251a39]'
            }`}
          >
            {t.exploreEvents}
          </button>
          <button
            onClick={() => onTabChange('competitions')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
              activeTab === 'competitions' || activeTab === 'competition-detail'
                ? 'bg-[#ff6f00] text-white shadow-md'
                : 'text-[#e1bfb0] hover:text-[#ebdcff] hover:bg-[#251a39]'
            }`}
          >
            {t.findCompetitions}
          </button>
          <button
            onClick={() => onTabChange('radar')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'radar'
                ? 'bg-[#ff6f00] text-white shadow-md'
                : 'text-[#e1bfb0] hover:text-[#ebdcff] hover:bg-[#251a39]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#3ce36a] animate-pulse"></span>
            {t.liveRadar}
          </button>
          <button
            onClick={() => onTabChange('artists')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
              activeTab === 'artists'
                ? 'bg-[#ff6f00] text-white shadow-md'
                : 'text-[#e1bfb0] hover:text-[#ebdcff] hover:bg-[#251a39]'
            }`}
          >
            {t.artistsDirectory}
          </button>
          <button
            onClick={() => onTabChange('compare')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
              activeTab === 'compare'
                ? 'bg-[#ff6f00] text-white shadow-md'
                : 'text-[#e1bfb0] hover:text-[#ebdcff] hover:bg-[#251a39]'
            }`}
          >
            {t.compareEvents}
          </button>
          <button
            onClick={() => onTabChange('my-garba')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'my-garba'
                ? 'bg-[#feb300] text-[#432c00] font-extrabold shadow-md'
                : 'text-[#ffd799] hover:bg-[#251a39]'
            }`}
          >
            <span className="material-symbols-outlined text-sm">stars</span>
            {t.myGarbaHub}
          </button>
        </nav>

        {/* Right Action Icons: Search Input, AI Search Button, Language Switcher, Fast Pass */}
        <div className="flex items-center gap-2">
          {/* Quick Search Input */}
          <div className="hidden lg:flex items-center bg-[#211635] border border-[#3a2f50] px-3 py-1.5 rounded-full w-48 xl:w-56 focus-within:w-64 focus-within:border-[#ff6f00] transition-all">
            <span className="material-symbols-outlined text-[#a98a7c] text-base mr-1.5">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search Garba, mandli..."
              className="bg-transparent text-xs text-[#ebdcff] placeholder-[#a98a7c] focus:outline-none w-full"
            />
          </div>

          {/* AI Search Assistant Trigger */}
          <button
            onClick={onOpenAiSearch}
            className="flex items-center gap-1.5 bg-gradient-to-r from-[#ff6f00]/20 to-[#feb300]/20 border border-[#ff6f00]/40 text-[#ffb691] hover:text-white hover:bg-[#ff6f00] px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
            title="Ask AI Garba Discovery Assistant"
          >
            <span className="material-symbols-outlined text-sm text-[#feb300]">auto_awesome</span>
            <span className="hidden sm:inline">AI Search</span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-[#211635] border border-[#3a2f50] p-0.5 rounded-full text-[11px] font-bold">
            {(['en', 'gu', 'hi'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`px-2 py-0.5 rounded-full transition-colors uppercase ${
                  language === lang ? 'bg-[#ff6f00] text-white' : 'text-[#a98a7c] hover:text-[#ebdcff]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Fast Pass QR Button (Opens Competitor Badge) */}
          <button
            onClick={onOpenPassModal}
            className="p-2 rounded-full bg-[#251a39] hover:bg-[#2f2444] text-[#feb300] border border-[#3a2f50] transition-colors relative cursor-pointer"
            title="Competitor Fast Pass & QR"
          >
            <span className="material-symbols-outlined text-lg">qr_code_2</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#3ce36a] border-2 border-[#180d2c]"></span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#251a39] text-[#ebdcff] focus:outline-none"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#180d2c] border-b border-[#251a39] px-4 py-4 space-y-3">
          <div className="flex items-center gap-2 bg-[#211635] p-2 rounded-lg border border-[#3a2f50]">
            <span className="material-symbols-outlined text-[#ffd799] text-sm">location_on</span>
            <span className="text-xs text-[#a98a7c]">City:</span>
            <select
              value={currentCity}
              onChange={(e) => {
                onCityChange(e.target.value as City);
                setMobileMenuOpen(false);
              }}
              className="bg-transparent text-xs font-bold text-[#ebdcff] focus:outline-none w-full"
            >
              {GUJARAT_CITIES.map((c) => (
                <option key={c} value={c} className="bg-[#2f2444] text-[#ebdcff]">
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onTabChange('explore');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-xs font-bold text-left ${
                activeTab === 'explore' ? 'bg-[#ff6f00] text-white' : 'bg-[#251a39] text-[#ebdcff]'
              }`}
            >
              {t.exploreEvents}
            </button>
            <button
              onClick={() => {
                onTabChange('competitions');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-xs font-bold text-left ${
                activeTab === 'competitions' ? 'bg-[#ff6f00] text-white' : 'bg-[#251a39] text-[#ebdcff]'
              }`}
            >
              {t.findCompetitions}
            </button>
            <button
              onClick={() => {
                onTabChange('radar');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-xs font-bold text-left ${
                activeTab === 'radar' ? 'bg-[#ff6f00] text-white' : 'bg-[#251a39] text-[#ebdcff]'
              }`}
            >
              {t.liveRadar}
            </button>
            <button
              onClick={() => {
                onTabChange('my-garba');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-xs font-bold text-left ${
                activeTab === 'my-garba' ? 'bg-[#feb300] text-[#432c00]' : 'bg-[#251a39] text-[#ffd799]'
              }`}
            >
              {t.myGarbaHub}
            </button>
            <button
              onClick={() => {
                onTabChange('artists');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-xs font-bold text-left ${
                activeTab === 'artists' ? 'bg-[#ff6f00] text-white' : 'bg-[#251a39] text-[#ebdcff]'
              }`}
            >
              {t.artistsDirectory}
            </button>
            <button
              onClick={() => {
                onTabChange('compare');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-lg text-xs font-bold text-left ${
                activeTab === 'compare' ? 'bg-[#ff6f00] text-white' : 'bg-[#251a39] text-[#ebdcff]'
              }`}
            >
              {t.compareEvents}
            </button>
          </div>

          <div className="pt-2 border-t border-[#251a39] flex justify-between items-center text-xs">
            <button
              onClick={() => {
                onOpenReportModal();
                setMobileMenuOpen(false);
              }}
              className="text-[#ffb4ab] flex items-center gap-1 hover:underline"
            >
              <span className="material-symbols-outlined text-sm">flag</span>
              {t.reportInfo}
            </button>
            <button
              onClick={() => {
                onOpenAiSearch();
                setMobileMenuOpen(false);
              }}
              className="text-[#feb300] font-bold flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              AI Garba Query
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

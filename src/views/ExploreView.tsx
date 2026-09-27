import React, { useState, useMemo } from 'react';
import { GarbaEvent, City } from '../types';
import { GUJARAT_CITIES } from '../data/mockData';
import { Language, TRANSLATIONS } from '../utils/translations';

interface ExploreViewProps {
  events: GarbaEvent[];
  currentCity: City;
  onCityChange: (city: City) => void;
  onSelectEvent: (eventId: string) => void;
  onSelectCompetition: (compId: string) => void;
  onToggleSaveEvent: (eventId: string) => void;
  savedEventIds: string[];
  onOpenReportModal: (eventId: string) => void;
  onNavigateToTab: (tab: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  language: Language;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  events,
  currentCity,
  onCityChange,
  onSelectEvent,
  onSelectCompetition,
  onToggleSaveEvent,
  savedEventIds,
  onOpenReportModal,
  onNavigateToTab,
  searchQuery,
  onSearchChange,
  language
}) => {
  const t = TRANSLATIONS[language];

  // Filters state
  const [selectedDay, setSelectedDay] = useState<number | 'all'>('all');
  const [priceFilter, setPriceFilter] = useState<'all' | 'free' | 'under1000' | '1000plus'>('all');
  const [hasCompetitionOnly, setHasCompetitionOnly] = useState(false);
  const [hasParkingOnly, setHasParkingOnly] = useState(false);
  const [traditionalDressOnly, setTraditionalDressOnly] = useState(false);
  const [selectedCityFilter, setSelectedCityFilter] = useState<string>('All');

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return events.filter((ev) => {
      // Search term
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = ev.name.toLowerCase().includes(q) || ev.gujaratiName.toLowerCase().includes(q);
        const matchesVenue = ev.venue.name.toLowerCase().includes(q) || ev.city.toLowerCase().includes(q);
        const matchesArtist = ev.featuredArtists.some((a) => a.name.toLowerCase().includes(q));
        const matchesComp = ev.competitions.some((c) => c.title.toLowerCase().includes(q));
        if (!matchesName && !matchesVenue && !matchesArtist && !matchesComp) return false;
      }

      // City
      if (selectedCityFilter !== 'All' && ev.city !== selectedCityFilter) {
        return false;
      }

      // Day
      if (selectedDay !== 'all') {
        const hasDay = ev.nineDayProgram.some((dp) => dp.dayNumber === selectedDay);
        if (!hasDay && ev.nineDayProgram.length > 0) return false;
      }

      // Price
      if (priceFilter === 'free' && !ev.isFreeEntry && ev.startingPrice > 0) return false;
      if (priceFilter === 'under1000' && ev.startingPrice > 1000) return false;
      if (priceFilter === '1000plus' && ev.startingPrice < 1000) return false;

      // Has competition
      if (hasCompetitionOnly && ev.competitions.length === 0) return false;

      // Has parking
      if (hasParkingOnly && ev.parkingLots.length === 0) return false;

      // Traditional dress
      if (traditionalDressOnly && ev.dressCodeRequirement !== 'Traditional Mandatory') return false;

      return true;
    });
  }, [
    events,
    searchQuery,
    selectedCityFilter,
    selectedDay,
    priceFilter,
    hasCompetitionOnly,
    hasParkingOnly,
    traditionalDressOnly
  ]);

  return (
    <div className="w-full flex flex-col">
      {/* Hero Discovery Banner */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#130827] via-[#180d2c] to-[#180d2c] pt-24 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#251a39]">
        {/* Ambient Glows */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#ff6f00]/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#feb300]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#251a39] border border-[#ff6f00]/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#feb300] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3ce36a] animate-ping"></span>
            <span>Aaso Sud 1 to 9 · Navratri 2026 Season</span>
            <span className="text-[#a98a7c]">|</span>
            <span className="text-[#3ce36a] flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">verified</span>
              {t.noLoginRequired}
            </span>
          </div>

          <h1 className="font-headline font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#ebdcff] tracking-tight leading-tight max-w-4xl mx-auto">
            {t.heroHeading}
          </h1>

          <p className="text-sm sm:text-base text-[#e1bfb0] max-w-3xl mx-auto leading-relaxed">
            {t.heroSubheading}
          </p>

          {/* Primary Search Bar */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="relative flex items-center bg-[#251a39] border-2 border-[#ff6f00]/50 rounded-full shadow-2xl p-1.5 focus-within:border-[#feb300] transition-all">
              <span className="material-symbols-outlined text-[#a98a7c] text-xl ml-3">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full bg-transparent px-3 py-2 text-sm text-[#ebdcff] placeholder-[#a98a7c] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="p-1 rounded-full text-[#a98a7c] hover:text-white mr-2"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
              <button
                onClick={() => onNavigateToTab('radar')}
                className="bg-[#ff6f00] text-white px-5 py-2 rounded-full text-xs font-bold hover:brightness-110 shadow-md cursor-pointer shrink-0"
              >
                Live Radar
              </button>
            </div>

            {/* Quick search suggestions */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-[#a98a7c]">
              <span className="text-[11px] uppercase font-bold text-[#e1bfb0]">Examples:</span>
              <button onClick={() => onSearchChange('Ahmedabad')} className="hover:text-[#feb300] underline">
                Garba in Ahmedabad
              </button>
              <span>•</span>
              <button onClick={() => setHasParkingOnly(!hasParkingOnly)} className="hover:text-[#feb300] underline">
                Events with Parking
              </button>
              <span>•</span>
              <button onClick={() => onSearchChange('Kinjal Dave')} className="hover:text-[#feb300] underline">
                Kinjal Dave
              </button>
              <span>•</span>
              <button onClick={() => setPriceFilter('free')} className="hover:text-[#feb300] underline">
                Free Community Garba
              </button>
              <span>•</span>
              <button onClick={() => setHasCompetitionOnly(true)} className="hover:text-[#feb300] underline">
                Competitions with Prizes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Exploration Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        {/* Comprehensive Filters Bar (Section 7) */}
        <div className="bg-[#211635] border border-[#3a2f50] p-4 sm:p-5 rounded-2xl shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#3a2f50]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#ebdcff] uppercase tracking-wider">
              <span className="material-symbols-outlined text-[#feb300] text-base">filter_alt</span>
              <span>Instant Discovery Filters</span>
            </div>

            {/* Reset Filters */}
            <button
              onClick={() => {
                setSelectedCityFilter('All');
                setSelectedDay('all');
                setPriceFilter('all');
                setHasCompetitionOnly(false);
                setHasParkingOnly(false);
                setTraditionalDressOnly(false);
                onSearchChange('');
              }}
              className="text-xs text-[#a98a7c] hover:text-[#ffb691] font-semibold transition-colors cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {/* 1. City Filter */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a98a7c] mb-1">
                City / Region
              </label>
              <select
                value={selectedCityFilter}
                onChange={(e) => setSelectedCityFilter(e.target.value)}
                className="w-full bg-[#180d2c] border border-[#3a2f50] text-[#ebdcff] text-xs font-semibold rounded-lg p-2 focus:outline-none focus:border-[#ff6f00]"
              >
                <option value="All">All Gujarat Cities</option>
                {GUJARAT_CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Navratri Day Filter */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a98a7c] mb-1">
                Navratri Night (1-9)
              </label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full bg-[#180d2c] border border-[#3a2f50] text-[#ebdcff] text-xs font-semibold rounded-lg p-2 focus:outline-none focus:border-[#ff6f00]"
              >
                <option value="all">All 9 Sacred Nights</option>
                <option value={1}>Day 1 (Ekam)</option>
                <option value={2}>Day 2 (Bij)</option>
                <option value={3}>Day 3 (Trij)</option>
                <option value={4}>Day 4 (Chouth)</option>
                <option value={5}>Day 5 (Pancham - Finals)</option>
                <option value={6}>Day 6 (Chhath)</option>
                <option value={7}>Day 7 (Satam - Mega Raas)</option>
                <option value={8}>Day 8 (Aatham)</option>
                <option value={9}>Day 9 (Nom Finale)</option>
              </select>
            </div>

            {/* 3. Price Bracket */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a98a7c] mb-1">
                Ticket Price
              </label>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as any)}
                className="w-full bg-[#180d2c] border border-[#3a2f50] text-[#ebdcff] text-xs font-semibold rounded-lg p-2 focus:outline-none focus:border-[#ff6f00]"
              >
                <option value="all">All Prices</option>
                <option value="free">100% Free Entry</option>
                <option value="under1000">Under ₹1,000 / Night</option>
                <option value="1000plus">₹1,000+ Premium / Season</option>
              </select>
            </div>

            {/* 4. Competition Toggle */}
            <div className="flex items-center">
              <label className="flex items-center gap-2 bg-[#180d2c] border border-[#3a2f50] p-2 rounded-lg w-full cursor-pointer hover:border-[#ff6f00] transition-colors">
                <input
                  type="checkbox"
                  checked={hasCompetitionOnly}
                  onChange={(e) => setHasCompetitionOnly(e.target.checked)}
                  className="accent-[#ff6f00] w-4 h-4 rounded"
                />
                <span className="text-xs text-[#ebdcff] font-semibold">Has Competitions</span>
              </label>
            </div>

            {/* 5. Parking Toggle */}
            <div className="flex items-center">
              <label className="flex items-center gap-2 bg-[#180d2c] border border-[#3a2f50] p-2 rounded-lg w-full cursor-pointer hover:border-[#ff6f00] transition-colors">
                <input
                  type="checkbox"
                  checked={hasParkingOnly}
                  onChange={(e) => setHasParkingOnly(e.target.checked)}
                  className="accent-[#ff6f00] w-4 h-4 rounded"
                />
                <span className="text-xs text-[#ebdcff] font-semibold">Reserved Parking</span>
              </label>
            </div>

            {/* 6. Traditional Dress Only */}
            <div className="flex items-center">
              <label className="flex items-center gap-2 bg-[#180d2c] border border-[#3a2f50] p-2 rounded-lg w-full cursor-pointer hover:border-[#ff6f00] transition-colors">
                <input
                  type="checkbox"
                  checked={traditionalDressOnly}
                  onChange={(e) => setTraditionalDressOnly(e.target.checked)}
                  className="accent-[#ff6f00] w-4 h-4 rounded"
                />
                <span className="text-xs text-[#ebdcff] font-semibold">Traditional Attire</span>
              </label>
            </div>
          </div>
        </div>

        {/* Results Counter & Fast View Toggles */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-headline font-bold text-xl text-[#ebdcff]">
              Verified Gujarat Garba Arenas ({filteredEvents.length})
            </h2>
            <p className="text-xs text-[#a98a7c]">
              Real-time radar capacity, gate assignments, and official prize schedules
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigateToTab('radar')}
              className="bg-[#251a39] hover:bg-[#2f2444] text-[#ffd799] border border-[#3a2f50] px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm text-[#3ce36a]">sensors</span>
              <span>Open Live Arena Radar</span>
            </button>
            <button
              onClick={() => onNavigateToTab('compare')}
              className="bg-[#251a39] hover:bg-[#2f2444] text-[#ebdcff] border border-[#3a2f50] px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">compare_arrows</span>
              <span>Compare Fact Sheets</span>
            </button>
          </div>
        </div>

        {/* Events Grid (Section 8) */}
        {filteredEvents.length === 0 ? (
          <div className="bg-[#211635] border border-[#3a2f50] p-12 rounded-2xl text-center space-y-3">
            <span className="material-symbols-outlined text-5xl text-[#a98a7c]">event_busy</span>
            <h3 className="font-headline font-bold text-lg text-[#ebdcff]">No Garba Events Matched</h3>
            <p className="text-xs text-[#a98a7c] max-w-md mx-auto">
              Try broadening your filters or resetting the search query to view all verified Garba grounds in Gujarat.
            </p>
            <button
              onClick={() => {
                setSelectedCityFilter('All');
                setSelectedDay('all');
                setPriceFilter('all');
                setHasCompetitionOnly(false);
                setHasParkingOnly(false);
                setTraditionalDressOnly(false);
                onSearchChange('');
              }}
              className="px-5 py-2 rounded-full bg-[#ff6f00] text-white text-xs font-bold hover:brightness-110 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => {
              const isSaved = savedEventIds.includes(event.id);
              const totalCashPrize = event.competitions.reduce((acc, c) => acc + c.totalCashPool, 0);

              return (
                <div
                  key={event.id}
                  className="bg-[#211635] border border-[#3a2f50] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#ff6f00]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Event Poster Card Header */}
                    <div className="relative h-48 w-full overflow-hidden bg-[#130827]">
                      <img
                        src={event.posterImage}
                        alt={event.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#211635] via-transparent to-black/60"></div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="bg-[#180d2c]/90 backdrop-blur-md text-[#3ce36a] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 border border-[#3ce36a]/30">
                          <span className="material-symbols-outlined text-[12px]">verified</span>
                          {event.verification.status}
                        </span>

                        <button
                          onClick={() => onToggleSaveEvent(event.id)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform active:scale-90 cursor-pointer ${
                            isSaved
                              ? 'bg-[#feb300] text-[#180d2c]'
                              : 'bg-[#180d2c]/80 text-[#ffd799] hover:bg-[#feb300] hover:text-[#180d2c]'
                          }`}
                          title={isSaved ? 'Saved in My Garba' : 'Save to My Garba'}
                        >
                          <span className="material-symbols-outlined text-sm">
                            {isSaved ? 'bookmark_added' : 'bookmark'}
                          </span>
                        </button>
                      </div>

                      {/* Bottom City & Status Ribbon */}
                      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs">
                        <span className="font-bold text-[#ffd799] flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          {event.city}
                        </span>
                        <span className="bg-[#ff6f00]/90 text-white font-bold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
                          {event.status}
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-headline font-bold text-base text-[#ebdcff] group-hover:text-[#ffb691] transition-colors line-clamp-1">
                          {event.name}
                        </h3>
                        <p className="text-xs text-[#feb300] font-semibold line-clamp-1 mt-0.5">
                          {event.gujaratiName}
                        </p>
                        <p className="text-[11px] text-[#a98a7c] line-clamp-1 mt-0.5">
                          {event.venue.name}
                        </p>
                      </div>

                      {/* Artists strip */}
                      <div className="flex items-center gap-2 pt-1 border-t border-[#3a2f50]">
                        <span className="material-symbols-outlined text-sm text-[#ff6f00]">mic</span>
                        <span className="text-xs text-[#ebdcff] font-semibold line-clamp-1">
                          {event.featuredArtists.map((a) => a.name).join(' & ')}
                        </span>
                      </div>

                      {/* Fact Matrix Grid */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-[#e1bfb0] bg-[#180d2c] p-2.5 rounded-xl border border-[#251a39]">
                        <div>
                          <span className="text-[#a98a7c] block">Dates:</span>
                          <span className="font-semibold text-[#ebdcff]">{event.datesText.split('(')[0]}</span>
                        </div>
                        <div>
                          <span className="text-[#a98a7c] block">Entry:</span>
                          <span className="font-bold text-[#feb300]">
                            {event.isFreeEntry ? '100% Free' : `From ₹${event.startingPrice}`}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#a98a7c] block">Parking:</span>
                          <span className="text-[#3ce36a] font-semibold">
                            {event.parkingLots.length > 0 ? `${event.parkingLots.length} Decks Reserved` : 'Nearby only'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#a98a7c] block">Spardha Prize:</span>
                          <span className="font-bold text-[#ffb691]">
                            {totalCashPrize > 0 ? `₹${totalCashPrize.toLocaleString('en-IN')} Pool` : 'Attire Spot'}
                          </span>
                        </div>
                      </div>

                      {/* Dress Code & Verification timestamp */}
                      <div className="flex items-center justify-between text-[10px] text-[#a98a7c] pt-1">
                        <span className="flex items-center gap-1 text-[#ffd799]">
                          <span className="material-symbols-outlined text-xs">checkroom</span>
                          {event.dressCodeRequirement}
                        </span>
                        <span>Verified: {event.verification.lastVerifiedDate.split(',')[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer (Section 8 buttons) */}
                  <div className="p-4 pt-0 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectEvent(event.id)}
                        className="w-full py-2 rounded-xl bg-[#ff6f00] text-white font-bold text-xs hover:brightness-110 shadow-md transition-all cursor-pointer text-center"
                      >
                        {t.viewEvent}
                      </button>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          event.venue.name + ', ' + event.city + ', Gujarat'
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2 rounded-xl bg-[#2f2444] text-[#ebdcff] font-semibold text-xs hover:bg-[#3a2f50] transition-colors text-center flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-sm">navigation</span>
                        {t.getDirections}
                      </a>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#3a2f50] text-[11px]">
                      <button
                        onClick={() => onSelectEvent(event.id)}
                        className="text-[#ffb691] hover:underline cursor-pointer font-semibold"
                      >
                        9-Day Program
                      </button>
                      <button
                        onClick={() => {
                          if (event.competitions.length > 0) {
                            onSelectCompetition(event.competitions[0].id);
                          } else {
                            onSelectEvent(event.id);
                          }
                        }}
                        className="text-[#feb300] hover:underline cursor-pointer font-semibold"
                      >
                        Competitions ({event.competitions.length})
                      </button>
                      <button
                        onClick={() => onOpenReportModal(event.id)}
                        className="text-[#ffb4ab] hover:underline cursor-pointer"
                        title="Report incorrect information"
                      >
                        Report Info
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

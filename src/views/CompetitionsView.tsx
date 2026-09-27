import React, { useState, useMemo } from 'react';
import { CompetitionSummary } from '../types';
import { COMPETITIONS_DATA } from '../data/mockData';
import { Language, TRANSLATIONS } from '../utils/translations';

interface CompetitionsViewProps {
  onSelectCompetition: (compId: string) => void;
  onNavigateTab: (tab: string) => void;
  language: Language;
}

export const CompetitionsView: React.FC<CompetitionsViewProps> = ({
  onSelectCompetition,
  onNavigateTab,
  language
}) => {
  const t = TRANSLATIONS[language];

  // Filters
  const [selectedCity, setSelectedCity] = useState<'All' | 'Ahmedabad' | 'Vadodara' | 'Surat' | 'Rajkot'>('All');
  const [selectedNight, setSelectedNight] = useState<'All' | number>('All');
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [minPrize, setMinPrize] = useState<number>(0);
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(true);
  const [activeSegment, setActiveSegment] = useState<'competitions' | 'arenas'>('competitions');

  // Filter logic
  const filteredComps = useMemo(() => {
    return COMPETITIONS_DATA.filter((comp) => {
      if (selectedNight !== 'All' && comp.nightNumber !== selectedNight) {
        return false;
      }
      if (minPrize > 0 && comp.firstPrize.cash < minPrize) {
        return false;
      }
      if (selectedFormat !== 'All' && comp.category !== selectedFormat) {
        return false;
      }
      return true;
    });
  }, [selectedNight, minPrize, selectedFormat]);

  const spotlightComp = COMPETITIONS_DATA[0]; // Best Garba Couple Spardha

  return (
    <div className="w-full flex flex-col bg-[#180d2c] text-[#ebdcff] min-h-screen pt-20">
      {/* Top Announcement Banner (Screenshot E) */}
      <section className="relative w-full overflow-hidden bg-[#130827] px-4 sm:px-6 lg:px-8 py-10 border-b border-[#251a39] shadow-xl">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#feb300]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-[#ff6f00]/15 blur-2xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2f2444] border border-[#3a2f50] shadow-sm text-xs">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#3ce36a] animate-pulse"></span>
              <span className="text-[11px] uppercase tracking-wider text-[#3ce36a] font-bold">
                Live Official Registrations • Navratri 2026
              </span>
              <span className="text-[#a98a7c] mx-1">•</span>
              <span className="text-[11px] text-[#feb300] font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">verified</span> Gujarat Cultural Trust
              </span>
            </div>

            <h1 className="font-headline font-extrabold text-3xl sm:text-5xl text-[#ebdcff] tracking-tight">
              Gujarat Navratri <span className="text-[#feb300]">Spardha Mahotsav</span> 2026
            </h1>

            <p className="text-sm text-[#e1bfb0] max-w-2xl leading-relaxed">
              Discover verified Raas & Garba spardha across heritage mandlis and arena stadiums. Real-time slot telemetry, transparent jury matrices, and guaranteed digital prize purse escrow.
            </p>
          </div>

          {/* Quick Metrics Ribbon (Screenshot E) */}
          <div className="grid grid-cols-3 gap-3 w-full xl:w-auto bg-[#211635] border border-[#3a2f50] p-4 rounded-2xl shadow-md min-w-[340px]">
            <div className="px-3 py-1 border-r border-[#3a2f50]">
              <span className="text-[10px] uppercase tracking-wider text-[#a98a7c] font-bold block">Total Prize Purse</span>
              <span className="font-prize-display text-2xl text-[#feb300] font-extrabold">₹8.5 Lakh</span>
              <span className="text-[10px] text-[#3ce36a] font-semibold block mt-0.5">Escrow Secured</span>
            </div>
            <div className="px-3 py-1 border-r border-[#3a2f50]">
              <span className="text-[10px] uppercase tracking-wider text-[#a98a7c] font-bold block">Active Spardhas</span>
              <span className="font-prize-display text-2xl text-[#ff6f00] font-extrabold">18</span>
              <span className="text-[10px] text-[#e1bfb0] block mt-0.5">Across 6 Arenas</span>
            </div>
            <div className="px-3 py-1">
              <span className="text-[10px] uppercase tracking-wider text-[#a98a7c] font-bold block">Audited Jury</span>
              <span className="font-prize-display text-2xl text-[#ffb691] font-extrabold">34</span>
              <span className="text-[10px] text-[#3ce36a] font-semibold block mt-0.5">Govt. Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Exploration Workspace */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sticky Desktop Filter Sidebar (Screenshot E) */}
          <aside className="w-full lg:w-[290px] shrink-0 sticky top-24 bg-[#211635] border border-[#3a2f50] p-5 rounded-2xl shadow-md space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-[#3a2f50]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#feb300] text-lg">tune</span>
                <h2 className="font-headline font-bold text-sm text-[#ebdcff]">Filter Spardha</h2>
              </div>
              <button
                onClick={() => {
                  setSelectedCity('All');
                  setSelectedNight('All');
                  setSelectedFormat('All');
                  setMinPrize(0);
                  setVerifiedOnly(true);
                }}
                className="text-[10px] text-[#a98a7c] hover:text-[#ffb691] font-bold uppercase tracking-wider cursor-pointer"
              >
                Reset All
              </button>
            </div>

            {/* Location Arena */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#e1bfb0]">
                <span>Location Arena</span>
                <span className="text-[#3ce36a] text-[10px]">Active</span>
              </div>
              <div className="space-y-1.5 text-xs">
                {[
                  { city: 'Ahmedabad', count: 12 },
                  { city: 'Vadodara', count: 3 },
                  { city: 'Surat', count: 2 },
                  { city: 'Rajkot', count: 1 }
                ].map((item) => (
                  <label
                    key={item.city}
                    className="flex items-center justify-between p-1.5 rounded-lg hover:bg-[#251a39] cursor-pointer"
                  >
                    <span className="flex items-center gap-2 text-[#ebdcff]">
                      <input
                        type="radio"
                        name="city-radio"
                        checked={selectedCity === item.city}
                        onChange={() => setSelectedCity(item.city as any)}
                        className="accent-[#ff6f00]"
                      />
                      {item.city}
                    </span>
                    <span className="text-[10px] bg-[#2f2444] px-2 py-0.5 rounded-full text-[#feb300] font-semibold">
                      {item.count} Spardhas
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navratri Night Picker (Screenshot E) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#e1bfb0]">
                <span>Navratri Night (રાત્રિ)</span>
                <span className="text-[10px] text-[#a98a7c]">Oct 2026</span>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                <button
                  onClick={() => setSelectedNight('All')}
                  className={`py-1.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                    selectedNight === 'All'
                      ? 'bg-[#ff6f00] text-white shadow-md'
                      : 'bg-[#2f2444] text-[#ebdcff] hover:bg-[#3a2f50]'
                  }`}
                >
                  All
                </button>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <button
                    key={n}
                    onClick={() => setSelectedNight(n)}
                    className={`py-1.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                      selectedNight === n
                        ? 'bg-[#ff6f00] text-white shadow-md'
                        : n === 3 || n === 5
                        ? 'bg-[#2f2444] text-[#feb300] hover:bg-[#3a2f50]'
                        : 'bg-[#2f2444] text-[#ebdcff] hover:bg-[#3a2f50]'
                    }`}
                  >
                    N-{n}
                  </button>
                ))}
              </div>
            </div>

            {/* Competition Formats */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e1bfb0] block">
                Competition Format
              </span>
              <div className="space-y-1.5 text-xs text-[#ebdcff]">
                {[
                  { label: 'All Formats', val: 'All' },
                  { label: 'Couple Garba (દંપતી રાસ)', val: 'Best Traditional Garba Couple' },
                  { label: 'Mega Group Raas / Mandli', val: 'Mega Mandli Raas Spardha' },
                  { label: 'Traditional Chaniya & Kediya', val: 'Best Authentic Heritage Chaniyo' },
                  { label: 'Junior Performer (U-16)', val: 'Junior Garba Rising Star' }
                ].map((fmt) => (
                  <label key={fmt.val} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="comp_fmt"
                      checked={selectedFormat === fmt.val}
                      onChange={() => setSelectedFormat(fmt.val)}
                      className="accent-[#ff6f00]"
                    />
                    <span>{fmt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Minimum 1st Prize Floor */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e1bfb0] block">
                Minimum 1st Prize
              </span>
              <div className="space-y-1.5 text-xs text-[#ebdcff]">
                {[
                  { label: 'All Cash Brackets', val: 0 },
                  { label: '₹25,000+ per category', val: 25000 },
                  { label: '₹50,000+ Premier Title', val: 50000 },
                  { label: '₹1,00,000+ Championship', val: 75000 }
                ].map((tier) => (
                  <label key={tier.val} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="prize-bracket"
                      checked={minPrize === tier.val}
                      onChange={() => setMinPrize(tier.val)}
                      className="accent-[#ff6f00]"
                    />
                    <span>{tier.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Officially Verified Switch */}
            <div className="pt-2 border-t border-[#3a2f50] space-y-2">
              <div className="p-3 bg-[#251a39] border border-[#3a2f50] rounded-xl space-y-1">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-xs font-bold text-[#ebdcff]">Officially Verified Only</span>
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                    className="accent-[#3ce36a] w-4 h-4 rounded"
                  />
                </label>
                <p className="text-[10px] text-[#a98a7c] leading-tight">
                  Filters only competitions with Gujarat State Trust accreditation and judge background verification.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Results Display Area */}
          <section className="flex-1 w-full space-y-6">
            {/* Controls Bar (Screenshot E) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#211635] border border-[#3a2f50] p-3 sm:p-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-1.5 bg-[#130827] p-1 rounded-full w-fit">
                <button
                  onClick={() => setActiveSegment('competitions')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeSegment === 'competitions'
                      ? 'bg-[#ff6f00] text-white shadow-sm'
                      : 'text-[#e1bfb0] hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">emoji_events</span>
                  <span>Competitions ({filteredComps.length} Active)</span>
                </button>
                <button
                  onClick={() => onNavigateTab('explore')}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#e1bfb0] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">stadium</span>
                  <span>Festival Arenas (42)</span>
                </button>
              </div>

              {/* Active Filter Chips */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1 bg-[#2f2444] border border-[#3a2f50] px-3 py-1 rounded-full text-xs text-[#feb300] font-semibold">
                  <span>Ahmedabad</span>
                </div>
                <div className="flex items-center gap-1 bg-[#2f2444] border border-[#3a2f50] px-3 py-1 rounded-full text-xs text-[#feb300] font-semibold">
                  <span>Couples & Group</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#2f2444] border border-[#3a2f50] px-3 py-1 rounded-full text-xs text-[#3ce36a] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ce36a]"></span>
                  <span>Verified Only</span>
                </div>
              </div>
            </div>

            {/* Featured Spotlight Hero Card (Screenshot E) */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#2f2444] via-[#251a39] to-[#130827] border border-[#ff6f00]/40 shadow-2xl p-6 lg:p-8">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#ff6f00]/20 blur-3xl pointer-events-none"></div>

              <div className="relative z-10 flex flex-col xl:flex-row gap-6 items-start justify-between">
                <div className="space-y-4 max-w-2xl">
                  {/* Pill Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full bg-[#ff6f00] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">local_fire_department</span>
                      High Stake Spardha
                    </span>
                    <span className="px-3 py-0.5 rounded-full bg-[#00b349]/30 text-[#3ce36a] text-[11px] font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      Officially Verified
                    </span>
                    <span className="px-3 py-0.5 rounded-full bg-[#3a2f50] text-[#feb300] text-[11px] font-semibold">
                      Aaso Sud 5 • Live Final Round
                    </span>
                  </div>

                  {/* Title & Venue */}
                  <div>
                    <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-[#ebdcff] tracking-tight">
                      Best Garba Couple Spardha (દંપતી રાસ)
                    </h3>
                    <p className="text-xs sm:text-sm text-[#e1bfb0] mt-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#ffd799] text-base">location_on</span>
                      <strong className="text-[#ebdcff]">GMDC Ground Rangtaali Navratri</strong> • Arena Gate 2, Vastrapur, Ahmedabad
                    </p>
                  </div>

                  {/* Jury Criteria Matrix Snapshot */}
                  <div className="space-y-1.5 max-w-lg bg-[#130827]/80 border border-[#3a2f50] p-3 rounded-xl">
                    <div className="flex items-center justify-between text-[11px] text-[#e1bfb0]">
                      <span className="font-bold text-[#ebdcff]">Jury Criteria Matrix</span>
                      <span>Choreography 40% • Attire 30% • Rhythm/Taal 30%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#3a2f50] flex overflow-hidden">
                      <div className="h-full bg-[#ff6f00] w-[40%]" title="Choreography: 40%"></div>
                      <div className="h-full bg-[#feb300] w-[30%]" title="Authentic Attire: 30%"></div>
                      <div className="h-full bg-[#3ce36a] w-[30%]" title="Rhythm: 30%"></div>
                    </div>
                  </div>

                  {/* Live Slots Capacity Meter */}
                  <div className="space-y-1.5 max-w-lg">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-[#ebdcff]">
                        <span className="w-2 h-2 rounded-full bg-[#ffb4ab] animate-ping"></span>
                        <strong className="text-[#ffb4ab]">Fast Filling:</strong> 72 of 100 Couple Slots Locked
                      </span>
                      <span className="text-[#feb300] font-bold">28 Entries Left</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#130827] overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#feb300] to-[#ff6f00] w-[72%] rounded-full"></div>
                    </div>
                    <p className="text-[10px] text-[#a98a7c]">
                      Digital RFID pair bands issued at Arena Control Desk prior to 8:30 PM.
                    </p>
                  </div>
                </div>

                {/* Right Action & Honorarium Widget */}
                <div className="w-full xl:w-80 bg-[#130827]/90 border border-[#3a2f50] p-6 rounded-2xl shadow-lg flex flex-col justify-between space-y-4 shrink-0 text-center">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#a98a7c] font-bold block">
                      First Place Honorarium
                    </span>
                    <div className="font-prize-display text-3xl sm:text-4xl text-[#feb300] my-1">
                      ₹51,000
                    </div>
                    <div className="inline-block px-3 py-0.5 rounded-full bg-[#251a39] text-xs text-[#ffb691] font-semibold">
                      + Gold Trimmed Heritage Trophy
                    </div>
                    <span className="block text-[11px] text-[#a98a7c] mt-1">
                      Total Pool: ₹90,000 (Top 5 Finisher Medals)
                    </span>
                  </div>

                  <div className="space-y-1 text-xs text-[#e1bfb0] bg-[#180d2c] p-2.5 rounded-xl border border-[#251a39] text-left">
                    <div className="flex justify-between">
                      <span>Entry Fee:</span>
                      <span className="text-[#3ce36a] font-bold">₹100 / Couple</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reporting:</span>
                      <span className="text-[#ebdcff] font-semibold">8:45 PM Sharp</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => onSelectCompetition(spotlightComp.id)}
                      className="w-full py-2.5 rounded-full bg-[#ff6f00] hover:bg-[#ff6f00]/90 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Register Couple Pair</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                    <button
                      onClick={() => onSelectCompetition(spotlightComp.id)}
                      className="w-full py-1.5 rounded-full bg-[#251a39] hover:bg-[#2f2444] text-[#ebdcff] text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Judging Criteria & Rules
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3-Column Spardha Cards Grid (Screenshot E) */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredComps.map((comp) => (
                <div
                  key={comp.id}
                  className="flex flex-col justify-between bg-[#211635] border border-[#3a2f50] rounded-2xl p-5 shadow-md hover:border-[#ff6f00]/50 transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#2f2444] text-[#feb300]">
                        {comp.category}
                      </span>
                      <span className="text-[10px] font-bold text-[#3ce36a] bg-[#00b349]/20 px-2 py-0.5 rounded-full">
                        {comp.entryFee === 0 ? 'Free Entry' : `₹${comp.entryFee} Entry`}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-headline font-bold text-base text-[#ebdcff] group-hover:text-[#ffb691] transition-colors">
                        {comp.title}
                      </h4>
                      <p className="text-xs text-[#feb300] font-semibold mt-0.5">
                        {comp.gujaratiTitle}
                      </p>
                      <p className="text-[11px] text-[#a98a7c] mt-0.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">location_on</span>
                        {comp.locationArea}
                      </p>
                    </div>

                    {/* Prize Block */}
                    <div className="bg-[#180d2c] border border-[#251a39] p-3 rounded-xl flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase text-[#a98a7c] font-bold block">1st Prize</span>
                        <span className="font-prize-display text-lg text-[#feb300]">
                          ₹{comp.firstPrize.cash.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase text-[#a98a7c] font-bold block">Award Honor</span>
                        <span className="text-xs text-[#ebdcff] font-semibold">{comp.firstPrize.trophyTitle.split('&')[0]}</span>
                      </div>
                    </div>

                    {/* Slots Fill Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-[#e1bfb0]">
                        <span>Entries: {comp.registeredSlots}/{comp.maxSlots}</span>
                        <span className="text-[#3ce36a] font-bold">
                          {comp.maxSlots - comp.registeredSlots} Available
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#180d2c] overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#feb300] to-[#ff6f00] rounded-full"
                          style={{ width: `${(comp.registeredSlots / comp.maxSlots) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="pt-4 mt-3 border-t border-[#3a2f50] flex items-center justify-between">
                    <span className="text-[11px] text-[#a98a7c]">{comp.dateStr}</span>
                    <button
                      onClick={() => onSelectCompetition(comp.id)}
                      className="px-4 py-1.5 rounded-full bg-[#ff6f00] text-white text-xs font-bold hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                    >
                      View & Register
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Community Callout Banner (Screenshot E) */}
            <div className="w-full rounded-2xl bg-[#251a39] border border-[#3a2f50] p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#feb300]/20 flex items-center justify-center shrink-0 text-[#feb300]">
                  <span className="material-symbols-outlined text-2xl">campaign</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-headline font-bold text-base text-[#ebdcff]">
                    Organizing a Local Pol, Society, or Mandli Spardha?
                  </h4>
                  <p className="text-xs text-[#e1bfb0] max-w-xl leading-relaxed">
                    Get listed on the Gujarat State Official Discovery portal to enable digital judge scoring, participant crowd management, and trust-backed cash award disbursement.
                  </p>
                </div>
              </div>
              <button
                onClick={() => alert('Application form opened: State Trust inspectors will review your competition within 24 hours.')}
                className="px-6 py-2.5 rounded-full bg-[#feb300] text-[#432c00] font-headline font-bold text-xs hover:brightness-105 active:scale-95 transition-all shrink-0 cursor-pointer"
              >
                Host Competition & Apply for Badge
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

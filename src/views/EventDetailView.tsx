import React, { useState } from 'react';
import { GarbaEvent } from '../types';
import { Language, TRANSLATIONS } from '../utils/translations';

interface EventDetailViewProps {
  event: GarbaEvent;
  onBack: () => void;
  onSelectCompetition: (compId: string) => void;
  onOpenReportModal: (eventId: string) => void;
  onNavigateTab: (tab: string) => void;
  language: Language;
}

export const EventDetailView: React.FC<EventDetailViewProps> = ({
  event,
  onBack,
  onSelectCompetition,
  onOpenReportModal,
  onNavigateTab,
  language
}) => {
  const t = TRANSLATIONS[language];

  // Active Day in 9-Day Program
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(5);

  // Booking Card States
  const [passType, setPassType] = useState<'single' | 'season'>('single');
  const [quantity, setQuantity] = useState<number>(1);
  const [addCarParking, setAddCarParking] = useState<boolean>(false);
  const [addBikeParking, setAddBikeParking] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  // FAQ open/close states
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Map Modal
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);

  // Share Notification
  const [shareToast, setShareToast] = useState<string | null>(null);

  // Active program day
  const activeDay = event.nineDayProgram.find((d) => d.dayNumber === selectedDayNumber) || event.nineDayProgram[0] || {
    dayNumber: 5,
    gujaratiDayName: 'Pancham (પાંચમ)',
    dateStr: 'Thu, 15 Oct 2026',
    shortDate: 'Oct 15',
    openingTime: '07:30 PM',
    closingTime: '01:00 AM',
    headlinerArtist: 'Kinjal Dave & The Sur Mandli Live Band',
    expectedCrowd: 14820,
    highlightTheme: 'Grand Best Garba Couple Championship Finals',
    sessions: [
      { time: '08:00 PM', activity: 'Gates & Security Validation Open', stageOrArea: 'All 4 Gates', status: 'Scheduled' },
      { time: '08:30 PM', activity: 'Maa Ambe Stuti & Opening 2-Taali Ras', stageOrArea: 'North Arena', status: 'Live', isHighlight: true, performer: 'Kinjal Dave' },
      { time: '09:30 PM', activity: 'Best Garba Couple Spardha - Live Round 1', stageOrArea: 'Circle A Judging Stage', status: 'Scheduled', isHighlight: true },
      { time: '10:30 PM', activity: 'Sanedo & Dodhiya High-Tempo Whirlwind', stageOrArea: 'Concentric Turf Rings', status: 'Scheduled' },
      { time: '11:30 PM', activity: 'Traditional Dress Contest Jury Parade', stageOrArea: 'Central Runway', status: 'Scheduled' },
      { time: '12:00 AM', activity: 'Maha Aarti of Maa Jagdamba & Daily Spot Prizes', stageOrArea: 'Mataji Chowk', status: 'Scheduled', isHighlight: true }
    ]
  };

  // Price calculations
  const baseRate = passType === 'single' ? event.startingPrice : 6499;
  const parkingExtra = (addCarParking ? 150 : 0) + (addBikeParking ? 50 : 0);
  const totalAmountDue = (baseRate + parkingExtra) * quantity;

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: `${event.name} - Gujarat Navratri 2026`,
        text: `Check out ${event.name} in ${event.city}! Tickets, parking, and 9-day schedule:`,
        url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      setShareToast('Event URL copied to clipboard!');
      setTimeout(() => setShareToast(null), 2500);
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#180d2c] min-h-screen">
      {/* Toast Notification */}
      {shareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#3ce36a] text-[#003912] font-bold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4">
          <span className="material-symbols-outlined text-base">check_circle</span>
          <span>{shareToast}</span>
        </div>
      )}

      {/* Immersive Event Hero Section (Screenshot B) */}
      <div className="relative w-full overflow-hidden bg-[#130827] pt-24 pb-14 border-b border-[#251a39]">
        {/* Background Visual Texture */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 pointer-events-none"
          style={{ backgroundImage: `url(${event.heroBannerImage || event.posterImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#180d2c] via-[#180d2c]/85 to-transparent"></div>
        <div className="absolute -top-24 left-1/3 w-96 h-96 bg-[#ff6f00]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#feb300]/15 rounded-full blur-2xl pointer-events-none"></div>

        {/* Hero Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Back button & Breadcrumb */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffd799] hover:text-[#ffb691] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Back to Gujarat Garba Discovery</span>
          </button>

          {/* Badges Strip */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2f2444]/90 text-[#ffd799] text-xs font-semibold shadow-sm border border-[#3a2f50]">
              <span className="material-symbols-outlined text-sm text-[#3ce36a]">verified</span>
              {event.verification.status}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#211635] text-[#3ce36a] text-xs font-semibold shadow-sm border border-[#3a2f50]">
              <span className="material-symbols-outlined text-sm">volunteer_activism</span>
              {event.organizerName}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ff6f00]/20 text-[#ffdbcb] text-xs font-bold uppercase tracking-wider">
              {event.edition}
            </span>
          </div>

          {/* Main Title Block with Gujarati Transliteration */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-4xl space-y-2">
              <h1 className="font-headline font-extrabold text-3xl sm:text-5xl text-[#ebdcff] tracking-tight leading-tight">
                {event.name}
                <span className="block text-[#feb300] font-headline text-2xl sm:text-3xl mt-1 tracking-normal font-bold">
                  {event.gujaratiName}
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#e1bfb0] max-w-3xl leading-relaxed">
                {event.tagline || event.description}
              </p>
            </div>

            {/* Hero Metadata Ribbon */}
            <div className="bg-[#251a39]/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#3a2f50] shadow-md text-left lg:text-right shrink-0">
              <span className="text-[11px] uppercase text-[#a98a7c] tracking-wider font-bold block">
                Single Passes From
              </span>
              <span className="font-prize-display text-3xl text-[#feb300]">
                {event.isFreeEntry ? 'Free' : `₹${event.startingPrice}`}
                <span className="text-xs text-[#e1bfb0] font-normal ml-1">/ night</span>
              </span>
            </div>
          </div>

          {/* Compact Location & Date Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#251a39]/80 backdrop-blur-lg border border-[#3a2f50] shadow-lg">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[#ebdcff] text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ff6f00] text-lg">pin_drop</span>
                <span>{event.venue.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#feb300] text-lg">event_available</span>
                <span>{event.datesText}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#3ce36a] text-lg">schedule</span>
                <span>Gates Open 07:30 PM Nightly</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <a
                href="#passes-booking"
                className="flex-1 lg:flex-none text-center px-6 py-2.5 rounded-full bg-[#ff6f00] text-white text-xs font-bold shadow-md hover:brightness-110 active:scale-95 transition-all"
              >
                {t.bookPasses}
              </a>
              <button
                onClick={() => onNavigateTab('competitions')}
                className="px-4 py-2.5 rounded-full bg-[#2f2444] text-[#ebdcff] text-xs font-bold hover:bg-[#3a2f50] active:scale-95 transition-all cursor-pointer"
              >
                View Competitions
              </button>
              <button
                onClick={() => setIsMapModalOpen(true)}
                className="p-2.5 rounded-full bg-[#211635] text-[#e1bfb0] hover:text-white active:scale-95 transition-all cursor-pointer"
                title="Ground Blueprint & Gate Map"
              >
                <span className="material-symbols-outlined text-base">map</span>
              </button>
              <button
                onClick={handleShare}
                className="p-2.5 rounded-full bg-[#211635] text-[#e1bfb0] hover:text-white active:scale-95 transition-all cursor-pointer"
                title="Share Event"
              >
                <span className="material-symbols-outlined text-base">share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Highlights Bento Row (Screenshot B) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {/* Item 1 */}
          <div className="bg-[#2f2444] border border-[#3a2f50] p-4 rounded-xl shadow-md">
            <div className="w-8 h-8 rounded-lg bg-[#ff6f00]/20 flex items-center justify-center text-[#ff6f00] mb-2">
              <span className="material-symbols-outlined text-lg">mic</span>
            </div>
            <div className="font-bold text-xs text-[#ebdcff] line-clamp-1">
              {event.featuredArtists.map((a) => a.name).join(' & ')}
            </div>
            <div className="text-[11px] text-[#e1bfb0]">9 Nights Leading Icons</div>
          </div>

          {/* Item 2 */}
          <div className="bg-[#2f2444] border border-[#3a2f50] p-4 rounded-xl shadow-md">
            <div className="w-8 h-8 rounded-lg bg-[#feb300]/20 flex items-center justify-center text-[#feb300] mb-2">
              <span className="material-symbols-outlined text-lg">emoji_events</span>
            </div>
            <div className="font-bold text-xs text-[#ebdcff] line-clamp-1">
              {event.competitions.length > 0 ? `${event.competitions.length} Sanctioned Spardha` : 'Spot Judging'}
            </div>
            <div className="text-[11px] text-[#e1bfb0]">Raas, Couple, Dress, Solo</div>
          </div>

          {/* Item 3 */}
          <div className="bg-[#2f2444] border border-[#3a2f50] p-4 rounded-xl shadow-md">
            <div className="w-8 h-8 rounded-lg bg-[#00b349]/20 flex items-center justify-center text-[#3ce36a] mb-2">
              <span className="material-symbols-outlined text-lg">wallet</span>
            </div>
            <div className="font-bold text-xs text-[#feb300]">₹2,00,000 Pool</div>
            <div className="text-[11px] text-[#e1bfb0]">Official Cash Prizes</div>
          </div>

          {/* Item 4 */}
          <div className="bg-[#2f2444] border border-[#3a2f50] p-4 rounded-xl shadow-md">
            <div className="w-8 h-8 rounded-lg bg-[#3f3354] flex items-center justify-center text-[#ffd799] mb-2">
              <span className="material-symbols-outlined text-lg">local_parking</span>
            </div>
            <div className="font-bold text-xs text-[#ebdcff] line-clamp-1">1,800+ Reserved Bays</div>
            <div className="text-[11px] text-[#e1bfb0]">Fast RFID & Metro Shuttles</div>
          </div>

          {/* Item 5 */}
          <div className="col-span-2 sm:col-span-1 bg-[#2f2444] border border-[#3a2f50] p-4 rounded-xl shadow-md">
            <div className="w-8 h-8 rounded-lg bg-[#ffb691]/20 flex items-center justify-center text-[#ffb691] mb-2">
              <span className="material-symbols-outlined text-lg">restaurant</span>
            </div>
            <div className="font-bold text-xs text-[#ebdcff] line-clamp-1">
              {event.foodZone.stallsCount}+ Kathiyawadi Stalls
            </div>
            <div className="text-[11px] text-[#e1bfb0]">Pure Satvik & Chaat Hub</div>
          </div>
        </div>
      </div>

      {/* Two-Column Body Section (Screenshot B: Left ~65% / Right ~35%) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Competitions Showcase */}
            <section className="space-y-4" id="competitions">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#2f2444] via-[#251a39] to-[#211635] border border-[#3a2f50] shadow-xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <span className="inline-block px-3 py-0.5 rounded-full bg-[#feb300]/20 text-[#ffd799] text-[10px] font-bold uppercase tracking-wide mb-1">
                      Gujarat Garba Mahotsav Sanctioned #GJ-2026-88
                    </span>
                    <h2 className="font-headline font-bold text-2xl text-[#ebdcff]">
                      5 State Championship Spardhas
                    </h2>
                    <p className="text-xs text-[#e1bfb0] max-w-xl mt-1 leading-relaxed">
                      Win trophies, State Art Council recognition, and ₹2,00,000 distributed on Sharad Poornima Grand Finale.{' '}
                      <strong className="text-[#feb300]">Registered competitors receive free arena multi-day pass.</strong>
                    </p>
                  </div>
                  <div className="bg-[#130827] px-5 py-3 rounded-xl text-center border border-[#3a2f50] shrink-0">
                    <span className="text-[10px] uppercase text-[#a98a7c] block font-bold">Total Cash Distributed</span>
                    <span className="font-prize-display text-2xl text-[#feb300]">₹2,00,000</span>
                  </div>
                </div>
              </div>

              {/* Competition Visual Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.competitions.map((comp) => (
                  <div
                    key={comp.id}
                    className="p-5 rounded-xl bg-[#251a39] border border-[#3a2f50] shadow-md flex flex-col justify-between hover:border-[#ff6f00] transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-[#ff6f00]/20 text-[#ffb691] text-[10px] font-bold">
                          Day {comp.nightNumber} · {comp.category}
                        </span>
                        <span className="text-[11px] text-[#3ce36a] font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3ce36a]"></span>
                          {comp.registeredSlots}/{comp.maxSlots} Filled
                        </span>
                      </div>
                      <h3 className="font-headline font-bold text-base text-[#ebdcff]">
                        {comp.title}
                      </h3>
                      <p className="text-xs text-[#e1bfb0] mt-1 line-clamp-2">
                        {comp.rules[0] || 'Strict authentic Gujarati rhythmic cycles and attire.'}
                      </p>
                      <div className="mt-3 p-2 bg-[#130827] rounded-lg flex items-center justify-between text-xs">
                        <span className="text-[#a98a7c]">1st Prize</span>
                        <span className="font-bold text-[#feb300]">
                          ₹{comp.firstPrize.cash.toLocaleString('en-IN')} + {comp.firstPrize.trophyTitle}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-2 border-t border-[#3a2f50] flex items-center justify-between">
                      <span className="text-xs text-[#e1bfb0]">
                        {comp.entryFee === 0 ? 'Free Entry' : `Fee: ₹${comp.entryFee}`}
                      </span>
                      <button
                        onClick={() => onSelectCompetition(comp.id)}
                        className="px-4 py-1.5 rounded-full bg-[#ff6f00] text-white text-xs font-bold hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                      >
                        Register Pair / Entry
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. 9-Day Interactive Navratri Schedule (Screenshot B) */}
            <section className="p-6 rounded-2xl bg-[#251a39] border border-[#3a2f50] shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="font-headline font-bold text-xl text-[#ebdcff]">
                    9-Day Festival Timeline
                  </h2>
                  <p className="text-xs text-[#e1bfb0]">
                    Switch dates to view daily headliner artists, specific rounds, and timings.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#feb300] bg-[#130827] border border-[#3a2f50] px-3 py-1 rounded-full w-fit">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>Live Gujarat Time (IST)</span>
                </div>
              </div>

              {/* Day Tabs Horizontal Strip */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDayNumber(d)}
                    className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                      selectedDayNumber === d
                        ? 'bg-[#ff6f00] text-white shadow-lg'
                        : 'bg-[#211635] text-[#e1bfb0] hover:text-white border border-[#3a2f50]'
                    }`}
                  >
                    <span className="block text-[10px] opacity-75 font-normal">
                      Oct {10 + d}
                    </span>
                    Day {d}
                  </button>
                ))}
              </div>

              {/* Active Day Content Card */}
              <div className="bg-[#130827] p-5 rounded-xl border border-[#3a2f50] space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-[#251a39]">
                  <div>
                    <span className="text-[#feb300] text-[10px] font-bold uppercase tracking-wider block">
                      Highlight Artist of the Night
                    </span>
                    <div className="font-bold text-sm text-[#ebdcff] flex items-center gap-1.5 mt-0.5">
                      <span className="material-symbols-outlined text-[#ff6f00] text-base">stars</span>
                      <span>{activeDay.headlinerArtist}</span>
                    </div>
                  </div>
                  <span className="mt-2 sm:mt-0 px-3 py-1 rounded bg-[#feb300]/20 text-[#feb300] text-xs font-bold">
                    Expected: {activeDay.expectedCrowd.toLocaleString('en-IN')}+ Dancers
                  </span>
                </div>

                {/* Detailed Timeline Milestones */}
                <div className="space-y-4 relative pl-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#3a2f50]">
                  {activeDay.sessions.map((sess, idx) => (
                    <div key={idx} className="relative flex items-start gap-4">
                      <span
                        className={`absolute -left-6 top-1 w-2.5 h-2.5 rounded-full ${
                          sess.isHighlight ? 'bg-[#ff6f00] ring-4 ring-[#ff6f00]/30' : 'bg-[#a98a7c]'
                        }`}
                      />
                      <span
                        className={`text-xs w-20 shrink-0 font-bold ${
                          sess.isHighlight ? 'text-[#ff6f00]' : 'text-[#a98a7c]'
                        }`}
                      >
                        {sess.time}
                      </span>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-xs text-[#ebdcff]">{sess.activity}</h4>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#211635] text-[#ffd799]">
                            {sess.stageOrArea}
                          </span>
                        </div>
                        {sess.performer && (
                          <p className="text-[11px] text-[#feb300]">Performer: {sess.performer}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Venue Layout & Ground Logistics (Screenshot B) */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-headline font-bold text-xl text-[#ebdcff]">
                  Ground Layout & Gate Logistics
                </h2>
                <span className="text-[#3ce36a] text-xs font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3ce36a] animate-pulse"></span>
                  Live Arena Status: Operational
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#251a39] border border-[#3a2f50] flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2f2444] flex items-center justify-center text-[#ff6f00] shrink-0">
                    <span className="material-symbols-outlined text-2xl">crop_landscape</span>
                  </div>
                  <div>
                    <span className="font-prize-display text-lg text-[#ebdcff]">
                      {event.venue.areaSquareFeet.toLocaleString('en-IN')} sq.ft
                    </span>
                    <p className="text-xs text-[#e1bfb0]">{event.venue.surfaceType}</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#251a39] border border-[#3a2f50] flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2f2444] flex items-center justify-center text-[#feb300] shrink-0">
                    <span className="material-symbols-outlined text-2xl">groups</span>
                  </div>
                  <div>
                    <span className="font-prize-display text-lg text-[#ebdcff]">
                      {event.venue.maxDancerCapacity.toLocaleString('en-IN')} Max
                    </span>
                    <p className="text-xs text-[#e1bfb0]">Cap-Controlled Dancer Limit</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#251a39] border border-[#3a2f50] flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2f2444] flex items-center justify-center text-[#3ce36a] shrink-0">
                    <span className="material-symbols-outlined text-2xl">local_police</span>
                  </div>
                  <div>
                    <span className="font-prize-display text-lg text-[#ebdcff]">3-Tier Security</span>
                    <p className="text-xs text-[#e1bfb0]">CCTV + Abhayam 181 Women Desk</p>
                  </div>
                </div>
              </div>

              {/* Designated Gate Assignments */}
              <div className="p-4 rounded-xl bg-[#251a39] border border-[#3a2f50] space-y-3">
                <h3 className="font-headline font-bold text-sm text-[#ebdcff]">
                  Designated Gate Assignments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {event.venue.gates.map((g) => (
                    <div key={g.gateNumber} className="p-3 rounded-lg bg-[#130827] border border-[#251a39]">
                      <span className="font-bold text-xs text-[#feb300] block">
                        Gate {g.gateNumber} · {g.title}
                      </span>
                      <span className="text-[11px] text-[#e1bfb0] block mt-0.5">{g.targetAudience}</span>
                      <span className="text-[10px] text-[#3ce36a] font-semibold block mt-1">
                        ~{g.avgWaitMinutes} min avg wait ({g.status})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#211635] border border-[#3a2f50]">
                  <span className="material-symbols-outlined text-[#ff6f00] text-xl">medical_services</span>
                  <span className="block font-bold text-xs text-[#ebdcff] mt-1">2 ICU Ambulances</span>
                  <span className="text-[10px] text-[#a98a7c]">Behind Gate 2 & 4</span>
                </div>
                <div className="p-3 rounded-xl bg-[#211635] border border-[#3a2f50]">
                  <span className="material-symbols-outlined text-[#3ce36a] text-xl">water_drop</span>
                  <span className="block font-bold text-xs text-[#ebdcff] mt-1">
                    {event.venue.drinkingWaterRoBooths} RO Water Booths
                  </span>
                  <span className="text-[10px] text-[#a98a7c]">Free chilled refills</span>
                </div>
                <div className="p-3 rounded-xl bg-[#211635] border border-[#3a2f50]">
                  <span className="material-symbols-outlined text-[#feb300] text-xl">wc</span>
                  <span className="block font-bold text-xs text-[#ebdcff] mt-1">Sanitized Washrooms</span>
                  <span className="text-[10px] text-[#a98a7c]">Continuous staff upkeep</span>
                </div>
                <div className="p-3 rounded-xl bg-[#211635] border border-[#3a2f50]">
                  <span className="material-symbols-outlined text-[#ffb691] text-xl">footprint</span>
                  <span className="block font-bold text-xs text-[#ebdcff] mt-1">Free Shoe Stalls</span>
                  <span className="text-[10px] text-[#a98a7c]">Tokenized cloakrooms</span>
                </div>
              </div>
            </section>

            {/* 4. Protocol & Arena Rules */}
            <section className="p-6 rounded-2xl bg-[#211635] border border-[#3a2f50] shadow-sm space-y-4">
              <h2 className="font-headline font-bold text-lg text-[#ebdcff] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff6f00]">gavel</span>
                Festival Protocol & Arena Rules
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#e1bfb0]">
                {event.rules.map((rule, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#251a39] border border-[#3a2f50] space-y-1">
                    <div className="font-bold text-[#ebdcff] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#feb300]">check_circle</span>
                      <span>{rule.name}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#e1bfb0]">{rule.notes}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Ticket Platform Price Comparison (Section 21) */}
            <section className="p-6 rounded-2xl bg-[#251a39] border border-[#3a2f50] shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-headline font-bold text-base text-[#ebdcff]">
                    Compare Tickets Across Platforms
                  </h3>
                  <p className="text-xs text-[#a98a7c]">
                    Transparent pricing comparison across official trust counter and ticketing partners
                  </p>
                </div>
                <span className="text-[10px] text-[#3ce36a] font-bold">Factual & Verified</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-[#e1bfb0]">
                  <thead className="bg-[#130827] text-[#a98a7c] uppercase text-[10px] font-bold">
                    <tr>
                      <th className="p-3">Platform</th>
                      <th className="p-3">Base Price</th>
                      <th className="p-3">Fees & Taxes</th>
                      <th className="p-3">Final Payable</th>
                      <th className="p-3">Availability</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#3a2f50]">
                    {event.tickets.map((tkt) => (
                      <tr key={tkt.id} className="hover:bg-[#2f2444] transition-colors">
                        <td className="p-3 font-bold text-[#ebdcff] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#3ce36a]"></span>
                          {tkt.platform}
                        </td>
                        <td className="p-3">₹{tkt.basePrice}</td>
                        <td className="p-3">
                          {tkt.convenienceFee === 0 ? (
                            <span className="text-[#3ce36a] font-bold">₹0 Fee</span>
                          ) : (
                            `+₹${tkt.convenienceFee + tkt.gstTaxes}`
                          )}
                        </td>
                        <td className="p-3 font-bold text-[#feb300]">₹{tkt.finalPrice}</td>
                        <td className="p-3 text-[#3ce36a] font-semibold">{tkt.availability}</td>
                        <td className="p-3 text-right">
                          <a
                            href="#passes-booking"
                            className="px-3 py-1 rounded-full bg-[#ff6f00] text-white text-[11px] font-bold hover:brightness-110"
                          >
                            Buy Ticket
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* ================= RIGHT COLUMN (Sticky Sidebar ~35%) ================= */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* CARD 1: Pass & Ticket Booking Card (Screenshot B) */}
            <div
              id="passes-booking"
              className="p-6 rounded-2xl bg-[#2f2444] border border-[#3a2f50] shadow-xl space-y-4 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-headline font-bold text-lg text-[#ebdcff]">Book Festival Entry</span>
                <span className="px-2 py-0.5 rounded-full bg-[#00b349]/30 text-[#3ce36a] text-[10px] font-bold">
                  Instant QR / Band
                </span>
              </div>

              {/* Free Entry for Competitors Banner */}
              <div className="p-3 rounded-xl bg-[#ff6f00]/20 border border-[#ff6f00]/30 text-[#ebdcff] flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#ff6f00] text-xl shrink-0 mt-0.5">stars</span>
                <div>
                  <span className="text-xs font-bold text-[#ffb691] block">
                    Enrolled Competitor? 100% Free Entry!
                  </span>
                  <p className="text-[11px] text-[#e1bfb0]">
                    Competitors confirmed in any sanctioned Spardha get complimentary multi-day pass badges via SMS.
                  </p>
                </div>
              </div>

              {/* Ticket Selection Radios */}
              <div className="space-y-2">
                {/* Single Night Pass */}
                <label
                  onClick={() => setPassType('single')}
                  className={`block p-3.5 rounded-xl border cursor-pointer transition-all ${
                    passType === 'single'
                      ? 'bg-[#251a39] border-[#ff6f00] ring-1 ring-[#ff6f00]'
                      : 'bg-[#211635] border-[#3a2f50] hover:bg-[#251a39]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-2.5">
                      <input
                        type="radio"
                        name="pass_type"
                        checked={passType === 'single'}
                        onChange={() => setPassType('single')}
                        className="mt-1 accent-[#ff6f00]"
                      />
                      <div>
                        <span className="font-bold text-xs text-[#ebdcff] block">Single Night Pass</span>
                        <span className="text-[11px] text-[#a98a7c]">Valid for selected date (Any 1 night)</span>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#00b349]/20 text-[#3ce36a] font-bold">
                            ₹0 Convenience Fee
                          </span>
                          <span className="text-[10px] text-[#a98a7c] line-through">BMS Fee: ₹178</span>
                        </div>
                      </div>
                    </div>
                    <span className="font-prize-display text-base text-[#feb300]">
                      {event.isFreeEntry ? '₹0' : `₹${event.startingPrice}`}
                    </span>
                  </div>
                </label>

                {/* 9-Night Season RFID Pass */}
                <label
                  onClick={() => setPassType('season')}
                  className={`block p-3.5 rounded-xl border cursor-pointer transition-all ${
                    passType === 'season'
                      ? 'bg-[#251a39] border-[#ff6f00] ring-1 ring-[#ff6f00]'
                      : 'bg-[#211635] border-[#3a2f50] hover:bg-[#251a39]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-2.5">
                      <input
                        type="radio"
                        name="pass_type"
                        checked={passType === 'season'}
                        onChange={() => setPassType('season')}
                        className="mt-1 accent-[#ff6f00]"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-xs text-[#ebdcff]">9-Night Season RFID</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#feb300]/20 text-[#feb300] font-bold">
                            Best Value
                          </span>
                        </div>
                        <span className="text-[11px] text-[#a98a7c]">
                          All nights + express Gate 3 turnstile band
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-prize-display text-base text-[#feb300]">₹6,499</span>
                      <span className="block text-[10px] text-[#3ce36a] font-bold">Save 28%</span>
                    </div>
                  </div>
                </label>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-bold text-[#ebdcff]">Quantity of Passes</span>
                <div className="flex items-center bg-[#180d2c] border border-[#3a2f50] rounded-full p-1 shadow-inner">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded-full bg-[#2f2444] text-white flex items-center justify-center hover:bg-[#ff6f00] transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#ebdcff]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="w-7 h-7 rounded-full bg-[#2f2444] text-white flex items-center justify-center hover:bg-[#ff6f00] transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>

              {/* Add Reserved Parking */}
              <div className="pt-2 border-t border-[#3a2f50] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#ebdcff] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[#feb300] text-base">directions_car</span>
                    Add Reserved Parking
                  </span>
                  <span className="text-[10px] text-[#3ce36a] font-semibold">P3 / P4 Fast Lane</span>
                </div>

                <label className="flex items-center justify-between p-2.5 rounded-lg bg-[#211635] border border-[#3a2f50] cursor-pointer hover:bg-[#251a39] transition-colors">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addCarParking}
                      onChange={(e) => setAddCarParking(e.target.checked)}
                      className="accent-[#ff6f00]"
                    />
                    <div>
                      <span className="text-xs font-semibold text-[#ebdcff] block">4-Wheeler P3 Deck Bay</span>
                      <span className="text-[10px] text-[#a98a7c]">Fast RFID express lane</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#feb300]">+₹150</span>
                </label>

                <label className="flex items-center justify-between p-2.5 rounded-lg bg-[#211635] border border-[#3a2f50] cursor-pointer hover:bg-[#251a39] transition-colors">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addBikeParking}
                      onChange={(e) => setAddBikeParking(e.target.checked)}
                      className="accent-[#ff6f00]"
                    />
                    <div>
                      <span className="text-xs font-semibold text-[#ebdcff] block">2-Wheeler P4 Secure</span>
                      <span className="text-[10px] text-[#a98a7c]">Includes helmet locker token</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#feb300]">+₹50</span>
                </label>
              </div>

              {/* Total Due Summary */}
              <div className="pt-2 border-t border-[#3a2f50] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-[#a98a7c] block font-bold">Total Amount Due</span>
                  <span className="text-[11px] text-[#3ce36a]">Govt Taxes & GST Included</span>
                </div>
                <span className="font-prize-display text-2xl text-[#feb300]">
                  ₹{totalAmountDue.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Primary Booking Button */}
              {bookingSuccess ? (
                <div className="p-3 bg-[#003912] border border-[#3ce36a] rounded-xl text-center text-xs text-[#3ce36a] font-bold animate-in fade-in">
                  ✓ Digital Fast Pass & RFID voucher issued! View in My Garba Hub.
                </div>
              ) : (
                <button
                  onClick={() => {
                    setBookingSuccess(true);
                    setTimeout(() => setBookingSuccess(false), 4000);
                  }}
                  className="w-full py-3 rounded-full bg-[#ff6f00] text-white font-bold text-xs hover:brightness-110 active:scale-98 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Secure Checkout</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              )}

              <p className="text-[10px] text-center text-[#a98a7c] leading-tight">
                Instant digital QR ticket issued. Physical RFID bands deliverable or collected at GMDC Box Office counter.
              </p>
            </div>

            {/* CARD 2: FAQ Accordion (Screenshot B) */}
            <div className="p-5 rounded-2xl bg-[#251a39] border border-[#3a2f50] shadow-md space-y-3">
              <h3 className="font-headline font-bold text-sm text-[#ebdcff] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ffd799] text-base">help</span>
                Passes & Parking FAQs
              </h3>

              <div className="space-y-2 text-xs">
                {[
                  {
                    q: 'Is parking included with the entry ticket?',
                    a: 'Standard entry does not include vehicle parking. Adding a prepaid RFID parking pass guarantees you a designated bay in P3 or P4 even on peak nights (Aatham & Nom).'
                  },
                  {
                    q: 'Do Spardha competitors need to buy a pass?',
                    a: 'No! Once your registration in any of the 5 sanctioned competitions is verified, you receive a free Competitor Multi-Day All-Access Band via SMS and your registered mobile.'
                  },
                  {
                    q: 'Can I buy parking on the spot at GMDC gates?',
                    a: 'Spot parking fills up very fast by 8:30 PM. We strongly recommend adding parking to your ticket online to prevent diversions towards Drive-In Road.'
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="rounded-lg bg-[#130827] border border-[#251a39] overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full p-3 text-left flex items-center justify-between text-[#ebdcff] font-semibold cursor-pointer hover:text-[#ffb691]"
                    >
                      <span>{faq.q}</span>
                      <span className="material-symbols-outlined text-sm text-[#a98a7c]">
                        {openFaqIndex === idx ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                    {openFaqIndex === idx && (
                      <div className="px-3 pb-3 text-[11px] text-[#e1bfb0] leading-relaxed border-t border-[#251a39] pt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 3: Organizer Support Helpline (Screenshot B) */}
            <div className="p-4 rounded-2xl bg-[#211635] border border-[#3a2f50] shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#feb300]/20 flex items-center justify-center text-[#feb300] shrink-0">
                <span className="material-symbols-outlined text-xl">support_agent</span>
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#ebdcff] block">Need Help with Passes or Teams?</span>
                <span className="text-[#e1bfb0] block">GMDC Ground Control Desk: +91 79 2658 0000</span>
                <span className="text-[#feb300] font-semibold text-[11px]">
                  WhatsApp Spardha Cell Active (10 AM - 11 PM)
                </span>
              </div>
            </div>

            {/* Report Incorrect Info Button */}
            <button
              onClick={() => onOpenReportModal(event.id)}
              className="w-full py-2 px-3 rounded-xl bg-[#251a39] hover:bg-[#2f2444] border border-[#ffb4ab]/30 text-[#ffb4ab] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">flag</span>
              Report Incorrect Information on this Event
            </button>
          </div>
        </div>
      </div>

      {/* Blueprint Navigation Modal */}
      {isMapModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#2f2444] border border-[#3a2f50] max-w-2xl w-full rounded-2xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#3a2f50] mb-4">
              <h3 className="font-headline font-bold text-base text-[#ebdcff]">
                GMDC Ground 2026 Navigation Blueprint
              </h3>
              <button
                onClick={() => setIsMapModalOpen(false)}
                className="text-[#a98a7c] hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Blueprint visualization canvas */}
            <div className="w-full h-72 bg-[#130827] rounded-xl relative overflow-hidden border border-[#251a39] flex items-center justify-center p-4">
              <svg className="w-full h-full text-[#3a2f50]" viewBox="0 0 400 300">
                <circle cx="200" cy="150" r="110" fill="none" stroke="currentColor" strokeDasharray="4 4" strokeWidth="2" />
                <circle cx="200" cy="150" r="70" fill="none" stroke="currentColor" strokeDasharray="4 4" strokeWidth="2" />
                <circle cx="200" cy="150" r="30" fill="#251a39" stroke="#feb300" strokeWidth="2" />
                <text x="200" y="155" textAnchor="middle" fill="#feb300" fontSize="10" fontWeight="bold">Mataji Mandap</text>
                <rect x="150" y="15" width="100" height="25" rx="4" fill="#2f2444" stroke="#ff6f00" />
                <text x="200" y="32" textAnchor="middle" fill="#ffb691" fontSize="10" fontWeight="bold">Orchestral Stage</text>

                {/* Gates */}
                <circle cx="350" cy="50" r="8" fill="#3ce36a" />
                <text x="350" y="70" textAnchor="middle" fill="#3ce36a" fontSize="9">Gate 1 VIP</text>
                <circle cx="50" cy="50" r="8" fill="#feb300" />
                <text x="50" y="70" textAnchor="middle" fill="#feb300" fontSize="9">Gate 2 Performer</text>
                <circle cx="50" cy="250" r="8" fill="#ff6f00" />
                <text x="50" y="270" textAnchor="middle" fill="#ff6f00" fontSize="9">Gate 3 West</text>
                <circle cx="350" cy="250" r="8" fill="#3ce36a" />
                <text x="350" y="270" textAnchor="middle" fill="#3ce36a" fontSize="9">Gate 4 Metro East</text>
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-[#e1bfb0]">
              <div><strong className="text-[#ebdcff]">P1 & P2:</strong> Reserved for VVIP and Stage Artists</div>
              <div><strong className="text-[#ebdcff]">P3:</strong> 4-Wheeler Multilevel Parking Deck (East)</div>
              <div><strong className="text-[#ebdcff]">P4:</strong> 2-Wheeler Pavilion Ground (West)</div>
              <div><strong className="text-[#ebdcff]">Metro:</strong> Gujarat University Metro Station (400m walk)</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

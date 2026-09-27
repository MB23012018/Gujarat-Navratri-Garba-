import React, { useState } from 'react';
import { GarbaEvent } from '../types';
import { FastPassModal } from '../components/FastPassModal';
import { Language, TRANSLATIONS } from '../utils/translations';

interface MyGarbaViewProps {
  savedEvents: GarbaEvent[];
  onSelectEvent: (eventId: string) => void;
  onRemoveSavedEvent: (eventId: string) => void;
  onNavigateTab: (tab: string) => void;
  language: Language;
}

export const MyGarbaView: React.FC<MyGarbaViewProps> = ({
  savedEvents,
  onSelectEvent,
  onRemoveSavedEvent,
  onNavigateTab,
  language
}) => {
  const t = TRANSLATIONS[language];
  const [activeTab, setActiveTab] = useState<'competitions' | 'passes' | 'credentials' | 'saved'>('competitions');
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [invitedAccepted, setInvitedAccepted] = useState(false);

  return (
    <div className="w-full flex flex-col bg-[#180d2c] text-[#ebdcff] min-h-screen pt-20">
      <FastPassModal isOpen={isPassModalOpen} onClose={() => setIsPassModalOpen(false)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        {/* Profile & Competitor Master Header (Screenshot D) */}
        <section className="relative bg-[#211635] border border-[#3a2f50] rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-gradient-to-br from-[#ff6f00]/15 to-transparent rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            {/* Avatar & Bio */}
            <div className="flex items-start sm:items-center gap-4 sm:gap-6">
              <div className="relative shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUQtklXMlEXw8JQ3gPqUm5xKrgMdioiZ_mLf-oydjXh6DERfmDDG3v5GeSyQtlrL-cTiNBS1hpz4PDM6WwNMfmdOmMuvK9n3ZrXVRq6xR33Fnx2r9GwDEFf14AmTByP__iSBx1t-rGvS5xn4rej-4SObA_mU4Bmne8ZVe681yqsMxUsi-q84YRvLAjSABopK6L7lb6P4j4MJh_237DcwGq7ukwBwzWf17fNNq8mDH31_y7a3v42_9o"
                  alt="Kavita Patel"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#ff6f00]/40 shadow-lg"
                />
                <span className="absolute -bottom-2 -right-2 bg-[#00b349] text-white px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md text-[10px] font-bold">
                  <span className="material-symbols-outlined text-[12px]">verified</span>
                  Verified
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="bg-[#ff6f00]/20 text-[#ffdbcb] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Navratri Utsav 2026
                  </span>
                  <span className="text-[#a98a7c]">•</span>
                  <span className="text-[#ffd799] font-semibold flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-xs">location_on</span>
                    Ahmedabad, Gujarat
                  </span>
                </div>
                <h1 className="font-headline font-extrabold text-2xl sm:text-3xl text-[#ebdcff] tracking-tight">
                  Kavita Patel
                </h1>
                <p className="text-xs sm:text-sm text-[#e1bfb0] max-w-xl leading-relaxed">
                  Master Classical & Contemporary Garba exponent · Specializing in authentic 3-Taali, Dodhiya, and fast-paced Tran-Taali synchronization.
                </p>
              </div>
            </div>

            {/* Quick Stats Deck (Screenshot D) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full lg:w-auto">
              <div className="bg-[#251a39] border border-[#3a2f50] px-3.5 py-2.5 rounded-xl text-left min-w-[105px]">
                <span className="text-[10px] uppercase tracking-wider text-[#a98a7c] font-bold block">Active Spardha</span>
                <span className="font-prize-display text-2xl text-[#ff6f00]">02</span>
                <span className="text-[10px] text-[#3ce36a] block">Verified Entry</span>
              </div>
              <div className="bg-[#251a39] border border-[#3a2f50] px-3.5 py-2.5 rounded-xl text-left min-w-[105px]">
                <span className="text-[10px] uppercase tracking-wider text-[#a98a7c] font-bold block">Digital Passes</span>
                <span className="font-prize-display text-2xl text-[#feb300]">03</span>
                <span className="text-[10px] text-[#e1bfb0] block">Gate-ready QR</span>
              </div>
              <div className="bg-[#251a39] border border-[#3a2f50] px-3.5 py-2.5 rounded-xl text-left min-w-[105px]">
                <span className="text-[10px] uppercase tracking-wider text-[#a98a7c] font-bold block">Saved Mandli</span>
                <span className="font-prize-display text-2xl text-[#ebdcff]">01</span>
                <span className="text-[10px] text-[#e1bfb0] block">Amdavad Dholis</span>
              </div>
              <div className="bg-[#251a39] border border-[#3a2f50] px-3.5 py-2.5 rounded-xl text-left min-w-[105px]">
                <span className="text-[10px] uppercase tracking-wider text-[#a98a7c] font-bold block">State Standing</span>
                <span className="font-prize-display text-2xl text-[#3ce36a]">Top 5%</span>
                <span className="text-[10px] text-[#feb300] block">Gujarat Rank 114</span>
              </div>
            </div>
          </div>

          {/* Tabbed Navigation Ribbon (Screenshot D) */}
          <div className="mt-6 pt-4 border-t border-[#3a2f50] flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('competitions')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'competitions'
                  ? 'bg-[#ff6f00] text-white shadow-md'
                  : 'bg-[#251a39] text-[#e1bfb0] hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">stars</span>
              <span>My Competitions (2)</span>
            </button>
            <button
              onClick={() => setActiveTab('passes')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'passes'
                  ? 'bg-[#ff6f00] text-white shadow-md'
                  : 'bg-[#251a39] text-[#e1bfb0] hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">confirmation_number</span>
              <span>My Passes & Tickets (3)</span>
            </button>
            <button
              onClick={() => setActiveTab('credentials')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'credentials'
                  ? 'bg-[#ff6f00] text-white shadow-md'
                  : 'bg-[#251a39] text-[#e1bfb0] hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              <span>Performance Credentials & Honors</span>
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'saved'
                  ? 'bg-[#feb300] text-[#432c00] shadow-md'
                  : 'bg-[#251a39] text-[#ffd799] hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">bookmark</span>
              <span>Saved Events ({savedEvents.length})</span>
            </button>
          </div>
        </section>

        {/* Saved Events Tab View */}
        {activeTab === 'saved' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-headline font-bold text-lg text-[#ebdcff]">
                  Saved Navratri Events in Browser Storage
                </h3>
                <p className="text-xs text-[#a98a7c]">
                  Stored locally on this device without registration · Cleared if browser cache resets
                </p>
              </div>
            </div>

            {savedEvents.length === 0 ? (
              <div className="p-10 rounded-2xl bg-[#211635] border border-[#3a2f50] text-center space-y-2">
                <span className="material-symbols-outlined text-4xl text-[#a98a7c]">bookmark_border</span>
                <p className="text-xs text-[#ebdcff]">You have not saved any Garba events yet.</p>
                <button
                  onClick={() => onNavigateTab('explore')}
                  className="px-4 py-1.5 rounded-full bg-[#ff6f00] text-white text-xs font-bold hover:brightness-110 cursor-pointer"
                >
                  Explore Gujarat Events
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedEvents.map((ev) => (
                  <div
                    key={ev.id}
                    className="p-4 rounded-xl bg-[#211635] border border-[#3a2f50] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#feb300] mb-1">
                        <span>{ev.city}</span>
                        <span>{ev.isFreeEntry ? 'Free' : `From ₹${ev.startingPrice}`}</span>
                      </div>
                      <h4 className="font-bold text-sm text-[#ebdcff] line-clamp-1">{ev.name}</h4>
                      <p className="text-[11px] text-[#a98a7c] line-clamp-1 mt-0.5">{ev.venue.name}</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-4 pt-2 border-t border-[#3a2f50]">
                      <button
                        onClick={() => onSelectEvent(ev.id)}
                        className="px-3 py-1 bg-[#ff6f00] text-white text-xs font-bold rounded-lg hover:brightness-110 cursor-pointer"
                      >
                        View Event
                      </button>
                      <button
                        onClick={() => onRemoveSavedEvent(ev.id)}
                        className="text-xs text-[#ffb4ab] hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Main Two-Column Layout (Screenshot D: 60% / 40%) */}
        {activeTab !== 'saved' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ================= LEFT COLUMN (~7 cols) ================= */}
            <div className="lg:col-span-7 space-y-6">
              {/* ACTIVE COMPETITION SPOTLIGHT CARD (Screenshot D) */}
              <div className="relative bg-[#251a39] border border-[#3a2f50] rounded-2xl p-6 shadow-xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#feb300] via-[#ff6f00] to-[#ffd799]"></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#feb300] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#feb300]"></span>
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#feb300] font-bold">
                      Tonight's Mainstage Spardha
                    </span>
                  </div>
                  <span className="text-xs bg-[#130827] text-[#ffb691] px-3 py-1 rounded-full font-mono border border-[#3a2f50]">
                    REG ID: #RANG-CP-072
                  </span>
                </div>

                {/* Title & Venue */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
                  <div>
                    <h2 className="font-headline font-bold text-xl sm:text-2xl text-[#ebdcff]">
                      Best Garba Couple — Day 5
                    </h2>
                    <p className="text-xs text-[#ffd799] mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">stadium</span>
                      GMDC Ground Rangtaali Navratri Arena, Gate 2
                    </p>
                  </div>
                  <div className="bg-[#211635] border border-[#3a2f50] px-4 py-2 rounded-xl flex md:flex-col justify-between items-end min-w-[130px] shrink-0">
                    <span className="text-[10px] text-[#a98a7c] uppercase font-bold">Prize Pool</span>
                    <span className="font-prize-display text-xl text-[#feb300]">₹75,000</span>
                    <span className="text-[10px] text-[#3ce36a]">Gold Trophy + Cert</span>
                  </div>
                </div>

                {/* Partner & Timing Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-[#211635] border border-[#3a2f50] rounded-xl mb-5">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCusrszv-16aMb5LfwNz7Cxcp95NSgjc1SW-y2OpW3WCXKEpEdJzC54EC6xAcVcyIAeIgq0ElBMV0G350wt-NYle44RtNGYMyhUffEikvEZoXfUJ0lu5IFlukL4fei23sYcdhmDMwyNw5tHcVHT-4giLUt6S5lsf6IwYUBAuBEtKmjhY44R1TFL3hWwk0FboI7oRR5aFmllsTWlV5UL5GlI9WnR4a45VtvWe7QeHAgzhqbE25AfCrm2"
                      alt="Parth Shah"
                      className="w-11 h-11 rounded-lg object-cover border border-[#ff6f00]/30 shrink-0"
                    />
                    <div>
                      <span className="text-[10px] text-[#a98a7c] block">Registered Dance Partner</span>
                      <span className="text-xs font-bold text-[#ebdcff]">Parth Shah</span>
                      <span className="text-[10px] text-[#3ce36a] flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-xs">check_circle</span>
                        Partner Verified & Biometrics Synced
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:pl-3 border-t sm:border-t-0 sm:border-l border-[#3a2f50] pt-2 sm:pt-0">
                    <div className="w-9 h-9 rounded-lg bg-[#2f2444] flex items-center justify-center text-[#ff6f00] shrink-0">
                      <span className="material-symbols-outlined text-lg">schedule</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#a98a7c] block">Arena Call Time</span>
                      <span className="text-xs font-bold text-[#ebdcff]">Today, 15 Oct · 9:30 PM</span>
                      <span className="text-[10px] text-[#ffb4ab] flex items-center gap-0.5 font-semibold">
                        <span className="material-symbols-outlined text-xs">alarm</span>
                        Mandatory Desk Reporting: 8:45 PM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Digital Pass & NFC Scan Module (Screenshot D) */}
                <div className="bg-[#130827] border border-[#3a2f50] p-4 rounded-xl mb-5 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    {/* Vector QR Graphic */}
                    <div
                      onClick={() => setIsPassModalOpen(true)}
                      className="bg-[#211635] border border-[#3a2f50] p-2 rounded-xl shrink-0 flex flex-col items-center justify-center w-24 h-24 relative group cursor-pointer hover:border-[#ff6f00]"
                    >
                      <svg className="w-20 h-20 text-[#ebdcff]" fill="currentColor" viewBox="0 0 100 100">
                        <rect fill="currentColor" height="28" rx="4" width="28" x="5" y="5" />
                        <rect fill="#130827" height="18" rx="2" width="18" x="10" y="10" />
                        <rect fill="#ffb691" height="10" rx="1" width="10" x="14" y="14" />
                        <rect fill="currentColor" height="28" rx="4" width="28" x="67" y="5" />
                        <rect fill="#130827" height="18" rx="2" width="18" x="72" y="10" />
                        <rect fill="#ffb691" height="10" rx="1" width="10" x="76" y="14" />
                        <rect fill="currentColor" height="28" rx="4" width="28" x="5" y="67" />
                        <rect fill="#130827" height="18" rx="2" width="18" x="10" y="72" />
                        <rect fill="#ffb691" height="10" rx="1" width="10" x="14" y="76" />
                        <rect fill="#feb300" height="6" width="6" x="40" y="8" />
                        <rect fill="#ff6f00" height="16" rx="2" width="16" x="42" y="38" />
                        <circle cx="50" cy="50" fill="#ffffff" r="4" />
                        <rect fill="#3ce36a" height="6" width="6" x="84" y="64" />
                      </svg>
                      <span className="absolute bottom-1 text-[8px] text-[#ffd799] uppercase tracking-wider">
                        Tap Zoom
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#00b349] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="material-symbols-outlined text-[10px]">nfc</span>
                          Live NFC RFID Active
                        </span>
                        <span className="text-[10px] text-[#feb300] font-semibold">Bay 2B Fastrack</span>
                      </div>
                      <h3 className="font-bold text-sm text-[#ebdcff]">Gate 2 Express Entry Pass</h3>
                      <p className="text-[11px] text-[#e1bfb0]">
                        Priority competitor backstage access. Direct path to Green Room #04 & Costume Inspection Desk.
                      </p>
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-2 w-full md:w-40 shrink-0">
                    <button
                      onClick={() => setIsPassModalOpen(true)}
                      className="flex-1 bg-[#2f2444] hover:bg-[#3a2f50] text-[#ebdcff] text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">download</span>
                      <span>Digital Pass</span>
                    </button>
                    <button
                      onClick={() => alert('Partner invite link copied to clipboard: https://garbautsav.org/invite/cp-072')}
                      className="flex-1 bg-[#2f2444] hover:bg-[#3a2f50] text-[#ebdcff] text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">share</span>
                      <span>Partner Invite</span>
                    </button>
                  </div>
                </div>

                {/* Action Ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#3a2f50]">
                  <div className="flex items-center gap-1.5 text-xs text-[#e1bfb0]">
                    <span className="material-symbols-outlined text-sm text-[#feb300]">route</span>
                    <span>Gate 2 Directions synced with Ahmedabad Traffic Police alerts</span>
                  </div>
                  <button
                    onClick={() => onNavigateTab('radar')}
                    className="bg-[#ff6f00] text-white hover:brightness-110 text-xs font-bold px-5 py-2 rounded-full shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">directions_car</span>
                    <span>Gate 2 Directions & Reserved Parking</span>
                  </button>
                </div>
              </div>

              {/* SAVED / UPCOMING COMPETITION SPOTLIGHT (Screenshot D) */}
              <div className="bg-[#251a39] border border-[#3a2f50] rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#feb300]">pending_actions</span>
                    <h2 className="font-headline font-bold text-base text-[#ebdcff]">
                      Invited & Pending Registration
                    </h2>
                  </div>
                  <span className="bg-[#feb300]/20 text-[#feb300] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Action Required
                  </span>
                </div>

                <div className="bg-[#211635] border border-[#3a2f50] p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#3a2f50] text-[#ebdcff] text-[10px] px-2 py-0.5 rounded-full">
                        Day 7 · Mega Group Raas
                      </span>
                      <span className="text-[10px] text-[#3ce36a] font-bold">Prize Pool ₹1,50,000</span>
                    </div>
                    <h3 className="font-bold text-sm text-[#ebdcff]">
                      Mega Group Raas Championship 2026
                    </h3>
                    <p className="text-xs text-[#e1bfb0]">
                      Karnavati Club Arena · Invited by Mandli Squad <strong className="text-[#feb300]">"Amdavad Dholis"</strong> (18/20 Members Ready)
                    </p>
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto">
                    {invitedAccepted ? (
                      <span className="text-xs text-[#3ce36a] font-bold">Confirmed in Squad ✓</span>
                    ) : (
                      <>
                        <button
                          onClick={() => alert('Invitation declined.')}
                          className="flex-1 md:flex-initial bg-[#2f2444] hover:bg-[#3a2f50] text-[#ebdcff] text-xs font-semibold px-4 py-2 rounded-full cursor-pointer"
                        >
                          Decline
                        </button>
                        <button
                          onClick={() => setInvitedAccepted(true)}
                          className="flex-1 md:flex-initial bg-[#feb300] text-[#432c00] hover:brightness-105 text-xs font-bold px-5 py-2 rounded-full shadow-md cursor-pointer"
                        >
                          Complete Registration (Free)
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* HONORS & CREDENTIALS VAULT (Screenshot D) */}
              <div className="bg-[#251a39] border border-[#3a2f50] rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#feb300]">military_tech</span>
                    <h2 className="font-headline font-bold text-base text-[#ebdcff]">
                      Hall of Fame & Cultural Credentials
                    </h2>
                  </div>
                  <button className="text-xs text-[#ffb691] hover:underline flex items-center gap-1 cursor-pointer">
                    <span>View All State Awards</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Honor 1 */}
                  <div className="bg-[#211635] border border-[#3a2f50] p-4 rounded-xl flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xl">🥈</span>
                        <span className="text-[10px] bg-[#00b349]/20 text-[#3ce36a] px-2 py-0.5 rounded-full font-mono flex items-center gap-1">
                          <span className="material-symbols-outlined text-[10px]">lock</span>
                          Polygon Minted #GL-2025-99
                        </span>
                      </div>
                      <h3 className="font-bold text-xs text-[#ebdcff]">State Runner-Up Trophy 2025</h3>
                      <p className="text-[11px] text-[#e1bfb0] mt-1 leading-relaxed">
                        Ahmedabad Traditional Garba Mahotsav · Classical 3-Taali Pair Division against 84 finalists.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#3a2f50] flex items-center justify-between text-[10px] text-[#a98a7c]">
                      <span>Gujarat State Cultural Board</span>
                      <span className="material-symbols-outlined text-sm text-[#3ce36a]">verified</span>
                    </div>
                  </div>

                  {/* Honor 2 */}
                  <div className="bg-[#211635] border border-[#3a2f50] p-4 rounded-xl flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xl">👑</span>
                        <span className="text-[10px] bg-[#feb300]/20 text-[#feb300] px-2 py-0.5 rounded-full font-mono font-bold">
                          State Top 5% Rank
                        </span>
                      </div>
                      <h3 className="font-bold text-xs text-[#ebdcff]">Gold Dancer of the Year</h3>
                      <p className="text-[11px] text-[#e1bfb0] mt-1 leading-relaxed">
                        Authentic Chaniya & Step Execution · Scored 98.4/100 across 9 continuous Navratri nights.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#3a2f50] flex items-center justify-between text-[10px] text-[#a98a7c]">
                      <span>Jury Board Endorsed</span>
                      <span className="material-symbols-outlined text-sm text-[#feb300]">stars</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN (~5 cols) ================= */}
            <div className="lg:col-span-5 space-y-6">
              {/* PARTICIPANT READINESS CHECKLIST (Screenshot D) */}
              <div className="bg-[#251a39] border border-[#3a2f50] rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-headline font-bold text-base text-[#ebdcff]">Participant Readiness</h2>
                    <p className="text-xs text-[#e1bfb0]">Night 5 Stage Compliance Requirements</p>
                  </div>
                  <span className="text-xs bg-[#00b349] text-white px-3 py-1 rounded-full font-bold">
                    4 / 4 Completed
                  </span>
                </div>

                {/* 4 Items */}
                <div className="space-y-3">
                  {/* Item 1 */}
                  <div className="bg-[#211635] border border-[#3a2f50] p-3 rounded-xl flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#00b349] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                    <div className="flex-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#ebdcff]">Registration Fee Cleared</span>
                        <span className="text-[10px] text-[#3ce36a] font-bold">₹100 Paid</span>
                      </div>
                      <p className="text-[11px] text-[#e1bfb0] mt-0.5">Razorpay Order #RZP-GARBA-9021 · Tax Receipt Generated</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-[#211635] border border-[#3a2f50] p-3 rounded-xl flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#00b349] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                    <div className="flex-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#ebdcff]">Govt ID On-File</span>
                        <span className="text-[10px] text-[#ffb691] font-bold">Aadhaar Linked</span>
                      </div>
                      <p className="text-[11px] text-[#e1bfb0] mt-0.5">Carry original Aadhaar Card or Driving License for Desk Tagging.</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-[#211635] border border-[#3a2f50] p-3 rounded-xl flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#00b349] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                    <div className="flex-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#ebdcff]">Authentic Dress Code Compliance</span>
                        <span className="text-[10px] text-[#feb300] font-bold">Approved</span>
                      </div>
                      <p className="text-[11px] text-[#e1bfb0] mt-0.5">Traditional Chaniya Choli with mirror embroidery / Kediyu mandatory.</p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-[#211635] border border-[#3a2f50] p-3 rounded-xl flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#00b349] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-sm">music_note</span>
                    </div>
                    <div className="flex-1 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#ebdcff]">Music & Rhythm Sequence</span>
                        <span className="text-[10px] text-[#3ce36a] font-bold">7 Mins Total</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] pt-1">
                        <div className="bg-[#180d2c] p-2 rounded border border-[#251a39]">
                          <span className="text-[#ffb691] font-bold block">Round 1 (3 min)</span>
                          <span className="text-[#a98a7c]">Traditional 3-Taali slow</span>
                        </div>
                        <div className="bg-[#180d2c] p-2 rounded border border-[#251a39]">
                          <span className="text-[#feb300] font-bold block">Round 2 (4 min)</span>
                          <span className="text-[#a98a7c]">Dodhiya speed sprint</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scoring Weights Snapshot */}
                <div className="bg-[#211635] border border-[#3a2f50] p-3.5 rounded-xl space-y-2">
                  <span className="text-[10px] uppercase font-bold text-[#a98a7c] tracking-wider block">
                    Official Jury Scoring Weights
                  </span>
                  <div className="w-full h-2.5 rounded-full bg-[#180d2c] overflow-hidden flex">
                    <div className="bg-[#3ce36a] h-full" style={{ width: '40%' }}></div>
                    <div className="bg-[#feb300] h-full" style={{ width: '35%' }}></div>
                    <div className="bg-[#ff6f00] h-full" style={{ width: '25%' }}></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-[#e1bfb0] pt-0.5">
                    <span className="text-[#3ce36a]">● Steps 40%</span>
                    <span className="text-[#feb300]">● Attire 35%</span>
                    <span className="text-[#ff6f00]">● Grace 25%</span>
                  </div>
                </div>
              </div>

              {/* VENUE NAVIGATION & BAY 2B (Screenshot D) */}
              <div className="bg-[#251a39] border border-[#3a2f50] rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ff6f00]">near_me</span>
                    <h2 className="font-headline font-bold text-base text-[#ebdcff]">
                      Venue Navigation & Bay 2B
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#00b349]/20 text-[#3ce36a] px-2 py-0.5 rounded-full">
                    Bay Occupancy: 42%
                  </span>
                </div>

                {/* Static Map visual container */}
                <div
                  className="w-full h-44 bg-cover bg-center rounded-xl relative overflow-hidden border border-[#3a2f50] shadow-inner"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmeRakRgQxclbnxvEMJrlAsy4sS7CJ8T5t5UkdyCCKxeViNxYuRb7Su7dxhQp4VlMqrRSrYR1gj78GV7uk8gqqcuU1azE6hEFRUWL-DW46Ehn1mEt5stQ0vEJdwUX4B1iWvTMG-G2ohYL5ZquNBDqEyTgOyF-gl6LaBdAHxCUPNixbQyd73-fjZas-RMWgGERPsVwEebVhG6GUB6pEh7ZiQZhSZe3ZFUil8Os_ZaKNdmFyJyQfJ6uc')"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130827] via-transparent to-transparent"></div>
                  <div className="absolute top-2.5 left-2.5 bg-[#180d2c]/90 border border-[#3a2f50] px-2.5 py-1 rounded-md text-[10px] font-bold text-[#ebdcff] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#feb300] animate-pulse"></span>
                    GMDC Competitor Entry: Gate 2
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <div className="bg-[#180d2c]/90 px-3 py-1 rounded-lg border border-[#3a2f50] text-xs">
                      <span className="text-[9px] uppercase text-[#a98a7c] block">Reserved Parking</span>
                      <span className="font-bold text-[#ebdcff]">Bay 2B · Pillar 14 to 22</span>
                    </div>
                    <a
                      href="https://maps.google.com/?q=GMDC+Ground+Ahmedabad"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#ff6f00] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md hover:brightness-110"
                    >
                      <span className="material-symbols-outlined text-xs">navigation</span>
                      <span>Open GPS</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#e1bfb0]">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#3ce36a]">check</span>
                    <span>Express Bag Drop Enabled</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#3ce36a]">check</span>
                    <span>AC Costume Green Rooms</span>
                  </div>
                </div>
              </div>

              {/* HELPDESK & JURY DISPUTES (Screenshot D) */}
              <div className="bg-[#211635] border border-[#3a2f50] rounded-2xl p-4 shadow-md space-y-2">
                <div className="flex items-center gap-2 text-[#feb300]">
                  <span className="material-symbols-outlined">support_agent</span>
                  <h3 className="font-headline font-bold text-xs text-[#ebdcff]">
                    Competitor Helpdesk & Jury Desk
                  </h3>
                </div>
                <p className="text-xs text-[#e1bfb0] leading-relaxed">
                  Facing schedule overlaps, costume tag verification issues, or music sync disputes? On-site trust arbitrators are available immediately.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                  <a
                    href="tel:18002334272"
                    className="bg-[#2f2444] text-[#feb300] px-3 py-1 rounded-full font-bold flex items-center gap-1 hover:bg-[#3a2f50] transition-colors"
                  >
                    <span className="material-symbols-outlined text-xs">call</span>
                    <span>+91 79 2658 9110</span>
                  </a>
                  <span className="text-[10px] text-[#a98a7c]">
                    Physical Desk: Right Flank, Green Room Tent #04
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

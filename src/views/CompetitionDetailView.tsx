import React, { useState, useEffect } from 'react';
import { CompetitionSummary } from '../types';
import { Language, TRANSLATIONS } from '../utils/translations';

interface CompetitionDetailViewProps {
  competition: CompetitionSummary;
  onBack: () => void;
  onNavigateTab: (tab: string) => void;
  language: Language;
}

export const CompetitionDetailView: React.FC<CompetitionDetailViewProps> = ({
  competition,
  onBack,
  onNavigateTab,
  language
}) => {
  const t = TRANSLATIONS[language];

  // Countdown Timer
  const [totalSeconds, setTotalSeconds] = useState(4 * 3600 + 13 * 60 + 17);

  // Form Fields
  const [leadName, setLeadName] = useState('Dharmin Trivedi');
  const [leadMobile, setLeadMobile] = useState('+91 98251 44520');
  const [leadAadhaar, setLeadAadhaar] = useState('8821');
  const [partnerName, setPartnerName] = useState('Aneri Parikh');
  const [duoType, setDuoType] = useState<'traditional-pair' | 'open-duo'>('traditional-pair');
  const [attireAgreed, setAttireAgreed] = useState(true);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h < 10 ? '0' : ''}${h}h : ${m < 10 ? '0' : ''}${m}m : ${s < 10 ? '0' : ''}${s}s`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsRegistered(true);
    }, 1200);
  };

  return (
    <div className="w-full flex flex-col bg-[#180d2c] text-[#ebdcff] min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full space-y-6">
        {/* Top Breadcrumbs (Screenshot C) */}
        <nav className="flex items-center gap-2 text-xs text-[#a98a7c] font-semibold">
          <button
            onClick={onBack}
            className="hover:text-[#ff6f00] flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Find Competitions</span>
          </button>
          <span>/</span>
          <span className="text-[#e1bfb0]">Rangtaali Navratri 2026</span>
          <span>/</span>
          <span className="text-[#feb300] truncate">
            {competition.title} ({competition.gujaratiTitle || 'સ્પર્ધા'})
          </span>
        </nav>

        {/* Hero Banner (Screenshot C) */}
        <section className="relative rounded-2xl overflow-hidden bg-[#251a39] border border-[#3a2f50] shadow-xl">
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBXzS85g9YGeKV7rpxDHFXO4-qV7JMQH0hThIVaKq_hRczcRmaFb5oYM3JjEe2qpWliuoGIyyo8wvs5Q36xgec0NDsCQQcPIbOs7DHlD0SUG5oFf_yccitNLm7OLUd-zyDDg4D4PL8aPZi3zPl3hGqHJBz-Xah8m_9iwyx8cb81XxmUAGHma0zCqQqlmPw5qKtQWpR8hWeHGGQr8O_jmVbtevi6Wj_POxCgzlfCjXziqvFbjhGM79X')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#130827] via-[#251a39]/95 to-[#251a39]/60"></div>

          <div className="relative z-10 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="bg-[#130827] text-[#feb300] font-bold text-[10px] uppercase px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#feb300]/30 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#feb300] animate-ping"></span>
                  Day {competition.nightNumber} · Pancham Spardha
                </span>
                <span className="bg-[#00b349]/20 text-[#3ce36a] font-bold text-[10px] uppercase px-3 py-1 rounded-full flex items-center gap-1 border border-[#3ce36a]/30">
                  <span className="material-symbols-outlined text-xs">verified</span>
                  Verified Gujarat Trust Organizer
                </span>
                <span className="bg-[#2f2444] text-[#a98a7c] text-[10px] font-mono px-3 py-1 rounded-full">
                  Code: {competition.code}
                </span>
              </div>

              <div>
                <h1 className="font-headline font-extrabold text-2xl sm:text-4xl text-[#ebdcff] tracking-tight leading-tight">
                  {competition.title}{' '}
                  <span className="text-[#feb300] font-normal block sm:inline text-xl sm:text-2xl mt-1 sm:mt-0 sm:ml-2">
                    ({competition.gujaratiTitle})
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-[#e1bfb0] mt-2 max-w-2xl leading-relaxed">
                  Prestigious two-step and multi-taal couple championship honoring timeless authentic rhythm, synchronized footwork, and traditional Gujarati Kutch-Kathiawadi finery.
                </p>
              </div>

              {/* Key Metadata Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-[#ebdcff]">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-[#2f2444] flex items-center justify-center text-[#ff6f00]">
                    <span className="material-symbols-outlined text-lg">event</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#a98a7c] block font-bold">Date & Night</span>
                    <span className="text-xs font-bold text-[#ebdcff]">{competition.dateStr}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-[#2f2444] flex items-center justify-center text-[#feb300]">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#a98a7c] block font-bold">Time Slot</span>
                    <span className="text-xs font-bold text-[#ebdcff]">{competition.startTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-[#2f2444] flex items-center justify-center text-[#3ce36a]">
                    <span className="material-symbols-outlined text-lg">stadium</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#a98a7c] block font-bold">Arena Location</span>
                    <span className="text-xs font-bold text-[#ebdcff]">{competition.locationArea}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-[#2f2444] flex items-center justify-center text-[#ffb691]">
                    <span className="material-symbols-outlined text-lg">payments</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#a98a7c] block font-bold">Nominal Entry</span>
                    <span className="text-xs font-bold text-[#ebdcff]">
                      {competition.entryFee === 0 ? 'Free' : `₹${competition.entryFee} / Couple`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Highlight Trophy Pod */}
            <div className="bg-[#130827]/90 border border-[#3a2f50] p-4 rounded-xl flex items-center gap-4 shadow-md min-w-[240px]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#feb300] to-[#ff6f00] flex items-center justify-center text-[#180d2c] font-bold shadow-md">
                <span className="material-symbols-outlined text-2xl">military_tech</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#a98a7c] font-bold block">Total Cash Pot</span>
                <span className="font-prize-display text-2xl text-[#feb300]">
                  ₹{competition.totalCashPool.toLocaleString('en-IN')}+
                </span>
                <span className="text-[11px] text-[#e1bfb0] block mt-0.5">Plus Gold Diya Honors</span>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Column Operation Architecture (Screenshot C) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= LEFT SIDE (approx 7 cols) ================= */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Official Prize Pool & Titles */}
            <section className="bg-[#251a39] border border-[#3a2f50] p-6 rounded-2xl shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#feb300] text-2xl">emoji_events</span>
                  <h2 className="font-headline font-bold text-base text-[#ebdcff]">Official Prize Pool & Titles</h2>
                </div>
                <span className="text-[10px] uppercase tracking-wider bg-[#2f2444] px-2.5 py-0.5 rounded text-[#a98a7c] font-bold">
                  Trust Certified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* 1st Rank */}
                <div className="bg-gradient-to-b from-[#2f2444] to-[#211635] border border-[#ff6f00]/50 p-4 rounded-xl relative overflow-hidden flex flex-col justify-between shadow-lg">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#feb300]/10 rounded-full blur-2xl"></div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#feb300]/20 text-[#feb300] font-bold">
                        1ST RANK
                      </span>
                      <span className="text-xl">🥇</span>
                    </div>
                    <span className="text-[10px] uppercase text-[#a98a7c] block font-bold">Grand Vijeta</span>
                    <div className="font-prize-display text-2xl text-[#feb300] my-1">
                      ₹{competition.firstPrize.cash.toLocaleString('en-IN')}
                    </div>
                    <p className="text-[11px] text-[#e1bfb0]">Cash disbursement via RTGS</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#3a2f50] space-y-1 text-xs text-[#ebdcff]">
                    {competition.firstPrize.perks.map((p, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                        <span className="material-symbols-outlined text-[#feb300] text-xs">workspace_premium</span>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2nd Rank */}
                <div className="bg-[#211635] border border-[#3a2f50] p-4 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3a2f50] text-[#ebdcff] font-bold">
                        2ND RANK
                      </span>
                      <span className="text-xl">🥈</span>
                    </div>
                    <span className="text-[10px] uppercase text-[#a98a7c] block font-bold">Up-Vijeta</span>
                    <div className="font-prize-display text-2xl text-[#ffb691] my-1">₹21,000</div>
                    <p className="text-[11px] text-[#e1bfb0]">Cash award + Digital scroll</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#3a2f50] space-y-1 text-[11px] text-[#ebdcff]">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#ffb691] text-xs">workspace_premium</span>
                      <span>Silver Diya Trophy</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#ffb691] text-xs">local_mall</span>
                      <span>₹5,000 Chaniya Voucher</span>
                    </div>
                  </div>
                </div>

                {/* 3rd Rank */}
                <div className="bg-[#211635] border border-[#3a2f50] p-4 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3a2f50] text-[#a98a7c] font-bold">
                        3RD RANK
                      </span>
                      <span className="text-xl">🥉</span>
                    </div>
                    <span className="text-[10px] uppercase text-[#a98a7c] block font-bold">Tritiya Sthan</span>
                    <div className="font-prize-display text-2xl text-[#ffd799] my-1">₹11,000</div>
                    <p className="text-[11px] text-[#e1bfb0]">Cash prize + Certificate</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#3a2f50] space-y-1 text-[11px] text-[#ebdcff]">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#ffd799] text-xs">workspace_premium</span>
                      <span>Bronze Diya Trophy</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#ffd799] text-xs">military_tech</span>
                      <span>Jury Special Memento</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consolation Special Recognition */}
              <div className="p-3.5 rounded-xl bg-[#2f2444] border border-[#3a2f50] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#ff6f00] text-xl">military_tech</span>
                  <div>
                    <span className="font-bold text-xs text-[#ebdcff] block">
                      2x Consolation Special Recognition Awards
                    </span>
                    <span className="text-[11px] text-[#e1bfb0]">
                      Awarded for Outstanding Grace & Authentic Kathiawadi Footwork
                    </span>
                  </div>
                </div>
                <span className="font-bold text-sm text-[#feb300]">₹3,500 each</span>
              </div>
            </section>

            {/* 2. Judging Weights & Evaluation Criteria (Screenshot C) */}
            <section className="bg-[#251a39] border border-[#3a2f50] p-6 rounded-2xl shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ff6f00] text-2xl">tune</span>
                  <h2 className="font-headline font-bold text-base text-[#ebdcff]">
                    Judging Weights & Evaluation Criteria
                  </h2>
                </div>
                <span className="text-xs text-[#3ce36a] font-bold">Total 100% Score Scale</span>
              </div>

              {/* Progress Scale Bar */}
              <div className="w-full bg-[#130827] h-3 rounded-full flex overflow-hidden">
                <div className="bg-[#ff6f00] h-full" style={{ width: '30%' }} title="Technique: 30%"></div>
                <div className="bg-[#feb300] h-full" style={{ width: '25%' }} title="Taal: 25%"></div>
                <div className="bg-[#ffd799] h-full" style={{ width: '20%' }} title="Coordination: 20%"></div>
                <div className="bg-[#3ce36a] h-full" style={{ width: '15%' }} title="Grace: 15%"></div>
                <div className="bg-[#3a2f50] h-full" style={{ width: '10%' }} title="Attire: 10%"></div>
              </div>

              {/* Breakdown Metric Rows */}
              <div className="space-y-2.5">
                {competition.judgingWeights.map((w, idx) => (
                  <div
                    key={idx}
                    className="bg-[#211635] border border-[#3a2f50] p-3 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#feb300]"></span>
                        <h4 className="font-bold text-xs text-[#ebdcff]">{w.criteria}</h4>
                      </div>
                      <p className="text-[11px] text-[#e1bfb0] pl-4">{w.description}</p>
                    </div>
                    <span className="font-headline font-bold text-sm text-[#feb300] shrink-0 pl-4 md:pl-0">
                      {w.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Distinguished Jury Panel (Screenshot C) */}
            <section className="bg-[#251a39] border border-[#3a2f50] p-6 rounded-2xl shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#feb300] text-2xl">gavel</span>
                  <h2 className="font-headline font-bold text-base text-[#ebdcff]">Distinguished Jury Panel</h2>
                </div>
                <span className="text-[10px] text-[#a98a7c] uppercase font-bold">State Appointed Evaluators</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competition.judges.map((judge, idx) => (
                  <div
                    key={idx}
                    className="bg-[#211635] border border-[#3a2f50] p-4 rounded-xl flex items-center gap-3"
                  >
                    <img
                      src={judge.avatarUrl}
                      alt={judge.name}
                      className="w-14 h-14 rounded-full object-cover border border-[#ff6f00]/40 shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <h3 className="font-bold text-xs text-[#ebdcff] truncate">{judge.name}</h3>
                        <span className="material-symbols-outlined text-xs text-[#3ce36a]">verified</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-[#feb300] block mt-0.5">
                        {judge.title}
                      </span>
                      <p className="text-[11px] text-[#a98a7c] line-clamp-2 mt-0.5">{judge.credentials}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Guidelines & Protocol (Screenshot C) */}
            <section className="bg-[#251a39] border border-[#3a2f50] p-6 rounded-2xl shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff6f00] text-2xl">policy</span>
                <h2 className="font-headline font-bold text-base text-[#ebdcff]">
                  Competition Guidelines & Arena Protocol
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#e1bfb0]">
                {competition.rules.map((rule, idx) => (
                  <div key={idx} className="bg-[#211635] border border-[#3a2f50] p-3 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 font-bold text-[#ebdcff]">
                      <span className="material-symbols-outlined text-sm text-[#feb300]">info</span>
                      <span>Rule #{idx + 1}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#e1bfb0]">{rule}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ================= RIGHT SIDE (Interactive Registration Box ~5 cols) ================= */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            {/* Live Slot Meter & Countdown Box (Screenshot C) */}
            <div className="bg-[#2f2444] border border-[#3a2f50] p-5 rounded-2xl shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#feb300] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#feb300]"></span>
                  </span>
                  <span className="font-headline font-bold text-sm text-[#ebdcff]">Live Entry Meter</span>
                </div>
                <span className="text-xs font-bold text-[#feb300]">28 Slots Remaining</span>
              </div>

              {/* Capacity Progress Track */}
              <div className="space-y-1">
                <div className="w-full bg-[#130827] h-3 rounded-full overflow-hidden p-0.5">
                  <div
                    className="bg-gradient-to-r from-[#feb300] to-[#ff6f00] h-full rounded-full transition-all duration-500"
                    style={{ width: '72%' }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-[#a98a7c]">
                  <span>72 Couples Registered</span>
                  <span>Max Cap: 100 Couples</span>
                </div>
              </div>

              {/* Timer Callout */}
              <div className="bg-[#130827] px-4 py-2 rounded-xl flex items-center justify-between border border-[#251a39]">
                <div className="flex items-center gap-1.5 text-xs text-[#a98a7c]">
                  <span className="material-symbols-outlined text-sm">lock_clock</span>
                  <span className="uppercase text-[10px] font-bold">Portal Closes In:</span>
                </div>
                <div className="text-xs font-mono font-bold text-[#feb300] tracking-wider">
                  {formatTime(totalSeconds)}
                </div>
              </div>
            </div>

            {/* Registration Form Module (Screenshot C) */}
            <div className="bg-[#251a39] border border-[#3a2f50] p-6 rounded-2xl shadow-xl space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#feb300] block">
                  Instant Pass Allocation
                </span>
                <h3 className="font-headline font-bold text-lg text-[#ebdcff]">Couple Registration Form</h3>
                <p className="text-xs text-[#e1bfb0] mt-0.5">
                  Both dancers receive entry wristbands & RFID chest bibs.
                </p>
              </div>

              {isRegistered ? (
                <div className="p-4 bg-[#003912] border border-[#3ce36a] rounded-xl space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 text-[#3ce36a] font-bold text-sm">
                    <span className="material-symbols-outlined">celebration</span>
                    <span>Registration Confirmed!</span>
                  </div>
                  <p className="text-xs text-[#ebdcff] leading-relaxed">
                    Slot #{competition.registeredSlots + 1} assigned to <strong>{leadName}</strong> & <strong>{partnerName}</strong>. Digital pass #RANG-CP-073 dispatched to WhatsApp {leadMobile}.
                  </p>
                  <button
                    onClick={() => onNavigateTab('my-garba')}
                    className="w-full mt-2 py-2 rounded-full bg-[#3ce36a] text-[#003912] font-bold text-xs hover:brightness-110 cursor-pointer"
                  >
                    View in My Garba Hub
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  {/* Lead Dancer */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="font-bold text-[#ebdcff]">Lead Dancer (Spardhak 1) *</label>
                      <span className="text-[10px] text-[#3ce36a] font-semibold">Primary Contact</span>
                    </div>
                    <input
                      type="text"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="Full Name (as per Govt ID)"
                      className="w-full bg-[#180d2c] border border-[#3a2f50] text-[#ebdcff] p-2.5 rounded-lg focus:outline-none focus:border-[#ff6f00]"
                    />
                  </div>

                  {/* WhatsApp Mobile & Aadhaar */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] text-[#a98a7c] block">WhatsApp Mobile *</label>
                      <input
                        type="tel"
                        required
                        value={leadMobile}
                        onChange={(e) => setLeadMobile(e.target.value)}
                        className="w-full bg-[#180d2c] border border-[#3a2f50] text-[#ebdcff] p-2 rounded-lg focus:outline-none focus:border-[#ff6f00]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] text-[#a98a7c] block">Aadhaar (Last 4) *</label>
                      <input
                        type="text"
                        maxLength={4}
                        required
                        value={leadAadhaar}
                        onChange={(e) => setLeadAadhaar(e.target.value)}
                        className="w-full bg-[#180d2c] border border-[#3a2f50] text-[#ebdcff] p-2 rounded-lg focus:outline-none focus:border-[#ff6f00]"
                      />
                    </div>
                  </div>

                  {/* Partner Name */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="font-bold text-[#ebdcff]">Partner Name (Spardhak 2) *</label>
                      <span className="text-[10px] text-[#3ce36a] font-semibold">Age 18+ Required</span>
                    </div>
                    <input
                      type="text"
                      required
                      value={partnerName}
                      onChange={(e) => setPartnerName(e.target.value)}
                      placeholder="Partner Full Name"
                      className="w-full bg-[#180d2c] border border-[#3a2f50] text-[#ebdcff] p-2.5 rounded-lg focus:outline-none focus:border-[#ff6f00]"
                    />
                  </div>

                  {/* Category Configuration */}
                  <div className="space-y-1">
                    <span className="text-[11px] text-[#a98a7c] block">Category Configuration</span>
                    <div className="grid grid-cols-2 gap-2">
                      <label
                        className={`p-2.5 rounded-lg border flex items-center gap-2 cursor-pointer transition-colors ${
                          duoType === 'traditional-pair'
                            ? 'bg-[#2f2444] border-[#ff6f00] text-[#feb300]'
                            : 'bg-[#180d2c] border-[#3a2f50] text-[#ebdcff]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="couple_type"
                          checked={duoType === 'traditional-pair'}
                          onChange={() => setDuoType('traditional-pair')}
                          className="accent-[#ff6f00]"
                        />
                        <span className="text-[11px] font-semibold">Traditional Couple (M + F)</span>
                      </label>
                      <label
                        className={`p-2.5 rounded-lg border flex items-center gap-2 cursor-pointer transition-colors ${
                          duoType === 'open-duo'
                            ? 'bg-[#2f2444] border-[#ff6f00] text-[#feb300]'
                            : 'bg-[#180d2c] border-[#3a2f50] text-[#ebdcff]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="couple_type"
                          checked={duoType === 'open-duo'}
                          onChange={() => setDuoType('open-duo')}
                          className="accent-[#ff6f00]"
                        />
                        <span className="text-[11px] font-semibold">Open Raas Duo (Any)</span>
                      </label>
                    </div>
                  </div>

                  {/* Attire declaration */}
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={attireAgreed}
                      onChange={(e) => setAttireAgreed(e.target.checked)}
                      className="mt-0.5 accent-[#ff6f00]"
                    />
                    <span className="text-[11px] text-[#e1bfb0] leading-snug">
                      We declare adherence to authentic traditional Gujarati costumes (Chaniya Choli & Kediyu/Kurta) and confirm no commercial branding on attire.
                    </span>
                  </label>

                  {/* Fee Breakdown */}
                  <div className="bg-[#130827] border border-[#251a39] p-3 rounded-xl space-y-1">
                    <div className="flex justify-between text-[#a98a7c]">
                      <span>Couple Entry Fee (2 Participants)</span>
                      <span className="text-[#ebdcff] font-semibold">₹100.00</span>
                    </div>
                    <div className="flex justify-between text-[#a98a7c]">
                      <span>RFID Wristbands & Arena Insurance</span>
                      <span className="text-[#3ce36a] font-semibold">FREE (Trust Sponsored)</span>
                    </div>
                    <div className="flex justify-between text-[#a98a7c]">
                      <span>Convenience & Payment Fee</span>
                      <span className="text-[#ebdcff] font-semibold">₹0.00</span>
                    </div>
                    <div className="pt-1 border-t border-[#251a39] flex justify-between font-bold text-sm text-[#ebdcff]">
                      <span>Total Payable:</span>
                      <span className="text-[#feb300] font-prize-display text-base">₹100</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full bg-[#ff6f00] hover:bg-[#ff6f00]/90 text-white font-bold text-xs shadow-lg transition-transform active:scale-[0.99] flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-base">progress_activity</span>
                        <span>Confirming Slot #73 via UPI...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-base">check_circle</span>
                        <span>Confirm & Pay ₹100 via Instant UPI</span>
                      </>
                    )}
                  </button>

                  {/* Trust Signals */}
                  <div className="flex items-center justify-center gap-4 text-[10px] text-[#a98a7c]">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">lock</span> 256-bit Encrypted
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">verified</span> Instant QR
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">currency_rupee</span> Official Trust Rate
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Ground Desk Assistance */}
            <div className="bg-[#211635] border border-[#3a2f50] p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#2f2444] flex items-center justify-center text-[#feb300]">
                  <span className="material-symbols-outlined text-lg">headset_mic</span>
                </div>
                <div className="text-xs">
                  <span className="font-bold text-[#ebdcff] block">Need Help Registering?</span>
                  <span className="text-[11px] text-[#a98a7c]">Ground desk hotline & concierge</span>
                </div>
              </div>
              <a
                href="tel:18002334272"
                className="bg-[#2f2444] text-[#feb300] px-3 py-1 rounded-full text-xs font-bold hover:bg-[#3a2f50] transition-colors"
              >
                1800-233-GARBA
              </a>
            </div>
          </div>
        </div>

        {/* Previous Edition Gold Diya Laureates Hall of Fame (Screenshot C) */}
        <section className="bg-[#251a39] border border-[#3a2f50] p-6 rounded-2xl shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#feb300] block">
                Past Champions Inspiration
              </span>
              <h2 className="font-headline font-bold text-base text-[#ebdcff]">
                Previous Edition Gold Diya Laureates
              </h2>
            </div>
            <span className="text-xs text-[#a98a7c]">Navratri Mahotsav Retrospective</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Story 1 */}
            <div className="bg-[#211635] border border-[#3a2f50] rounded-xl overflow-hidden flex flex-col justify-between">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxbf8CkjyDDHzGPTSAA2ThdqpiQMYwnBRXeIE8H2WbPcXFApOhffYLKnGeyqeUuikMSCugq6U91fhec8os6pBDpz6e8R3OnOr36zov9-ph3BAtH_asLoetLjpr4B-ngtO-A5XQTM_j2r4zJ3lF5qVLwHxlVfarz5P_3yrd4kVD5oQmcd_Oy-dgrZizmFuF-7fNaS_76A1AJuzn3fcpVwX62Q9XHUMs1v6rCwfcxWrLtoJ3MRgIrgFb"
                alt="2025 Gold Medalists"
                className="w-full h-36 object-cover"
              />
              <div className="p-3.5 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#feb300] font-bold">2025 Gold Medalists</span>
                  <span className="text-[#a98a7c]">Ahmedabad</span>
                </div>
                <h4 className="font-bold text-xs text-[#ebdcff]">Kunal & Meera Joshi</h4>
                <p className="text-[11px] text-[#e1bfb0] leading-relaxed">
                  Scored 98.4/100 with their flawless 12-step Kathiawadi Dodhiyu sequence in 180 BPM live dhol finale.
                </p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-[#211635] border border-[#3a2f50] rounded-xl overflow-hidden flex flex-col justify-between">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Tgl6e6_PI928EkqpVPOK4M06TOtdQfrt6A88CQWBCeNZzU4KWSxC5Ydpt8bsxwZ8dEks1auiPiqTbJkqB9RyUQDkg2G6eTENTeiGbzuDnYslgB9Ghj1-Sgl4eqYLHLIDQ6EFkWWCNo052MCr_a9fv1SuHwESQx4nqmdGONevYG0py1Zjv7lMZYx_eO29IpI62MmRSf0Tuv8IXyboFnSG1l8o7xwAIOcAYVy4A6EZdGwsxMMb4dW1"
                alt="2024 Gold Medalists"
                className="w-full h-36 object-cover"
              />
              <div className="p-3.5 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#feb300] font-bold">2024 Gold Medalists</span>
                  <span className="text-[#a98a7c]">Vadodara</span>
                </div>
                <h4 className="font-bold text-xs text-[#ebdcff]">Yash & Dhwani Shah</h4>
                <p className="text-[11px] text-[#e1bfb0] leading-relaxed">
                  Acclaimed for perfect partner synchrony and authentic handcrafted Rabari heritage embroidery.
                </p>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-[#211635] border border-[#3a2f50] rounded-xl overflow-hidden flex flex-col justify-between">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpXRZknJTwCdibXza5iEyzenjzdYrFRKW2PzowQZfY9hIjT9mE-XKbfPxfLWLQu2yKLnk7HTK_s3PeEXtjv0N6FffWKO6gf75BzwqkfRB930AztZAveO2r8nUH0TAccB878aXGLA6JAf1BT4Fe2jnrDTfooBro47T1-1CGo-PNLvCUd4743DRCSAWs9jjr4dmo6mi-1BjIesY3CPHlXy3E2mw1b3q80xsJ5aHQGJ7NIKHufIuEMM-9"
                alt="2023 Gold Medalists"
                className="w-full h-36 object-cover"
              />
              <div className="p-3.5 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#feb300] font-bold">2023 Gold Medalists</span>
                  <span className="text-[#a98a7c]">Rajkot</span>
                </div>
                <h4 className="font-bold text-xs text-[#ebdcff]">Hardik & Pooja Patel</h4>
                <p className="text-[11px] text-[#e1bfb0] leading-relaxed">
                  Celebrated for unyielding energy across three continuous rounds and authentic Saurashtra footwork.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

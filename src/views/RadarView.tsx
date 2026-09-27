import React, { useState, useEffect } from 'react';
import { FastPassModal } from '../components/FastPassModal';
import { Language, TRANSLATIONS } from '../utils/translations';

interface RadarViewProps {
  onNavigateTab: (tab: string) => void;
  language: Language;
}

export const RadarView: React.FC<RadarViewProps> = ({ onNavigateTab, language }) => {
  const t = TRANSLATIONS[language];

  // Sync Countdown simulator
  const [syncCountdown, setSyncCountdown] = useState<number>(9);
  const [isPassModalOpen, setIsPassModalOpen] = useState<boolean>(false);
  const [p2Reserved, setP2Reserved] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSyncCountdown((prev) => (prev <= 1 ? 15 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col bg-[#180d2c] text-[#ebdcff] min-h-screen pt-20">
      <FastPassModal isOpen={isPassModalOpen} onClose={() => setIsPassModalOpen(false)} />

      {/* Command Center Global Dispatch Bar (Screenshot A) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-2.5 bg-[#130827] border-b border-[#251a39] text-[#ebdcff]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 bg-[#2f2444] px-3 py-1 rounded-full border border-[#3a2f50]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#feb300] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#feb300]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#feb300] font-bold">
                {t.liveTelemetry}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[#e1bfb0]">
              <span className="material-symbols-outlined text-sm text-[#ff6f00]">sensors</span>
              <span>Sensors: GMDC Ground, Rangtaali 2026 (Day 6 · Khelaiya Aaso Sud Chhat)</span>
            </div>

            <span className="hidden md:inline text-[#a98a7c]">|</span>

            <div className="flex items-center gap-1.5 text-[#3ce36a] font-semibold">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>
                {t.aartiWindow} · {t.nextSync}{' '}
                <span className="font-mono">{syncCountdown < 10 ? `0${syncCountdown}` : syncCountdown}s</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 bg-[#211635] px-3 py-1 rounded-md border border-[#3a2f50]">
              <span className="material-symbols-outlined text-[#ff6f00] text-sm">traffic</span>
              <span className="text-[#ebdcff] font-semibold">Helmet Cross Rd advisory:</span>
              <span className="text-[#feb300]">Divert via Drive-In service lane to P2 & Gate 2</span>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-[#a98a7c]">
              <span className="material-symbols-outlined text-xs text-[#3ce36a]">verified_user</span>
              <span>Ahmedabad City Police Integrated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Fast Pass Banner (Screenshot A) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#2f2444] via-[#251a39] to-[#2f2444] rounded-2xl p-5 border border-[#3a2f50] shadow-xl relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-[#ff6f00]/10 blur-2xl pointer-events-none"></div>
          <div className="absolute left-1/3 -bottom-10 w-60 h-24 rounded-full bg-[#feb300]/10 blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5">
            {/* User Bio and Bib */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#ff6f00] flex items-center justify-center text-white shadow-md shrink-0">
                <span className="material-symbols-outlined text-3xl">badge</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-[#feb300] bg-[#130827] px-2.5 py-0.5 rounded-full font-bold">
                    Spardha Duo · Group A
                  </span>
                  <span className="text-[10px] text-[#3ce36a] bg-[#00b349]/20 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-xs">check_circle</span> Biometric Pre-Cleared
                  </span>
                  <span className="text-xs text-[#a98a7c] font-mono">Bib #RANG-CP-072</span>
                </div>
                <h1 className="font-headline font-bold text-xl sm:text-2xl text-[#ebdcff]">
                  Kavita Patel & Parth Shah
                </h1>
                <p className="text-xs text-[#e1bfb0]">
                  Navratri Mahotsav Pratiyogita · Round 3 (Chokdi & Tran Taali Rhythm Sequence)
                </p>
              </div>
            </div>

            {/* Gate Assignment Box & Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full xl:w-auto justify-between xl:justify-end">
              <div className="bg-[#130827] px-4 py-2.5 rounded-xl border border-[#3a2f50] flex items-center gap-3">
                <div className="text-center px-2.5 py-1 bg-[#2f2444] rounded-lg">
                  <span className="text-[9px] text-[#a98a7c] uppercase block font-bold">Dedicated</span>
                  <span className="font-prize-display text-xl text-[#feb300]">GATE 2</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#ebdcff]">Performer Express Lane</div>
                  <div className="text-[11px] text-[#3ce36a] flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">directions_walk</span>
                    80m direct walk to Stage Desk (~2 mins)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPassModalOpen(true)}
                  className="bg-[#ff6f00] hover:bg-[#ff6f00]/90 text-white font-bold text-xs px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">qr_code_2</span>
                  <span>Fast Pass QR</span>
                </button>
                <button
                  onClick={() => setIsPassModalOpen(true)}
                  className="bg-[#211635] hover:bg-[#2f2444] text-[#ebdcff] border border-[#3a2f50] font-bold text-xs px-4 py-2.5 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base text-[#feb300]">nfc</span>
                  <span>NFC Tap Ready</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout (Desktop 55% / 45% Split View) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= LEFT COLUMN: 55% (~7 cols) Radar Map & Turnstiles ================= */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Arena Radar Map (Screenshot A) */}
            <div className="bg-[#251a39] border border-[#3a2f50] rounded-2xl p-5 shadow-xl flex flex-col">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#3a2f50]">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-headline font-bold text-base text-[#ebdcff]">
                      GMDC Ground Ground Radar & Arena Sectors
                    </h2>
                    <span className="bg-[#00b349]/20 text-[#3ce36a] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Active Geofence
                    </span>
                  </div>
                  <p className="text-xs text-[#e1bfb0] mt-0.5">
                    Live positioning of entries, stages, chowks, and competitor holding tunnels
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
                    className="p-1.5 rounded-lg bg-[#211635] border border-[#3a2f50] text-[#ebdcff] hover:text-[#ff6f00]"
                    title="Zoom in"
                  >
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                  </button>
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.1))}
                    className="p-1.5 rounded-lg bg-[#211635] border border-[#3a2f50] text-[#ebdcff] hover:text-[#ff6f00]"
                    title="Zoom out"
                  >
                    <span className="material-symbols-outlined text-sm">zoom_out</span>
                  </button>
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="p-1.5 rounded-lg bg-[#211635] border border-[#3a2f50] text-[#ebdcff] hover:text-[#ff6f00]"
                    title="Recenter"
                  >
                    <span className="material-symbols-outlined text-sm">my_location</span>
                  </button>
                </div>
              </div>

              {/* Radar Visual Canvas (Concentric Circles & Points of Interest) */}
              <div className="relative w-full h-[370px] bg-[#130827] rounded-xl overflow-hidden p-4 flex items-center justify-center border border-[#251a39]">
                {/* Grid Dots */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: 'radial-gradient(#ff6f00 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Concentric vector rings */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel})` }}
                  preserveAspectRatio="none"
                >
                  <circle cx="50%" cy="50%" r="140" fill="none" stroke="#3a2f50" strokeDasharray="4 4" strokeWidth="1.5" />
                  <circle cx="50%" cy="50%" r="95" fill="none" stroke="#3a2f50" strokeWidth="1.5" />
                  <circle cx="50%" cy="50%" r="48" fill="none" stroke="#feb300" strokeWidth="2" opacity="0.4" />
                  <path d="M 50% 50% L 18% 28%" stroke="#3ce36a" strokeDasharray="3 3" strokeWidth="2" opacity="0.6" />
                  <path d="M 50% 50% L 82% 28%" stroke="#a98a7c" strokeWidth="1.5" opacity="0.4" />
                  <path d="M 50% 50% L 18% 75%" stroke="#feb300" strokeWidth="1.5" opacity="0.4" />
                  <path d="M 50% 50% L 82% 75%" stroke="#a98a7c" strokeWidth="1.5" opacity="0.4" />
                </svg>

                {/* Center: Mataji Chowk & Mandap */}
                <div className="relative z-10 flex flex-col items-center justify-center p-3 rounded-full bg-[#2f2444]/90 border border-[#feb300]/40 shadow-2xl backdrop-blur-md">
                  <div className="w-11 h-11 rounded-full bg-[#feb300]/20 flex items-center justify-center text-[#feb300] mb-0.5">
                    <span className="material-symbols-outlined text-2xl">local_fire_department</span>
                  </div>
                  <span className="text-xs font-bold text-[#ebdcff]">Mataji Chowk</span>
                  <span className="text-[10px] text-[#feb300]">Central Aarti Mandap</span>
                </div>

                {/* North Arena: Main Stage */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-[#2f2444] border border-[#3a2f50] px-4 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ff6f00] text-sm">speaker</span>
                  <div>
                    <span className="text-xs font-bold text-[#ebdcff] block">North Orchestral Arena Stage</span>
                    <span className="text-[10px] text-[#a98a7c]">Lead Vocalists: Atul Purohit & Troupe</span>
                  </div>
                </div>

                {/* Gate 1 Pin: VIP */}
                <div className="absolute top-10 right-4 z-10 bg-[#211635] border border-[#3a2f50] px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3ce36a]"></div>
                  <div>
                    <div className="text-[11px] font-bold text-[#ebdcff]">GATE 1 · VIP</div>
                    <div className="text-[10px] text-[#a98a7c]">Valet Zone (P1)</div>
                  </div>
                </div>

                {/* Gate 2 Pin: Performer Express (Active Highlight) */}
                <div className="absolute top-10 left-4 z-10 bg-[#2f2444] border-2 border-[#ff6f00] p-2.5 rounded-xl shadow-xl shadow-[#ff6f00]/20">
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ce36a] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3ce36a]"></span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#feb300] flex items-center gap-1">
                        <span>GATE 2 (YOUR ENTRY)</span>
                        <span className="material-symbols-outlined text-xs">verified</span>
                      </div>
                      <div className="text-[10px] text-[#e1bfb0]">Spardha Performer Express · 80m to Desk</div>
                    </div>
                  </div>
                  <div className="mt-1 pt-1 border-t border-[#3a2f50] flex items-center justify-between text-[11px] text-[#3ce36a] font-semibold">
                    <span>Direct Access Tunnel</span>
                    <span className="font-bold">Wait: 2 min</span>
                  </div>
                </div>

                {/* Gate 3 Pin: General West */}
                <div className="absolute bottom-10 left-4 z-10 bg-[#211635] border border-[#3a2f50] px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#feb300]"></div>
                  <div>
                    <div className="text-[11px] font-bold text-[#ebdcff]">GATE 3 · West Lawn</div>
                    <div className="text-[10px] text-[#a98a7c]">General Passes (P3 Walkway)</div>
                  </div>
                </div>

                {/* Gate 4 Pin: Metro Link */}
                <div className="absolute bottom-10 right-4 z-10 bg-[#211635] border border-[#3a2f50] px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3ce36a]"></div>
                  <div>
                    <div className="text-[11px] font-bold text-[#ebdcff]">GATE 4 · East Lawn</div>
                    <div className="text-[10px] text-[#a98a7c]">Metro Link · Season Pass</div>
                  </div>
                </div>

                {/* Legend Overlay */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-[#130827]/90 border border-[#251a39] px-4 py-1 rounded-full backdrop-blur-sm flex items-center gap-4 text-[11px] text-[#e1bfb0]">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#3ce36a]"></span> Smooth Flow (&lt;5m)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#feb300]"></span> Moderate (5-15m)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#ffb4ab]"></span> Queued (&gt;15m)
                  </span>
                </div>
              </div>

              {/* Bottom Ground Quick Stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-[#211635] border border-[#3a2f50] p-3 rounded-xl text-center">
                  <span className="text-[11px] text-[#a98a7c] block">Active Dancers Inside</span>
                  <span className="font-headline font-bold text-lg text-[#ebdcff]">14,820</span>
                  <span className="text-[10px] text-[#3ce36a] block mt-0.5">+420 entering / 10 min</span>
                </div>
                <div className="bg-[#211635] border border-[#3a2f50] p-3 rounded-xl text-center">
                  <span className="text-[11px] text-[#a98a7c] block">Registered Mandlis Checked In</span>
                  <span className="font-headline font-bold text-lg text-[#feb300]">42 / 48</span>
                  <span className="text-[10px] text-[#a98a7c] block mt-0.5">Holding Tunnel B Ready</span>
                </div>
                <div className="bg-[#211635] border border-[#3a2f50] p-3 rounded-xl text-center">
                  <span className="text-[11px] text-[#a98a7c] block">Arena Ambient Temp</span>
                  <span className="font-headline font-bold text-lg text-[#ebdcff]">27°C</span>
                  <span className="text-[10px] text-[#ff6f00] block mt-0.5">Misting Coolers Active</span>
                </div>
              </div>
            </div>

            {/* Live Turnstile Wait Radar Grid (Screenshot A) */}
            <div className="bg-[#251a39] border border-[#3a2f50] rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-headline font-bold text-base text-[#ebdcff]">
                    {t.gateWaitRadar}
                  </h2>
                  <p className="text-xs text-[#e1bfb0]">
                    Real-time throughput metrics powered by optical sensor gates
                  </p>
                </div>
                <span className="text-xs text-[#3ce36a] bg-[#130827] border border-[#3a2f50] px-3 py-1 rounded-full font-semibold">
                  All 4 Entry Plazas Open
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Gate 2: Your Gate */}
                <div className="bg-[#2f2444] border-2 border-[#ff6f00]/70 rounded-xl p-4 flex flex-col justify-between shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#ff6f00] text-white px-3 py-0.5 rounded-bl-lg text-[10px] uppercase font-bold tracking-wider">
                    Your Gate
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-headline font-bold text-base text-[#feb300]">Gate 2</span>
                      <span className="text-xs text-[#ebdcff]">Competitor & Performer</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3ce36a]"></span>
                      <span className="text-xs text-[#3ce36a] font-bold uppercase tracking-wider">Fast Moving</span>
                      <span className="text-[#a98a7c] text-xs">•</span>
                      <span className="text-xs text-[#e1bfb0]">~2 min avg wait</span>
                    </div>
                  </div>
                  <div className="space-y-1 bg-[#130827] p-2.5 rounded-lg text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#a98a7c]">Biometric Turnstiles:</span>
                      <span className="text-[#ebdcff] font-semibold">6 / 6 Operational</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a98a7c]">Performer Express Bay:</span>
                      <span className="text-[#3ce36a] font-semibold">Zero Congestion</span>
                    </div>
                  </div>
                </div>

                {/* Gate 1: VIP */}
                <div className="bg-[#211635] border border-[#3a2f50] rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-headline font-bold text-base text-[#ebdcff]">Gate 1</span>
                      <span className="text-xs text-[#a98a7c]">VIP & State Dignitaries</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3ce36a]"></span>
                      <span className="text-xs text-[#3ce36a] font-bold uppercase tracking-wider">Steady Flow</span>
                      <span className="text-[#a98a7c] text-xs">•</span>
                      <span className="text-xs text-[#e1bfb0]">~3 min avg wait</span>
                    </div>
                  </div>
                  <div className="space-y-1 bg-[#130827] p-2.5 rounded-lg text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#a98a7c]">Valet Drop Bays:</span>
                      <span className="text-[#ebdcff] font-semibold">8 Active Bays</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a98a7c]">Lounge Direct Access:</span>
                      <span className="text-[#ebdcff] font-semibold">Open with RFID</span>
                    </div>
                  </div>
                </div>

                {/* Gate 3: General West */}
                <div className="bg-[#211635] border border-[#3a2f50] rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-headline font-bold text-base text-[#ebdcff]">Gate 3</span>
                      <span className="text-xs text-[#a98a7c]">General West Lawn</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#feb300]"></span>
                      <span className="text-xs text-[#feb300] font-bold uppercase tracking-wider">High Volume</span>
                      <span className="text-[#a98a7c] text-xs">•</span>
                      <span className="text-xs text-[#e1bfb0]">~14 min avg wait</span>
                    </div>
                  </div>
                  <div className="space-y-1 bg-[#130827] p-2.5 rounded-lg text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#a98a7c]">Surge Advisory:</span>
                      <span className="text-[#feb300] font-semibold">Pre-Aarti Crowd Rush</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a98a7c]">Turnstiles Operating:</span>
                      <span className="text-[#ebdcff] font-semibold">12 / 12 (Aux 2 Open)</span>
                    </div>
                  </div>
                </div>

                {/* Gate 4: Season Pass & Metro */}
                <div className="bg-[#211635] border border-[#3a2f50] rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-headline font-bold text-base text-[#ebdcff]">Gate 4</span>
                      <span className="text-xs text-[#a98a7c]">Season Pass & Metro East</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3ce36a]"></span>
                      <span className="text-xs text-[#3ce36a] font-bold uppercase tracking-wider">Fast Track</span>
                      <span className="text-[#a98a7c] text-xs">•</span>
                      <span className="text-xs text-[#e1bfb0]">~5 min avg wait</span>
                    </div>
                  </div>
                  <div className="space-y-1 bg-[#130827] p-2.5 rounded-lg text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#a98a7c]">Metro Pedestrian Feed:</span>
                      <span className="text-[#ebdcff] font-semibold">400m Direct Path</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a98a7c]">Digital Scanners:</span>
                      <span className="text-[#ebdcff] font-semibold">10 Dedicated QR Portals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 45% (~5 cols) Parking Decks & Transit Radar ================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Parking Gauge Card (Screenshot A) */}
            <div className="bg-[#251a39] border border-[#3a2f50] rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-headline font-bold text-base text-[#ebdcff]">
                    {t.liveParkingRadar}
                  </h2>
                  <p className="text-xs text-[#e1bfb0]">Sensors updated 30 seconds ago across 4 sectors</p>
                </div>
                <div className="text-right">
                  <span className="font-prize-display text-2xl text-[#feb300]">420</span>
                  <span className="text-[11px] text-[#a98a7c] block">/ 1,800 total spots left</span>
                </div>
              </div>

              {/* Total Capacity Visual Bar */}
              <div>
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="text-[#e1bfb0]">Overall Deck Saturation</span>
                  <span className="text-[#feb300] font-bold">76.6% Full</span>
                </div>
                <div className="w-full h-3 bg-[#130827] rounded-full overflow-hidden flex">
                  <div
                    className="bg-gradient-to-r from-[#feb300] to-[#ff6f00] h-full rounded-full transition-all duration-500"
                    style={{ width: '76.6%' }}
                  />
                </div>
              </div>

              {/* Parking Decks Breakdown */}
              <div className="space-y-3">
                {/* P2 Lot: Competitor Reserved (Highlight) */}
                <div className="bg-[#2f2444] border border-[#ff6f00]/50 rounded-xl p-4 shadow-md space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[#feb300] text-base">stars</span>
                        <span className="font-headline font-bold text-sm text-[#ebdcff]">P2 Competitor Lot</span>
                        <span className="bg-[#ff6f00]/20 text-[#ffdbcb] text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Reserved
                        </span>
                      </div>
                      <p className="text-xs text-[#e1bfb0] mt-0.5">
                        120m to Gate 2 · Direct access via Drive-In Rd Ramp
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-base text-[#3ce36a]">48 Left</span>
                      <span className="text-[10px] text-[#a98a7c] block">of 150 slots</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#130827] px-3 py-2 rounded-lg text-xs">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#e1bfb0]">
                      <span className="material-symbols-outlined text-xs text-[#3ce36a]">check_circle</span>
                      <span>Free with Spardha Bib #RANG-CP-072</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://maps.google.com/?q=GMDC+Ground+Ahmedabad"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#ff6f00] hover:bg-[#ff6f00]/90 text-white text-[11px] px-3 py-1 rounded-full font-bold flex items-center gap-1 transition-all"
                      >
                        <span className="material-symbols-outlined text-xs">navigation</span>
                        <span>Navigate</span>
                      </a>
                      <button
                        onClick={() => setP2Reserved(!p2Reserved)}
                        className={`text-[11px] px-3 py-1 rounded-full font-bold transition-colors cursor-pointer ${
                          p2Reserved
                            ? 'bg-[#00b349]/30 text-[#3ce36a] border border-[#3ce36a]/40'
                            : 'bg-[#211635] text-[#feb300] hover:bg-[#3a2f50]'
                        }`}
                      >
                        {p2Reserved ? 'Reserved ✓' : 'Reserve'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* P1 VIP Deck */}
                <div className="bg-[#211635] border border-[#3a2f50] rounded-xl p-3.5 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-[#ebdcff]">P1 VIP Deck</span>
                      <span className="text-[10px] text-[#3ce36a] bg-[#00b349]/20 px-2 py-0.5 rounded-full font-semibold">
                        Valet Active
                      </span>
                    </div>
                    <p className="text-[11px] text-[#a98a7c] mt-0.5">Adjacent Gate 1 · Reserved for pass holders</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-sm text-[#feb300]">18 Left</span>
                    <span className="text-[10px] text-[#a98a7c] block">of 200 slots</span>
                  </div>
                </div>

                {/* P3 4-Wheeler Deck */}
                <div className="bg-[#211635] border border-[#3a2f50] rounded-xl p-3.5 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs text-[#ebdcff] block">P3 General 4-Wheeler Deck</span>
                    <p className="text-[11px] text-[#a98a7c] mt-0.5">350m walk to Gate 3 · Free 6-min Golf Shuttle</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-sm text-[#3ce36a]">180 Left</span>
                    <span className="text-[10px] text-[#a98a7c] block">of 850 slots</span>
                  </div>
                </div>

                {/* P4 2-Wheeler Zone */}
                <div className="bg-[#211635] border border-[#3a2f50] rounded-xl p-3.5 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs text-[#ebdcff] block">P4 Two-Wheeler Plaza</span>
                    <p className="text-[11px] text-[#a98a7c] mt-0.5">Dedicated helmet locker bay · ₹30 token entry</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-sm text-[#3ce36a]">174 Left</span>
                    <span className="text-[10px] text-[#a98a7c] block">of 600 slots</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Transit & Shuttles (Screenshot A) */}
            <div className="bg-[#251a39] border border-[#3a2f50] rounded-2xl p-5 shadow-xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff6f00] text-xl">directions_subway</span>
                <h2 className="font-headline font-bold text-sm text-[#ebdcff]">
                  Multi-Modal Transit & Shuttles
                </h2>
              </div>

              <div className="space-y-3">
                {/* Metro Banner */}
                <div className="bg-[#211635] border border-[#3a2f50] p-3 rounded-xl flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#3a2f50] flex items-center justify-center text-[#ff6f00] shrink-0">
                    <span className="material-symbols-outlined text-lg">train</span>
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#ebdcff]">Gujarat Metro Navratri Special</span>
                      <span className="text-[10px] text-[#3ce36a] font-bold">Every 6 mins</span>
                    </div>
                    <p className="text-[#e1bfb0] text-[11px] mt-0.5 leading-relaxed">
                      GMDC Ground Station is 400m from Gate 4. Extended night schedule until{' '}
                      <strong className="text-[#feb300]">1:30 AM</strong> with fast tokens on WhatsApp.
                    </p>
                  </div>
                </div>

                {/* University Overflow Parking */}
                <div className="bg-[#211635] border border-[#3a2f50] p-3 rounded-xl flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#3a2f50] flex items-center justify-center text-[#ffd799] shrink-0">
                    <span className="material-symbols-outlined text-lg">airport_shuttle</span>
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#ebdcff]">Ahmedabad University Overflow Deck</span>
                      <span className="text-[10px] text-[#3ce36a] font-bold">700+ Shaded Slots</span>
                    </div>
                    <p className="text-[#e1bfb0] text-[11px] mt-0.5 leading-relaxed">
                      800m north · Free AC Feeder Shuttles departing every 7 minutes dropping directly at Gate 2.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Support Bar (Screenshot A) */}
            <div className="bg-[#130827] border border-[#3a2f50] rounded-2xl p-4 shadow-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#93000a]/30 flex items-center justify-center text-[#ffb4ab] shrink-0">
                  <span className="material-symbols-outlined text-lg">fmd_bad</span>
                </div>
                <div className="text-xs">
                  <span className="font-bold text-[#ebdcff] block">On-Ground Emergency Help</span>
                  <span className="text-[#e1bfb0] text-[11px]">Gate 2 Medical Desk · Assistance Carts</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="tel:1095"
                  className="bg-[#2f2444] hover:bg-[#3a2f50] text-[#ebdcff] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-xs text-[#ff6f00]">call</span>
                  <span>1095 Police</span>
                </a>
                <a
                  href="tel:18002334272"
                  className="bg-[#2f2444] hover:bg-[#3a2f50] text-[#ebdcff] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-xs text-[#feb300]">help</span>
                  <span>Help Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

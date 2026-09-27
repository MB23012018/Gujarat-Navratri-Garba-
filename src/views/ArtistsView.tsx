import React, { useState } from 'react';
import { ArtistProfile } from '../types';
import { ARTISTS_DATA } from '../data/mockData';
import { Language, TRANSLATIONS } from '../utils/translations';

interface ArtistsViewProps {
  onSelectEvent: (eventId: string) => void;
  language: Language;
}

export const ArtistsView: React.FC<ArtistsViewProps> = ({ onSelectEvent, language }) => {
  const t = TRANSLATIONS[language];
  const [artistQuery, setArtistQuery] = useState('');

  const filteredArtists = ARTISTS_DATA.filter((a) => {
    if (!artistQuery.trim()) return true;
    const q = artistQuery.toLowerCase();
    return (
      a.name.toLowerCase().includes(q) ||
      a.gujaratiName.toLowerCase().includes(q) ||
      a.genre.toLowerCase().includes(q) ||
      a.navratriSchedule.some((s) => s.city.toLowerCase().includes(q) || s.venueName.toLowerCase().includes(q))
    );
  });

  return (
    <div className="w-full flex flex-col bg-[#180d2c] text-[#ebdcff] min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2f2444] text-[#feb300] text-xs font-bold border border-[#3a2f50]">
            <span className="material-symbols-outlined text-sm">mic</span>
            <span>Gujarat Navratri 2026 Headliner Lineup</span>
          </div>
          <h1 className="font-headline font-extrabold text-3xl sm:text-4xl text-[#ebdcff]">
            Search Artists & Performance Schedules
          </h1>
          <p className="text-xs sm:text-sm text-[#e1bfb0] leading-relaxed">
            Search "Where is this artist performing during Navratri?" Explore verified 9-night dates across Ahmedabad, Vadodara, Surat, and Rajkot.
          </p>

          {/* Search bar */}
          <div className="relative max-w-xl mx-auto pt-2">
            <span className="material-symbols-outlined absolute left-4 top-5 text-[#a98a7c] text-lg">search</span>
            <input
              type="text"
              value={artistQuery}
              onChange={(e) => setArtistQuery(e.target.value)}
              placeholder="Search by artist name, song, or city (e.g., Kinjal Dave, Atul Purohit)..."
              className="w-full bg-[#211635] border border-[#ff6f00]/50 rounded-full pl-11 pr-4 py-3 text-xs text-[#ebdcff] placeholder-[#a98a7c] focus:outline-none focus:ring-2 focus:ring-[#ff6f00]"
            />
          </div>
        </div>

        {/* Artists Directory Grid */}
        <div className="space-y-8">
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className="bg-[#211635] border border-[#3a2f50] rounded-2xl p-6 shadow-xl space-y-6"
            >
              {/* Profile Card Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={artist.imageUrl}
                    alt={artist.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#ff6f00]/40 shadow-lg shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-headline font-bold text-xl text-[#ebdcff]">{artist.name}</h2>
                      <span className="text-sm text-[#feb300] font-semibold">({artist.gujaratiName})</span>
                    </div>
                    <span className="text-xs font-bold text-[#ffb691] block mt-0.5">{artist.title}</span>
                    <p className="text-xs text-[#e1bfb0] mt-1 max-w-2xl leading-relaxed">{artist.bio}</p>
                  </div>
                </div>

                <div className="bg-[#180d2c] border border-[#3a2f50] p-3 rounded-xl text-right shrink-0">
                  <span className="text-[10px] uppercase text-[#a98a7c] font-bold block">Gujarat Tour Stops</span>
                  <span className="font-prize-display text-xl text-[#feb300]">
                    {artist.navratriSchedule.length} Verified Venues
                  </span>
                </div>
              </div>

              {/* Verified Performance Schedule Calendar */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffd799] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#3ce36a]">event_available</span>
                  <span>Navratri 2026 Gujarat Tour Stops</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {artist.navratriSchedule.map((sched, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#180d2c] border border-[#251a39] rounded-xl flex flex-col justify-between hover:border-[#ff6f00] transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#feb300] font-bold">Night {sched.nightNumber}</span>
                          <span className="text-[#3ce36a] font-semibold">{sched.city}</span>
                        </div>
                        <h5 className="font-bold text-xs text-[#ebdcff] line-clamp-1">{sched.eventName}</h5>
                        <p className="text-[11px] text-[#a98a7c] line-clamp-1">{sched.venueName}</p>
                        <div className="text-[10px] text-[#e1bfb0] pt-1">
                          <span>{sched.dateStr}</span> · <span>{sched.timeSlot}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectEvent(sched.eventId)}
                        className="mt-3 w-full py-1.5 rounded-lg bg-[#251a39] hover:bg-[#ff6f00] text-white text-xs font-bold transition-all cursor-pointer text-center"
                      >
                        View Arena & Pass
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

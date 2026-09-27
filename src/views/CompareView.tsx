import React, { useState } from 'react';
import { GarbaEvent } from '../types';
import { Language, TRANSLATIONS } from '../utils/translations';

interface CompareViewProps {
  events: GarbaEvent[];
  onSelectEvent: (eventId: string) => void;
  language: Language;
}

export const CompareView: React.FC<CompareViewProps> = ({ events, onSelectEvent, language }) => {
  const t = TRANSLATIONS[language];
  const [selectedEvent1Id, setSelectedEvent1Id] = useState<string>(events[0]?.id || '');
  const [selectedEvent2Id, setSelectedEvent2Id] = useState<string>(events[1]?.id || events[0]?.id || '');

  const ev1 = events.find((e) => e.id === selectedEvent1Id) || events[0];
  const ev2 = events.find((e) => e.id === selectedEvent2Id) || events[1] || events[0];

  return (
    <div className="w-full flex flex-col bg-[#180d2c] text-[#ebdcff] min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2f2444] text-[#feb300] text-xs font-bold border border-[#3a2f50]">
            <span className="material-symbols-outlined text-sm">compare_arrows</span>
            <span>Section 37 Factual Event Decision Matrix</span>
          </div>
          <h1 className="font-headline font-extrabold text-3xl sm:text-4xl text-[#ebdcff]">
            Compare Gujarat Garba Events
          </h1>
          <p className="text-xs sm:text-sm text-[#e1bfb0] leading-relaxed">
            Side-by-side factual comparison of Gujarat's premier Navratri venues. No artificial rating badges—just transparent, verified data to help you plan your nights.
          </p>
        </div>

        {/* Dropdown selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#211635] border border-[#3a2f50] p-4 rounded-2xl shadow-md">
          <div>
            <label className="block text-xs font-bold text-[#ebdcff] mb-1">Select Event 1</label>
            <select
              value={selectedEvent1Id}
              onChange={(e) => setSelectedEvent1Id(e.target.value)}
              className="w-full bg-[#180d2c] border border-[#3a2f50] text-[#ebdcff] text-xs font-bold rounded-lg p-2.5 focus:outline-none focus:border-[#ff6f00]"
            >
              {events.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name} ({e.city})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#ebdcff] mb-1">Select Event 2</label>
            <select
              value={selectedEvent2Id}
              onChange={(e) => setSelectedEvent2Id(e.target.value)}
              className="w-full bg-[#180d2c] border border-[#3a2f50] text-[#ebdcff] text-xs font-bold rounded-lg p-2.5 focus:outline-none focus:border-[#ff6f00]"
            >
              {events.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name} ({e.city})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Factual Comparison Table */}
        <div className="bg-[#211635] border border-[#3a2f50] rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-[#e1bfb0]">
              <thead className="bg-[#130827] text-[#ebdcff]">
                <tr>
                  <th className="p-4 w-1/4 uppercase font-bold text-[11px] text-[#a98a7c]">Factual Metric</th>
                  <th className="p-4 w-3/8 border-l border-[#3a2f50]">
                    <div className="font-bold text-sm text-[#feb300]">{ev1.name}</div>
                    <span className="text-[11px] text-[#a98a7c] font-normal">{ev1.city}</span>
                  </th>
                  <th className="p-4 w-3/8 border-l border-[#3a2f50]">
                    <div className="font-bold text-sm text-[#ff6f00]">{ev2.name}</div>
                    <span className="text-[11px] text-[#a98a7c] font-normal">{ev2.city}</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3a2f50]">
                {/* 1. City & Venue */}
                <tr className="hover:bg-[#251a39]">
                  <td className="p-4 font-bold text-[#ebdcff]">Venue & Address</td>
                  <td className="p-4 border-l border-[#3a2f50] leading-relaxed">{ev1.venue.address}</td>
                  <td className="p-4 border-l border-[#3a2f50] leading-relaxed">{ev2.venue.address}</td>
                </tr>

                {/* 2. Turf Area & Capacity */}
                <tr className="hover:bg-[#251a39]">
                  <td className="p-4 font-bold text-[#ebdcff]">Ground Area & Max Capacity</td>
                  <td className="p-4 border-l border-[#3a2f50]">
                    <span className="font-bold text-[#ebdcff]">
                      {ev1.venue.areaSquareFeet.toLocaleString('en-IN')} sq.ft
                    </span>{' '}
                    ({ev1.venue.maxDancerCapacity.toLocaleString('en-IN')} max dancers)
                  </td>
                  <td className="p-4 border-l border-[#3a2f50]">
                    <span className="font-bold text-[#ebdcff]">
                      {ev2.venue.areaSquareFeet.toLocaleString('en-IN')} sq.ft
                    </span>{' '}
                    ({ev2.venue.maxDancerCapacity.toLocaleString('en-IN')} max dancers)
                  </td>
                </tr>

                {/* 3. Surface Type */}
                <tr className="hover:bg-[#251a39]">
                  <td className="p-4 font-bold text-[#ebdcff]">Dancer Ground Surface</td>
                  <td className="p-4 border-l border-[#3a2f50] text-[#3ce36a] font-semibold">{ev1.venue.surfaceType}</td>
                  <td className="p-4 border-l border-[#3a2f50] text-[#3ce36a] font-semibold">{ev2.venue.surfaceType}</td>
                </tr>

                {/* 4. Ticket Starting Price */}
                <tr className="hover:bg-[#251a39]">
                  <td className="p-4 font-bold text-[#ebdcff]">Ticket Starting Price</td>
                  <td className="p-4 border-l border-[#3a2f50] font-bold text-sm text-[#feb300]">
                    {ev1.isFreeEntry ? '100% Free' : `₹${ev1.startingPrice} / night`}
                  </td>
                  <td className="p-4 border-l border-[#3a2f50] font-bold text-sm text-[#feb300]">
                    {ev2.isFreeEntry ? '100% Free' : `₹${ev2.startingPrice} / night`}
                  </td>
                </tr>

                {/* 5. Headliner Artists */}
                <tr className="hover:bg-[#251a39]">
                  <td className="p-4 font-bold text-[#ebdcff]">Leading Artists</td>
                  <td className="p-4 border-l border-[#3a2f50] font-semibold text-[#ebdcff]">
                    {ev1.featuredArtists.map((a) => a.name).join(', ')}
                  </td>
                  <td className="p-4 border-l border-[#3a2f50] font-semibold text-[#ebdcff]">
                    {ev2.featuredArtists.map((a) => a.name).join(', ')}
                  </td>
                </tr>

                {/* 6. Competitions Available */}
                <tr className="hover:bg-[#251a39]">
                  <td className="p-4 font-bold text-[#ebdcff]">State Sanctioned Spardhas</td>
                  <td className="p-4 border-l border-[#3a2f50]">
                    {ev1.competitions.length > 0 ? (
                      <span className="text-[#3ce36a] font-bold">
                        {ev1.competitions.length} Competitions (₹
                        {ev1.competitions.reduce((acc, c) => acc + c.totalCashPool, 0).toLocaleString('en-IN')}{' '}
                        Total Pool)
                      </span>
                    ) : (
                      'Spot Costume & Best Khelaiya Daily'
                    )}
                  </td>
                  <td className="p-4 border-l border-[#3a2f50]">
                    {ev2.competitions.length > 0 ? (
                      <span className="text-[#3ce36a] font-bold">
                        {ev2.competitions.length} Competitions (₹
                        {ev2.competitions.reduce((acc, c) => acc + c.totalCashPool, 0).toLocaleString('en-IN')}{' '}
                        Total Pool)
                      </span>
                    ) : (
                      'Spot Costume & Best Khelaiya Daily'
                    )}
                  </td>
                </tr>

                {/* 7. Parking Facilities */}
                <tr className="hover:bg-[#251a39]">
                  <td className="p-4 font-bold text-[#ebdcff]">Parking Bays & Transit</td>
                  <td className="p-4 border-l border-[#3a2f50] leading-relaxed">
                    {ev1.parkingLots.length > 0
                      ? `${ev1.parkingLots.reduce((acc, l) => acc + l.capacity, 0)}+ total reserved bays across ${ev1.parkingLots.length} decks`
                      : 'Nearby civic street parking only'}
                  </td>
                  <td className="p-4 border-l border-[#3a2f50] leading-relaxed">
                    {ev2.parkingLots.length > 0
                      ? `${ev2.parkingLots.reduce((acc, l) => acc + l.capacity, 0)}+ total reserved bays across ${ev2.parkingLots.length} decks`
                      : 'Nearby civic street parking only'}
                  </td>
                </tr>

                {/* 8. Food Options */}
                <tr className="hover:bg-[#251a39]">
                  <td className="p-4 font-bold text-[#ebdcff]">Food & Fasting Stalls</td>
                  <td className="p-4 border-l border-[#3a2f50]">
                    {ev1.foodZone.stallsCount} Stalls · Jain & Fasting Food Available ({ev1.foodZone.priceRange})
                  </td>
                  <td className="p-4 border-l border-[#3a2f50]">
                    {ev2.foodZone.stallsCount} Stalls · Jain & Fasting Food Available ({ev2.foodZone.priceRange})
                  </td>
                </tr>

                {/* 9. Dress Code */}
                <tr className="hover:bg-[#251a39]">
                  <td className="p-4 font-bold text-[#ebdcff]">Dress Code</td>
                  <td className="p-4 border-l border-[#3a2f50] font-semibold text-[#ffd799]">{ev1.dressCodeRequirement}</td>
                  <td className="p-4 border-l border-[#3a2f50] font-semibold text-[#ffd799]">{ev2.dressCodeRequirement}</td>
                </tr>

                {/* 10. Verification Status */}
                <tr className="hover:bg-[#251a39]">
                  <td className="p-4 font-bold text-[#ebdcff]">Verification Status</td>
                  <td className="p-4 border-l border-[#3a2f50] text-[#3ce36a] font-bold">
                    ✓ {ev1.verification.status} ({ev1.verification.verifiedBy})
                  </td>
                  <td className="p-4 border-l border-[#3a2f50] text-[#3ce36a] font-bold">
                    ✓ {ev2.verification.status} ({ev2.verification.verifiedBy})
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#130827] flex justify-end gap-3 border-t border-[#3a2f50]">
            <button
              onClick={() => onSelectEvent(ev1.id)}
              className="px-5 py-2 rounded-full bg-[#ff6f00] text-white font-bold text-xs hover:brightness-110 cursor-pointer"
            >
              Open {ev1.name.split(' ')[0]}
            </button>
            <button
              onClick={() => onSelectEvent(ev2.id)}
              className="px-5 py-2 rounded-full bg-[#feb300] text-[#432c00] font-bold text-xs hover:brightness-110 cursor-pointer"
            >
              Open {ev2.name.split(' ')[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

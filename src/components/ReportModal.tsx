import React, { useState } from 'react';
import { GarbaEvent } from '../types';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  events: GarbaEvent[];
  selectedEventId?: string;
  onReportSubmitted: (report: { eventName: string; category: string; description: string }) => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({
  isOpen,
  onClose,
  events,
  selectedEventId,
  onReportSubmitted
}) => {
  const [targetEventId, setTargetEventId] = useState(selectedEventId || events[0]?.id || '');
  const [category, setCategory] = useState('Timing changed');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const categories = [
    'Event cancelled',
    'Event date changed',
    'Timing changed',
    'Artist changed',
    'Venue changed',
    'Parking unavailable',
    'Parking full',
    'Food unavailable',
    'Ticket price changed',
    'Tickets sold out',
    'Competition changed',
    'Prize changed',
    'Dress code changed',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const eventObj = events.find((ev) => ev.id === targetEventId);
    onReportSubmitted({
      eventName: eventObj ? eventObj.name : 'General Arena',
      category,
      description
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#2f2444] border border-[#3a2f50] rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#e1bfb0] hover:text-white hover:bg-[#3a2f50] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#93000a]/50 text-[#ffb4ab] border border-[#ffb4ab]/30 flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-xl">report</span>
          </div>
          <div>
            <h3 className="font-headline font-bold text-lg text-[#ebdcff]">
              Report Incorrect Information
            </h3>
            <p className="text-xs text-[#a98a7c]">
              No registration required · Reports undergo verification by the State Trust
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-[#003912]/40 border border-[#3ce36a]/40 p-6 rounded-xl text-center space-y-2">
            <span className="material-symbols-outlined text-4xl text-[#3ce36a]">check_circle</span>
            <h4 className="font-bold text-base text-[#ebdcff]">Report Queued for Verification</h4>
            <p className="text-xs text-[#e1bfb0]">
              Thank you for keeping Gujarat's Garba platform accurate. The admin verification team has received your report.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#ebdcff] mb-1">
                Select Garba Event
              </label>
              <select
                value={targetEventId}
                onChange={(e) => setTargetEventId(e.target.value)}
                className="w-full bg-[#211635] border border-[#3a2f50] text-[#ebdcff] text-xs rounded-lg p-2.5 focus:outline-none focus:border-[#ff6f00]"
              >
                {events.map((ev) => (
                  <option key={ev.id} value={ev.id}>
                    {ev.name} ({ev.city})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#ebdcff] mb-1">
                Category of Discrepancy
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#211635] border border-[#3a2f50] text-[#ebdcff] text-xs rounded-lg p-2.5 focus:outline-none focus:border-[#ff6f00]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#ebdcff] mb-1">
                Details or Correction Source
              </label>
              <textarea
                required
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Organizer posted on Instagram that timing moved to 9:00 PM, or Parking P3 is full tonight..."
                className="w-full bg-[#211635] border border-[#3a2f50] text-[#ebdcff] placeholder-[#a98a7c] text-xs rounded-lg p-2.5 focus:outline-none focus:border-[#ff6f00]"
              />
            </div>

            <div className="bg-[#130827] p-3 rounded-lg text-[11px] text-[#a98a7c] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#feb300] text-sm">shield</span>
              <span>
                Verified sources like official Instagram/website notifications help resolve claims in under 15 minutes.
              </span>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-[#251a39] text-xs font-semibold text-[#ebdcff] hover:bg-[#3a2f50] transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-[#ff6f00] text-white text-xs font-bold hover:brightness-110 transition-all shadow-md cursor-pointer flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">send</span>
                Submit Report
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

import React from 'react';

interface FooterProps {
  onNavigateTab?: (tab: string) => void;
  onOpenReportModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab, onOpenReportModal }) => {
  return (
    <footer className="w-full bg-[#130827] text-[#e1bfb0] py-12 border-t border-[#251a39] shadow-[0_1px_8px_rgba(0,0,0,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Brand & Endorsement */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#ff6f00] text-2xl">celebration</span>
              <span className="font-headline font-bold text-xl text-[#ebdcff]">Garba Utsav & Spardha</span>
            </div>
            <p className="text-xs text-[#e1bfb0] mb-4 leading-relaxed">
              The Gujarat cultural authority's official digital platform for traditional Navratri Mahotsav rankings, live arena crowd density, mandli verification, and prestigious prize disbursement.
            </p>
            <div className="flex items-center gap-1.5 text-[#3ce36a] text-xs font-semibold bg-[#211635] border border-[#3a2f50] px-3 py-1.5 rounded-full w-fit">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span>Gujarat Cultural Trust Endorsed</span>
            </div>
          </div>

          {/* Column 2: Festival Spardha */}
          <div>
            <h4 className="font-headline font-bold text-sm text-[#ebdcff] mb-4 uppercase tracking-wider">
              Festival Spardha
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigateTab?.('competitions')}
                  className="hover:text-[#ffb691] transition-colors cursor-pointer"
                >
                  Raas & Garba Rules 2026
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab?.('competitions')}
                  className="hover:text-[#ffb691] transition-colors cursor-pointer"
                >
                  Judging Criteria & Weightages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab?.('competitions')}
                  className="hover:text-[#ffb691] transition-colors cursor-pointer"
                >
                  Cash Prize Pools & Trophies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab?.('competitions')}
                  className="hover:text-[#ffb691] transition-colors cursor-pointer"
                >
                  Chaniyo & Costume Guidelines
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab?.('competitions')}
                  className="hover:text-[#ffb691] transition-colors cursor-pointer"
                >
                  Mandli & Team Passes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Arena Services & Safety */}
          <div>
            <h4 className="font-headline font-bold text-sm text-[#ebdcff] mb-4 uppercase tracking-wider">
              Arena Services & Safety
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigateTab?.('radar')}
                  className="hover:text-[#ffb691] transition-colors cursor-pointer"
                >
                  Live Ground Capacity Trackers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateTab?.('radar')}
                  className="hover:text-[#ffb691] transition-colors cursor-pointer"
                >
                  Valet & Arena Parking Passes
                </button>
              </li>
              <li>
                <span className="text-[#a98a7c]">Emergency Arena Medical Posts</span>
              </li>
              <li>
                <span className="text-[#a98a7c]">Lost & Found Desk Directory</span>
              </li>
              <li>
                <span className="text-[#3ce36a]">Anti-Harassment Helplines (181 Abhayam)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Helpline & Control Room */}
          <div>
            <h4 className="font-headline font-bold text-sm text-[#ebdcff] mb-4 uppercase tracking-wider">
              Helpline & Control Room
            </h4>
            <p className="text-xs text-[#a98a7c] mb-2">
              24x7 Navratri Central Control Center during Aaso Sud 1 to 9:
            </p>
            <div className="bg-[#211635] p-3 rounded-xl space-y-1.5 mb-3 border border-[#3a2f50]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#feb300]">
                <span className="material-symbols-outlined text-sm">phone_in_talk</span>
                <span>1800-233-GARBA (Toll Free)</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#e1bfb0]">
                <span className="material-symbols-outlined text-sm">local_police</span>
                <span>Control: +91 79 2658 0000</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#e1bfb0]">
                <span className="material-symbols-outlined text-sm">mail</span>
                <span>spardha@garbautsav.org</span>
              </div>
            </div>

            {onOpenReportModal && (
              <button
                onClick={onOpenReportModal}
                className="w-full py-1.5 px-3 rounded-lg bg-[#251a39] hover:bg-[#2f2444] border border-[#ffb4ab]/30 text-[#ffb4ab] text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">flag</span>
                Report Outdated or Incorrect Info
              </button>
            )}
          </div>
        </div>

        <div className="pt-6 border-t border-[#251a39] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a98a7c]">
          <p>© 2026 Gujarat State Garba Utsav & Cultural Heritage Trust. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#ebdcff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ebdcff] transition-colors">Official Rulebook</a>
            <a href="#" className="hover:text-[#ebdcff] transition-colors">Security & Anti-Touting</a>
            <a href="#" className="hover:text-[#ebdcff] transition-colors">Trust Certification</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

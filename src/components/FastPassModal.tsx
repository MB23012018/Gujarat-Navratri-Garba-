import React from 'react';

interface FastPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FastPassModal: React.FC<FastPassModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#2f2444] border border-[#3a2f50] rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#e1bfb0] hover:text-white hover:bg-[#3a2f50] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-[#ff6f00] text-white flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-xl">qr_code_scanner</span>
          </div>
          <div>
            <h3 className="font-headline font-bold text-lg text-[#ebdcff]">Performer Fast Pass</h3>
            <p className="text-xs text-[#e1bfb0]">Hold near turnstile optical scanner at Gate 2</p>
          </div>
        </div>

        {/* Digital Pass Card */}
        <div className="bg-[#130827] p-6 rounded-xl flex flex-col items-center justify-center mb-5 border border-[#251a39]">
          <div className="p-3 bg-white rounded-lg shadow-inner mb-3">
            {/* SVG QR Code */}
            <svg className="w-44 h-44" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect fill="#ffffff" height="100" width="100" />
              {/* Corner squares */}
              <rect fill="#180d2c" height="25" width="25" x="10" y="10" />
              <rect fill="#ffffff" height="15" width="15" x="15" y="15" />
              <rect fill="#ff6f00" height="9" width="9" x="18" y="18" />

              <rect fill="#180d2c" height="25" width="25" x="65" y="10" />
              <rect fill="#ffffff" height="15" width="15" x="70" y="15" />
              <rect fill="#ff6f00" height="9" width="9" x="73" y="18" />

              <rect fill="#180d2c" height="25" width="25" x="10" y="65" />
              <rect fill="#ffffff" height="15" width="15" x="15" y="70" />
              <rect fill="#ff6f00" height="9" width="9" x="18" y="73" />

              {/* Data modules */}
              <rect fill="#180d2c" height="6" width="6" x="42" y="12" />
              <rect fill="#180d2c" height="6" width="6" x="52" y="12" />
              <rect fill="#180d2c" height="8" width="8" x="45" y="24" />
              <rect fill="#ff6f00" height="20" rx="4" width="20" x="40" y="40" />
              <circle cx="50" cy="50" fill="#ffffff" r="5" />
              <rect fill="#180d2c" height="12" width="6" x="12" y="44" />
              <rect fill="#180d2c" height="6" width="8" x="24" y="42" />
              <rect fill="#180d2c" height="6" width="10" x="68" y="42" />
              <rect fill="#180d2c" height="12" width="8" x="80" y="48" />
              <rect fill="#180d2c" height="8" width="8" x="42" y="68" />
              <rect fill="#180d2c" height="6" width="14" x="54" y="72" />
              <rect fill="#180d2c" height="12" width="12" x="74" y="66" />
              <rect fill="#180d2c" height="8" width="16" x="70" y="82" />
            </svg>
          </div>

          <div className="font-prize-display text-2xl text-[#feb300] tracking-wider">#RANG-CP-072</div>
          <div className="text-xs text-[#3ce36a] flex items-center gap-1 mt-1 font-semibold">
            <span className="material-symbols-outlined text-sm">verified</span>
            Verified for Round 3 (Reporting 08:45 PM)
          </div>
        </div>

        {/* Assigned Details */}
        <div className="space-y-2 text-xs text-[#e1bfb0] bg-[#251a39] p-3 rounded-lg mb-5">
          <div className="flex justify-between">
            <span className="text-[#a98a7c]">Assigned Gate:</span>
            <span className="text-[#ebdcff] font-bold">Gate 2 (Performer Turnstiles 3 & 4)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a98a7c]">Parking Space:</span>
            <span className="text-[#ebdcff] font-bold">Lot P2 (Bay P2-44 Reserved)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a98a7c]">Dancers:</span>
            <span className="text-[#ebdcff] font-bold">Kavita Patel & Parth Shah</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#ff6f00] hover:bg-[#ff6f00]/90 text-white font-bold py-2.5 rounded-full transition-all shadow-md cursor-pointer"
        >
          Back to Ground Telemetry
        </button>
      </div>
    </div>
  );
};
